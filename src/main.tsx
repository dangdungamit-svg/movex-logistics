import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

const container = document.getElementById('root')!;
const app = (
  <StrictMode>
    <App />
  </StrictMode>
);

// Hydrate only when the HTML was prerendered for this exact route, so the hero
// is not torn down and repainted on load.
const path = window.location.pathname.replace(/\/+$/, '') || '/';
if (container.dataset.prerenderedPath === path) {
  hydrateRoot(container, app);
} else {
  createRoot(container).render(app);
}
