import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Routes from './routes.tsx';
import './index.css';
import './markdown.css'; // Import the CSS file for styling

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Routes />
  </StrictMode>,
);
