import { ArrowRight, ArrowUpRight, Check, Code2, Layout, PenTool, Rocket, Search, Server, ShoppingCart, type LucideIcon } from "lucide-react";
import { Link } from "wouter";
import HeroOrb from "@/components/HeroOrb";
import { ProjectCard } from "@/components/ProjectCard";
import SiteLayout from "@/components/SiteLayout";
import TechIcon, { type TechName } from "@/components/TechIcon";
import { faq, process, profile, projects, services, skills, stats, testimonials } from "@/data/portfolio";

const serviceIcons: Record<string, LucideIcon> = { layout: Layout, server: Server, cart: ShoppingCart, rocket: Rocket };
const stepIcons: LucideIcon[] = [Search, PenTool, Code2, Rocket];
const techTiles: TechName[] = ["React", "Node.js", "Express", "MongoDB"];

export default function Home() {
  return (
    <SiteLayout>
      <section className="hero">
        <div className="container">
          <div className="hero-grid">
            <div>
              <span className="pill mono">{profile.availability}</span>
              <h1>
                Je crée des expériences digitales qui font avancer votre <span className="grad">entreprise.</span>
              </h1>
              <p className="hero-script grad">Design. Code. Résultats.</p>
              <p className="hero-desc">{profile.tagline}</p>
              <div className="hero-actions">
                <Link className="btn btn-primary" href="/work">
                  Voir mes projets <ArrowRight size={17} />
                </Link>
                <Link className="btn btn-ghost" href="/contact">
                  Démarrer un projet
                </Link>
              </div>
            </div>
            <div className="hero-visual">
              <HeroOrb />
            </div>
          </div>
          <div className="stack-panel">
            <span className="mono">Stack technique</span>
            <div className="tiles">
              {techTiles.map((tech) => (
                <div className="tile" key={tech}>
                  <TechIcon name={tech} />
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="projets">
        <div className="container">
          <div className="section-head reveal">
            <div>
              <p className="kicker mono">01 / Travail sélectionné</p>
              <h2>
                Projets en <span className="grad">vedette</span>
              </h2>
            </div>
            <p className="section-lead">
              Des projets concrets, pensés pour de vraies entreprises : un code propre, une bonne expérience utilisateur et un site en ligne.
            </p>
          </div>
          <div className="project-grid">
            {projects.slice(0, 3).map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          <div className="hero-actions reveal">
            <Link className="btn btn-ghost" href="/work">
              Voir tous les projets <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      <section className="section" id="services">
        <div className="container">
          <div className="section-head reveal">
            <div>
              <p className="kicker mono">02 / Services</p>
              <h2>
                Des solutions web qui <span className="grad">apportent des résultats</span>
              </h2>
            </div>
            <p className="section-lead">Des sites rapides, sûrs et simples à utiliser, conçus pour attirer vos clients.</p>
          </div>
          <div className="services-grid">
            {services.map((service) => {
              const Icon = serviceIcons[service.icon] ?? Layout;
              return (
                <article className="service-card card reveal" key={service.title}>
                  <div className="service-icon"><Icon size={22} /></div>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  <ul className="check-list">
                    {service.points.map((point) => (
                      <li key={point}><Check size={15} />{point}</li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section" id="methode">
        <div className="container">
          <div className="section-head reveal">
            <div>
              <p className="kicker mono">03 / Ma méthode</p>
              <h2>
                De l'idée à <span className="grad">l'impact réel</span>
              </h2>
            </div>
            <p className="section-lead">Une collaboration claire, du premier échange jusqu'à la mise en ligne.</p>
          </div>
          <div className="process-flow">
            {process.map((step, index) => {
              const Icon = stepIcons[index] ?? Code2;
              return (
                <article className="step card reveal" key={step.title}>
                  <span className="step-num mono">{String(index + 1).padStart(2, "0")}</span>
                  <div className="step-icon"><Icon size={22} /></div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section" id="a-propos">
        <div className="container about-grid">
          <div className="about-copy reveal">
            <p className="kicker mono">04 / À propos</p>
            <p className="big">Je transforme les besoins des entreprises en sites simples à utiliser.</p>
            <p>{profile.bio}</p>
            <ul className="tags">
              {skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
            <p style={{ marginTop: 22 }}>
              <Link className="link-arrow" href="/about">
                Mon parcours <ArrowUpRight size={16} />
              </Link>
            </p>
          </div>
          <div className="stats">
            {stats.map((stat) => (
              <div className="stat card reveal" key={stat.label}>
                <strong className="grad">{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {testimonials.length > 0 && (
        <section className="section" id="temoignages">
          <div className="container">
            <div className="section-head reveal">
              <div>
                <p className="kicker mono">05 / Témoignages</p>
                <h2>Ils m'ont <span className="grad">fait confiance</span></h2>
              </div>
            </div>
            <div className="testimonials">
              {testimonials.map((item) => (
                <figure className="testimonial card reveal" key={item.author}>
                  <blockquote>« {item.quote} »</blockquote>
                  <figcaption><b>{item.author}</b> — {item.role}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section" id="faq">
        <div className="container">
          <div className="section-head reveal">
            <div>
              <p className="kicker mono">Questions fréquentes</p>
              <h2>
                Vos <span className="grad">questions</span>
              </h2>
            </div>
          </div>
          <div className="faq reveal">
            {faq.map((item) => (
              <details key={item.q}>
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="cta-band reveal">
            <div>
              <h2>Un projet en tête ? <span className="grad">Construisons-le.</span></h2>
              <p>Un site, une application ou une boutique en ligne : expliquez-moi votre idée, je vous aide à la transformer en produit réel.</p>
            </div>
            <Link className="btn btn-primary" href="/contact">
              Me contacter <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
