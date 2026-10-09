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
    <div className="form card">
      <label>
        Votre nom
        <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Ex. Awa Mballa" />
      </label>
      <label>
        Votre projet
        <textarea
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Décrivez en quelques lignes ce dont vous avez besoin."
        />
      </label>
      <div className="form-actions">
        {whatsapp && (
          <a className="btn btn-primary" href={whatsapp} target="_blank" rel="noreferrer">
            Envoyer sur WhatsApp <ArrowUpRight size={16} />
          </a>
        )}
        {email && (
          <a className="btn btn-ghost" href={email}>
            Envoyer par email <ArrowUpRight size={16} />
          </a>
        )}
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <SiteLayout>
      <section className="page-hero">
        <div className="container">
          <p className="kicker mono">{profile.availability}</p>
          <h1>
            Parlons de votre <span className="grad">projet</span>
          </h1>
          <p>Un site, une application ou une boutique en ligne : décrivez votre besoin, je reviens vers vous.</p>
        </div>
      </section>
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container contact-grid">
          <MessageForm />
          <ul className="channel-list">
            {channels.map((channel) => {
              const Icon = channelIcons[channel.id] ?? ArrowUpRight;
              return (
                <li key={channel.id}>
                  <a className="card" href={channel.href} target={channel.id === "email" ? undefined : "_blank"} rel="noreferrer">
                    <Icon size={18} />
                    <strong>{channel.label}</strong>
                    <small>{channel.handle}</small>
                    <ArrowUpRight size={15} />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </SiteLayout>
  );
}
