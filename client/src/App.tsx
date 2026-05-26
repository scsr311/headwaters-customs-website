import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import SplashScreen from "./components/SplashScreen";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import DreamBuild from "./pages/DreamBuild";
import QuoteRequest from "./pages/QuoteRequest";
import Gallery from "./pages/Gallery";
import BuildK20 from "./pages/BuildK20";
import BuildF450 from "./pages/BuildF450";
import BuildScout from "./pages/BuildScout";
import BuildC20 from "./pages/BuildC20";
import BuildK10 from "./pages/BuildK10";
import BuildF6 from "./pages/BuildF6";
import { useState } from "react";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path="/services" component={Services} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/dream-build" component={DreamBuild} />
      <Route path="/quote" component={QuoteRequest} />
      <Route path="/gallery" component={Gallery} />
      <Route path="/builds/k20" component={BuildK20} />
      <Route path="/builds/f450" component={BuildF450} />
      <Route path="/builds/scout" component={BuildScout} />
      <Route path="/builds/c20" component={BuildC20} />
      <Route path="/builds/k10" component={BuildK10} />
      <Route path="/builds/f6" component={BuildF6} />
      <Route path={"/404"} component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  // Show splash only once per session
  const [showSplash, setShowSplash] = useState(() => {
    return !sessionStorage.getItem("hwc_splash_seen");
  });

  const handleEnter = () => {
    sessionStorage.setItem("hwc_splash_seen", "1");
    setShowSplash(false);
  };

  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          {showSplash && <SplashScreen onEnter={handleEnter} />}
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
