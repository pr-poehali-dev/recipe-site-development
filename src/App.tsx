import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import Footer from "./components/Footer";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <div className="flex flex-col min-h-screen bg-background">
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Header />
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/categories" element={<NotFound />} />
              <Route path="/category/:id" element={<NotFound />} />
              <Route path="/recipe/:id" element={<NotFound />} />
              <Route path="/recipes" element={<NotFound />} />
              <Route path="/favorites" element={<NotFound />} />
              <Route path="/about" element={<NotFound />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </div>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
