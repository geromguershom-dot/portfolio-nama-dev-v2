import { useMemo, useState } from "react";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { Link } from "wouter";
import SiteLayout from "@/components/SiteLayout";
import { ProjectRow } from "@/components/ProjectRow";
import { categories, process, profile, projects, services, skills } from "@/data/portfolio";

export default function Home() {
  const [activeFilter, setActiveFilter] = useState("Tout voir");

  const visibleProjects = useMemo(
    () => (activeFilter === "Tout voir" ? projects : projects.filter((project) => project.category === activeFilter)),
    [activeFilter],
  );

  return (
    <SiteLayout>
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-topline">
          <span>Portfolio / {new Date().getFullYear()}</span>
          <span>{profile.location}</span>
        </div>
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">{profile.availability}</p>
            <h1 id="hero-title">
              Full-Stack.
              <br />
              Web Developer.
              <br />
              <em>Builder.</em>
            </h1>
            <div className="hero-bottom">
              <p className="hero-description">{profile.tagline}</p>
              <div className="hero-tech-stack" aria-label="Technologies principales">
                <span>React</span>
                <span>Node.js</span>
                <span>Express</span>
                <span>MongoDB</span>
                <span>REST API</span>
              </div>
              <div className="hero-actions">
                <Link className="text-cta" href="/contact">
                  Démarrer un projet <ArrowUpRight size={16} />
                </Link>
                <Link className="round-link" href="/work" aria-label="Voir les projets">
                  <ArrowDownRight size={21} />
                </Link>
              </div>
            </div>
          </div>
          <div className="hero-index">
            <div className="hero-image-frame">
              <img src={profile.photo || "/portrait-placeholder.svg"} alt={`Portrait de ${profile.name}`} />
              <div className="hero-image-overlay">
                <span>{profile.name}</span>
                <small>{profile.role}</small>
              </div>
              <span className="hero-badge hero-badge-projects">
                <strong>{String(projects.length).padStart(2, "0")}</strong>
                <small>Projets</small>
              </span>
              <span className="hero-badge hero-badge-stack">
                <strong>MERN</strong>
                <small>Mongo · Express · React · Node</small>
              </span>
            </div>
          </div>
        </div>
      </section>

      <div className="ticker" aria-hidden="true">
        <span>Concevoir</span><i>✳</i><span>Construire</span><i>✳</i><span>Déployer</span><i>✳</i><span>Améliorer</span><i>✳</i>
      </div>

      <section className="services-section" id="services">
        <div className="section-heading">
          <div>
            <p className="section-kicker">01 / Ce que je construis</p>
            <h2>Services<span>.</span></h2>
          </div>
          <p className="section-aside">Du besoin<br />au site en ligne.</p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <article className="service-card" key={service.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <strong>{service.tags}</strong>
            </article>
          ))}
        </div>
        <div className="tech-strip">
          <span>Stack principale</span>
          <div>
            {skills.map((skill) => (
              <b key={skill}>{skill}</b>
            ))}
          </div>
        </div>
      </section>

      <section className="archive-section" id="work">
        <div className="section-heading">
          <div>
            <p className="section-kicker">02 / Travail sélectionné</p>
            <h2>Projets<span>.</span></h2>
          </div>
          <p className="section-aside">Des projets concrets,<br />des sites en ligne.</p>
        </div>
        <div className="filter-row" aria-label="Filtrer les projets">
          {["Tout voir", ...categories].map((filter) => (
            <button
              key={filter}
              className={activeFilter === filter ? "filter active" : "filter"}
              onClick={() => setActiveFilter(filter)}
              aria-pressed={activeFilter === filter}
            >
              {filter}
            </button>
          ))}
        </div>
        <div className="archive-list">
          {visibleProjects.map((project, index) => (
            <ProjectRow key={project.id} project={project} index={index} />
          ))}
          {visibleProjects.length === 0 && <p className="empty-state">Aucun projet dans cette catégorie pour le moment.</p>}
        </div>
      </section>

      <section className="process-section" id="process">
        <div className="section-heading">
          <div>
            <p className="section-kicker">03 / Ma méthode</p>
            <h2>Méthode<span>.</span></h2>
          </div>
          <p className="section-aside">Une collaboration claire,<br />du début à la mise en ligne.</p>
        </div>
        <div className="process-list">
          {process.map((step, index) => (
            <div key={step.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="section-heading">
          <div>
            <p className="section-kicker">04 / À propos</p>
            <h2>À propos<span>.</span></h2>
          </div>
          <p className="section-aside">Une personne derrière<br />chaque projet.</p>
        </div>
        <div className="about-grid">
          <div className="about-statement">
            <p className="big-copy">Je transforme les besoins des entreprises en sites simples à utiliser.</p>
            <p className="body-copy">{profile.bio}</p>
            <Link className="text-cta dark" href="/about">
              Mon parcours <ArrowUpRight size={16} />
            </Link>
          </div>
          <div className="about-details">
            <div><span>Basé à</span><strong>{profile.location}</strong></div>
            <div><span>Spécialité</span><strong>{profile.role}</strong></div>
            <div><span>Je travaille sur</span><strong>Sites · Applications · E-commerce</strong></div>
            <div><span>Langues</span><strong>Français · English</strong></div>
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-topline">
          <span>05 / Contact</span>
          <span>{profile.availability}</span>
        </div>
        <div className="contact-content">
          <p className="section-kicker">Un projet en tête ?</p>
          <h2>
            Parlons<br />de votre<br /><em>projet.</em>
          </h2>
          <Link className="email-link" href="/contact">
            Me contacter <ArrowUpRight size={18} />
          </Link>
        </div>
        <div className="contact-orbit">Disponible<br /><em>maintenant</em></div>
      </section>
    </SiteLayout>
  );
}
