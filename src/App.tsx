import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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

/**
 * Root component that wires together application providers such as
 * react-query and the router.  It also renders global toast
 * containers so that notifications can appear on any page.
 */
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      {/* Toast containers: both implementations are provided for
          compatibility with the original design.  They render
          active toasts using the useToast hook. */}
      <RadToaster />
      <SonnerToaster />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/research" element={<Research />} />
          <Route path="/conferences" element={<Conferences />} />
          <Route path="/titles" element={<Titles />} />
          <Route path="/sources" element={<Sources />} />
          <Route path="/contact" element={<Contact />} />
          {/* Catch‑all route for unmatched URLs */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;