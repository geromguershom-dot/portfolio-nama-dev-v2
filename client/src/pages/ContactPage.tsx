import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import SiteLayout, { channelIcons } from "@/components/SiteLayout";
import { channels, profile } from "@/data/portfolio";

function MessageForm() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const text = `Bonjour ${profile.shortName}, je suis ${name || "…"}. ${message}`.trim();
  const whatsapp = profile.whatsapp ? `https://wa.me/${profile.whatsapp}?text=${encodeURIComponent(text)}` : "";
  const email = profile.email
    ? `mailto:${profile.email}?subject=${encodeURIComponent(`Projet web — ${name || "demande"}`)}&body=${encodeURIComponent(text)}`
    : "";

  if (!whatsapp && !email) return null;

  return (
    <div className="contact-form">
      <label>
        Votre nom
        <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Ex. Awa Mballa" />
      </label>
      <label>
        Votre projet
        <textarea
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Décrivez en quelques lignes ce dont vous avez besoin."
        />
      </label>
      <div className="contact-form-actions">
        {whatsapp && (
          <a className="text-cta" href={whatsapp} target="_blank" rel="noreferrer">
            Envoyer sur WhatsApp <ArrowUpRight size={16} />
          </a>
        )}
        {email && (
          <a className="text-cta" href={email}>
            Envoyer par email <ArrowUpRight size={16} />
          </a>
        )}
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <SiteLayout section="04 — Contact">
      <section className="contact-section contact-page">
        <div className="contact-topline">
          <span>04 / Contact</span>
          <span>{profile.availability}</span>
        </div>
        <div className="contact-content">
          <p className="section-kicker">Un projet en tête ?</p>
          <h1>
            Parlons<br />de votre<br /><em>projet.</em>
          </h1>
          <MessageForm />
          <ul className="channel-list">
            {channels.map((channel) => {
              const Icon = channelIcons[channel.id] ?? ArrowUpRight;
              return (
                <li key={channel.id}>
                  <a href={channel.href} target={channel.id === "email" ? undefined : "_blank"} rel="noreferrer">
                    <Icon size={16} />
                    <span>{channel.label}</span>
                    <small>{channel.handle}</small>
                    <ArrowUpRight size={15} />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="contact-orbit">Disponible<br /><em>maintenant</em></div>
      </section>
    </SiteLayout>
  );
}
