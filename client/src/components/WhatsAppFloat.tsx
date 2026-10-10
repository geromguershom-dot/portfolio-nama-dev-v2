import { profile } from "@/data/portfolio";
import WhatsAppIcon from "./WhatsAppIcon";

const message = "Bonjour, j'ai vu votre portfolio et j'aimerais discuter d'un projet.";

/** Bouton WhatsApp flottant, affiché sur toutes les pages (via SiteLayout). */
export default function WhatsAppFloat() {
  if (!profile.whatsapp) return null;
  const href = `https://wa.me/${profile.whatsapp}?text=${encodeURIComponent(message)}`;

  return (
    <a className="wa-float" href={href} target="_blank" rel="noreferrer" aria-label="Me contacter sur WhatsApp">
      <span className="wa-tooltip" role="tooltip">
        Un projet en tête ?<br />
        Écrivez-moi sur WhatsApp
      </span>
      <WhatsAppIcon size={30} />
    </a>
  );
}
