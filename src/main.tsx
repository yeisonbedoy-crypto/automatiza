import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import Blog from './pages/Blog.tsx';
import Mision from './pages/Mision.tsx';
import Precios from './pages/Precios.tsx';
import './index.css';

const path = window.location.pathname;
const Page =
  path === '/mision'  ? Mision  :
  path === '/precios' ? Precios :
  path === '/blog'    ? Blog    :
  App;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Page />
  </StrictMode>,
);
