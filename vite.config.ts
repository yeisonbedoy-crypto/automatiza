import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, loadEnv} from 'vite';

/**
 * Solo en dev: /nfc y las páginas de producto/zona (sin barra final)
 * reciben el index.html raíz vía el fallback SPA de Vite, sin las
 * variables CSS de su propio index.html. En producción vercel.json ya
 * normaliza esto con una rewrite; aquí replicamos lo mismo para que la
 * versión con y sin barra se comporten igual en local.
 */
const NFC_DEV_REDIRECT_ROUTES = [
  '/nfc',
  '/nfc/tag-nfc',
  '/nfc/google-review-card',
  '/nfc/nfc-payment-review-tray',
  '/nfc/expositor-multi-enlace',
  '/nfc/pack-negocio',
  '/nfc/tenerife',
  '/nfc/lanzarote',
  '/nfc/fuerteventura',
];

function nfcTrailingSlashDevRedirect() {
  return {
    name: 'nfc-trailing-slash-dev-redirect',
    configureServer(server: import('vite').ViteDevServer) {
      server.middlewares.use((req, res, next) => {
        if (req.url && NFC_DEV_REDIRECT_ROUTES.includes(req.url)) {
          res.statusCode = 302;
          res.setHeader('Location', `${req.url}/`);
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
          nfcTagNfc: path.resolve(__dirname, 'nfc/tag-nfc/index.html'),
          nfcGoogleReviewCard: path.resolve(__dirname, 'nfc/google-review-card/index.html'),
          nfcPaymentReviewTray: path.resolve(__dirname, 'nfc/nfc-payment-review-tray/index.html'),
          nfcExpositorMultiEnlace: path.resolve(__dirname, 'nfc/expositor-multi-enlace/index.html'),
          nfcPackNegocio: path.resolve(__dirname, 'nfc/pack-negocio/index.html'),
          nfcTenerife: path.resolve(__dirname, 'nfc/tenerife/index.html'),
          nfcLanzarote: path.resolve(__dirname, 'nfc/lanzarote/index.html'),
          nfcFuerteventura: path.resolve(__dirname, 'nfc/fuerteventura/index.html'),
        },
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
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
