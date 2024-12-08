import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StyledEngineProvider } from "@mui/material/styles";
import NavBar from "./components/NavBar/NavBar";
import Main from "./routes/Main.jsx";
import "./index.css";
import CollaborateSection from "./components/CollaborateSection/CollaborateSection.jsx";
import ProductivitySection from "./components/ProductivitySection/ProductivitySection.jsx";
import GlobalSection from "./components/GlobalSection/GlobalSection.jsx";
import SuperAppSection from "./components/SuperAppSection/SuperAppSection.jsx";
import AllPlatformSection from "./components/AllPlatformSection/AllPlatformSection.jsx";

// Initialize React Query Client
const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <StyledEngineProvider injectFirst>
        {/* Your app components */}
        <NavBar />
        <CollaborateSection></CollaborateSection>
        <ProductivitySection></ProductivitySection>
        <GlobalSection></GlobalSection>
        <SuperAppSection></SuperAppSection>
        <AllPlatformSection></AllPlatformSection>
        <Main />
      </StyledEngineProvider>
    </QueryClientProvider>
  </StrictMode>
);
