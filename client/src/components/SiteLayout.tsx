import { useState, type ReactNode } from "react";
import { Link, useLocation } from "wouter";
import {
  ArrowUpRight,
  Briefcase,
  Github,
  Linkedin,
  Mail,
  Menu,
  MessageCircle,
  X,
  type LucideIcon,
} from "lucide-react";
import { channels, initials, profile } from "@/data/portfolio";

const channelIcons: Record<string, LucideIcon> = {
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
  const [menuOpen, setMenuOpen] = useState(false);
  const [location] = useLocation();

  return (
    <header className="site-header">
      <Link className="wordmark" href="/" aria-label="Retour à l’accueil">
        <span className="wordmark-mark">{initials}</span>
        <span>
          {profile.name}
          <small>{profile.location}</small>
        </span>
      </Link>
      <nav className={menuOpen ? "main-nav open" : "main-nav"} aria-label="Navigation principale">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={() => setMenuOpen(false)}
            aria-current={location === item.href ? "page" : undefined}
          >
            {item.label}
          </Link>
        ))}
      </nav>
      <div className="header-actions">
        <span className="header-availability">{profile.availability}</span>
        <Link className="header-cta" href="/contact">
          Parlons-nous <ArrowUpRight size={15} />
        </Link>
      </div>
      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
        aria-expanded={menuOpen}
      >
        {menuOpen ? <X size={20} /> : <Menu size={20} />}
      </button>
    </header>
  );
}

function Footer() {
  const social = channels.filter((channel) => channel.id !== "email");
  return (
    <footer className="site-footer">
      <span>
        © {new Date().getFullYear()} {profile.name}
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
      <a className="back-top" href="#top" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}>
        Retour en haut <ArrowUpRight size={15} />
      </a>
    </footer>
  );
}

export { channelIcons };

export default function SiteLayout({ children, section }: { children: ReactNode; section?: string }) {
  return (
    <main className="site-shell" id="top">
      <a className="skip-link" href="#content">Aller au contenu</a>
      <Header />
      {section && (
        <div className="page-topline">
          <span>Portfolio / {new Date().getFullYear()}</span>
          <span>{section}</span>
        </div>
      )}
      <div id="content">{children}</div>
      <Footer />
    </main>
  );
}
