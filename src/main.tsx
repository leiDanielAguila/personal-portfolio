import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { ThemeProvider } from "./components/theme-provider";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { TooltipProvider } from "@/components/ui/tooltip";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <TooltipProvider>
        <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
          <App />
        </ThemeProvider>
      </TooltipProvider>
    </BrowserRouter>
  </StrictMode>,
);
