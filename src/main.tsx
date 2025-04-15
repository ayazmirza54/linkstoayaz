import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { inject } from '@vercel/analytics';
import { Analytics } from '@vercel/analytics/react';
 
inject();
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <><App />
    <Analytics /></>
  </StrictMode>
);


