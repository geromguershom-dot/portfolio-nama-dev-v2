import { useEffect, useState, type ReactNode } from "react";
import { Link, useLocation } from "wouter";
import {
  ArrowUpRight,
  Briefcase,
  Github,
  Linkedin,
  Mail,
  Menu,
  MessageCircle,
  Moon,
  Sun,
  X,
  type LucideIcon,
} from "lucide-react";
import { channels, profile } from "@/data/portfolio";
import { useTheme } from "@/contexts/ThemeContext";
import Logo from "./Logo";
import ScrollProgress from "./ScrollProgress";
import WhatsAppFloat from "./WhatsAppFloat";

export const channelIcons: Record<string, LucideIcon> = {
  email: Mail,
  whatsapp: MessageCircle,
  linkedin: Linkedin,
  github: Github,
  fiverr: Briefcase,
  comeup: Briefcase,
};

const navItems = [
  { href: "/", label: "Accueil" },
  { href: "/work", label: "Projets" },
  { href: "/about", label: "À propos" },
  { href: "/contact", label: "Contact" },
];

function Header() {
  const [open, setOpen] = useState(false);
  const [location] = useLocation();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => setOpen(false), [location]);

  const isActive = (href: string) => (href === "/" ? location === "/" : location.startsWith(href));

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link className="brand" href="/" aria-label="Retour à l’accueil">
          <Logo />
          <span className="brand-text">
            {profile.name}
            <small>{profile.role}</small>
          </span>
        </Link>
        <nav className={open ? "nav open" : "nav"} aria-label="Navigation principale">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} aria-current={isActive(item.href) ? "page" : undefined}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="header-actions">
          {toggleTheme && (
            <button
              className="icon-btn"
              onClick={toggleTheme}
              aria-label={theme === "dark" ? "Passer en mode clair" : "Passer en mode sombre"}
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          )}
          <Link className="btn btn-ghost btn-sm" href="/contact">
            Parlons-nous <ArrowUpRight size={15} />
          </Link>
          <button
            className="icon-btn menu-toggle"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>
    </header>
  );
}

function Footer() {
  const social = channels.filter((channel) => channel.id !== "email");
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <span>
          © {new Date().getFullYear()} {profile.name} · {profile.location}
        </span>
        <div className="social-links">
          {social.map((channel) => {
            const Icon = channelIcons[channel.id] ?? ArrowUpRight;
            return (
              <a key={channel.id} href={channel.href} target="_blank" rel="noreferrer" aria-label={channel.label}>
                <Icon size={16} />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}

/** Fait apparaître en douceur les éléments `.reveal` quand ils entrent à l'écran. */
function useReveal(dependency: string) {
  useEffect(() => {
    const items = Array.from(document.querySelectorAll<HTMLElement>(".reveal:not(.is-visible)"));
    if (typeof IntersectionObserver === "undefined" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      items.forEach((item) => item.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, [dependency]);
}

export default function SiteLayout({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  useReveal(location);

  return (
    <>
      <a className="skip-link" href="#content">Aller au contenu</a>
      <ScrollProgress />
      <Header />
      <main id="content" className="page-fade">
        {children}
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
