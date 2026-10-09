import { ArrowUpRight } from "lucide-react";
import { Link } from "wouter";
import SiteLayout from "@/components/SiteLayout";
import { profile, skills, timeline } from "@/data/portfolio";

export default function AboutPage() {
  return (
    <SiteLayout section="03 — À propos">
      <section className="inner-page about-page">
        <div className="section-heading">
          <div>
            <p className="section-kicker">03 / À propos</p>
            <h1>À propos<span>.</span></h1>
          </div>
          <p className="section-aside">Une personne derrière<br />chaque projet.</p>
        </div>
        <div className="about-grid">
          <div className="about-statement">
            <p className="big-copy">Je transforme les besoins des entreprises en sites simples à utiliser.</p>
            <p className="body-copy">{profile.bio}</p>
            <Link className="text-cta dark" href="/contact">
              Échanger sur votre projet <ArrowUpRight size={16} />
            </Link>
          </div>
          <div className="about-details">
            <div><span>Basé à</span><strong>{profile.location}</strong></div>
            <div><span>Spécialité</span><strong>{profile.role}</strong></div>
            <div><span>Langues</span><strong>Français · English</strong></div>
          </div>
        </div>

        <div className="timeline" aria-label="Parcours">
          {timeline.map((item) => (
            <div className="timeline-item" key={item.title}>
              <span>{item.label}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="tech-strip">
          <span>Compétences</span>
          <div>
            {skills.map((skill) => (
              <b key={skill}>{skill}</b>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
