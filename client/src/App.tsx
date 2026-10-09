import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { useEffect, useState } from "react";
import { Redirect, Route, Switch, useLocation } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ProjectPage from "./pages/ProjectPage";
import WorkPage from "./pages/WorkPage";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/work/:id" component={ProjectPage} />
      <Route path="/work" component={WorkPage} />
      <Route path="/writing">{() => <Redirect to="/about" />}</Route>
      <Route path="/about" component={AboutPage} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function PageTransition() {
  const [location] = useLocation();
  const section = location === "/" ? "home" : location.replace(/^\//, "").split("/")[0] || "home";
  const project = section === "work" ? location.split("/")[2] : "";
  return (
    <div className={`route-view route-${section} ${project ? `route-project-${project}` : ""}`} key={location}>
      <span className="route-wipe" aria-hidden="true" />
      <Router />
    </div>
  );
}

function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [hovering, setHovering] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(pointer: fine) and (prefers-reduced-motion: no-preference)");
    const updateEnabled = () => {
      setEnabled(media.matches);
      document.body.classList.toggle("has-custom-cursor", media.matches);
    };
    const move = (event: PointerEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
      const target = event.target as HTMLElement | null;
      setHovering(Boolean(target?.closest("a, button, [role='button'], .hero-image-frame")));
    };
    const leave = () => setPosition({ x: -100, y: -100 });

    updateEnabled();
    media.addEventListener("change", updateEnabled);
    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("pointerleave", leave);
    return () => {
      media.removeEventListener("change", updateEnabled);
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerleave", leave);
      document.body.classList.remove("has-custom-cursor");
    };
  }, []);

  if (!enabled) return null;
  return (
    <div className={hovering ? "custom-cursor is-hovering" : "custom-cursor"} aria-hidden="true">
      <span className="cursor-glow" style={{ transform: `translate3d(${position.x}px, ${position.y}px, 0)` }} />
      <span className="cursor-ring" style={{ transform: `translate3d(${position.x}px, ${position.y}px, 0)` }} />
      <span className="cursor-dot" style={{ transform: `translate3d(${position.x}px, ${position.y}px, 0)` }} />
    </div>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <CustomCursor />
          <PageTransition />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
