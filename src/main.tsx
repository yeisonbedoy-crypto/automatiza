import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import Blog from './pages/Blog.tsx';
import Mision from './pages/Mision.tsx';
import Precios from './pages/Precios.tsx';
import SobreNosotros from './pages/SobreNosotros.tsx';
import PoliticaPrivacidad from './pages/PoliticaPrivacidad.tsx';
import './index.css';

const path = window.location.pathname;
const Page =
  path === '/mision'                  ? Mision             :
  path === '/precios'                 ? Precios            :
  path === '/blog'                    ? Blog               :
  path === '/sobre-nosotros'          ? SobreNosotros      :
  path === '/politica-de-privacidad'  ? PoliticaPrivacidad :
  App;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Page />
  </StrictMode>,
);
