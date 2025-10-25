import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "@fontsource/fira-code";
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
