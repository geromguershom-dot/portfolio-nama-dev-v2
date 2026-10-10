import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import Portrait from "@/components/Portrait";
import SiteLayout from "@/components/SiteLayout";
import { profile, skills, stats, timeline } from "@/data/portfolio";

export default function AboutPage() {
  return (
    <SiteLayout>
      <section className="page-hero">
        <div className="container">
          <p className="kicker mono">À propos</p>
          <h1>
            Une personne <span className="grad">derrière chaque projet</span>
          </h1>
        </div>
      </section>
      <section className="section" style={{ paddingTop: 48 }}>
        <div className="container about-grid">
          <div className="about-copy">
            <p className="big">Je transforme les besoins des entreprises en sites simples à utiliser.</p>
            <p>{profile.bio}</p>
            <ul className="tags">
              {skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
            <p style={{ marginTop: 24 }}>
              <Link className="btn btn-primary" href="/contact">
                Échanger sur votre projet <ArrowRight size={17} />
              </Link>
            </p>
          </div>
          <div className="about-side">
            <Portrait />
            <div className="stats">
              {stats.map((stat) => (
                <div className="stat card" key={stat.label}>
                  <strong className="grad">{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="container timeline" aria-label="Parcours">
          {timeline.map((item) => (
            <div className="timeline-item card" key={item.title}>
              <span className="mono">{item.label}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
