import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import Blog from './pages/Blog.tsx';
import Mision from './pages/Mision.tsx';
import Precios from './pages/Precios.tsx';
import SobreNosotros from './pages/SobreNosotros.tsx';
import PoliticaPrivacidad from './pages/PoliticaPrivacidad.tsx';
import Privacidad from './pages/Privacidad.tsx';
import Terminos from './pages/Terminos.tsx';
import EliminacionDatos from './pages/EliminacionDatos.tsx';
import PrivacyPolicy from './pages/PrivacyPolicy.tsx';
import Terms from './pages/Terms.tsx';
import DataDeletion from './pages/DataDeletion.tsx';
import Servicios from './pages/Servicios.tsx';
import Proyectos from './pages/Proyectos.tsx';
import Ecosistema from './pages/Ecosistema.tsx';
import Presupuesto from './pages/Presupuesto.tsx';
import Contacto from './pages/Contacto.tsx';
import StickyAssistant from './components/StickyAssistant.tsx';
import './index.css';

const path = window.location.pathname;
const Page =
  path === '/mision'                  ? Mision             :
  path === '/precios'                 ? Precios            :
  path === '/blog'                    ? Blog               :
  path === '/sobre-nosotros'          ? SobreNosotros      :
  path === '/politica-de-privacidad'  ? PoliticaPrivacidad :
  path === '/privacidad'              ? Privacidad         :
  path === '/terminos'                ? Terminos           :
  path === '/eliminacion-datos'       ? EliminacionDatos   :
  path === '/privacy-policy'          ? PrivacyPolicy      :
  path === '/terms'                   ? Terms              :
  path === '/data-deletion'           ? DataDeletion       :
  path === '/servicios'               ? Servicios          :
  path === '/proyectos'               ? Proyectos          :
  path === '/ecosistema'              ? Ecosistema         :
  path === '/presupuesto'             ? Presupuesto        :
  path === '/contacto'                ? Contacto           :
  App;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Page />
    <StickyAssistant />
  </StrictMode>,
);
