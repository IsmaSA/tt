import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";   // ← no BrowserRouter here
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster as RadToaster } from "@/components/ui/toaster";
import { Sonner as SonnerToaster } from "@/components/ui/sonner";

import Index from "@/pages/Index";
import Research from "@/pages/Research";
import Conferences from "@/pages/Conferences";
import Titles from "@/pages/Titles";
import Sources from "@/pages/Sources";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <RadToaster />
      <SonnerToaster />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/research" element={<Research />} />
        <Route path="/conferences" element={<Conferences />} />
        <Route path="/titles" element={<Titles />} />
        <Route path="/sources" element={<Sources />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
