import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import RouteTree from "./routes/RouteTree";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      {/* Your app components */}
      <BrowserRouter>
        <RouteTree />
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>
);
