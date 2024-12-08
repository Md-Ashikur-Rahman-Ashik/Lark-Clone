import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
<<<<<<< HEAD
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
=======
import "./index.css";
import Main from "./routes/Main.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

>>>>>>> bb776b6d304428d56c947be09eb975c32d8207a8
const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
<<<<<<< HEAD
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
=======
      {/* Your app components */}
      <Main />
>>>>>>> bb776b6d304428d56c947be09eb975c32d8207a8
    </QueryClientProvider>
  </StrictMode>
);
