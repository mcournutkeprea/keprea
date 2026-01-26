import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Index from "./pages/Index";
import Biofertilisant from "./pages/Biofertilisant";
import Boosters from "./pages/Boosters";
import ExtraitsNaturels from "./pages/ExtraitsNaturels";
import BiocontroleVivant from "./pages/BiocontroleVivant";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/biofertilisant" element={<Biofertilisant />} />
            <Route path="/boosters" element={<Boosters />} />
            <Route path="/extraits-naturels" element={<ExtraitsNaturels />} />
            <Route path="/biocontrole-vivant" element={<BiocontroleVivant />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
