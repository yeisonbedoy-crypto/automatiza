import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, loadEnv} from 'vite';

/**
 * Solo en dev: /nfc (sin barra final) recibe el index.html raíz vía el
 * fallback SPA de Vite, sin las variables CSS de nfc/index.html. En
 * producción vercel.json ya normaliza esto con una rewrite; aquí replicamos
 * lo mismo para que /nfc y /nfc/ se comporten igual en local.
 */
function nfcTrailingSlashDevRedirect() {
  return {
    name: 'nfc-trailing-slash-dev-redirect',
    configureServer(server: import('vite').ViteDevServer) {
      server.middlewares.use((req, res, next) => {
        if (req.url === '/nfc') {
          res.statusCode = 302;
          res.setHeader('Location', '/nfc/');
          res.end();
          return;
        }
        next();
      });
    },
  };
}

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [react(), tailwindcss(), nfcTrailingSlashDevRedirect()],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    build: {
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, 'index.html'),
          nfc: path.resolve(__dirname, 'nfc/index.html'),
        },
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Proxy same-origin al backend Canario (ya desplegado en Vercel).
      // El navegador habla con su mismo origen: cero CORS en dev/tunel.
      proxy: {
        '/api/chat': {
          target: 'https://ggenccaztvpmcnqqzlpw.supabase.co',
          changeOrigin: true,
          secure: true,
          rewrite: (p: string) => p.replace(/^\/api\/chat/, '/functions/v1/chat'),
        },
      },
    },
  };
});
