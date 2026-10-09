import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Link, useRoute } from "wouter";
import SiteLayout from "@/components/SiteLayout";
import { getProject, projects } from "@/data/portfolio";

export default function ProjectPage() {
  const [, params] = useRoute("/work/:id");
  const project = params ? getProject(params.id) : undefined;

  if (!project) {
    return (
      <SiteLayout>
        <div className="center-page">
          <h1 className="grad">404</h1>
          <p>Ce projet n'existe pas.</p>
          <Link className="btn btn-primary" href="/work">Retour aux projets</Link>
        </div>
      </SiteLayout>
    );
  }

  const images = project.screenshots?.length ? project.screenshots : [project.cover];
  const next = projects[(projects.findIndex((item) => item.id === project.id) + 1) % projects.length];

  return (
    <SiteLayout>
      <section className="page-hero">
        <div className="container">
          <div className="detail-top">
            <Link className="link-arrow" href="/work"><ArrowLeft size={16} /> Tous les projets</Link>
            <span className="tag">{[project.category, project.year].filter(Boolean).join(" · ")}</span>
          </div>
          <p className="kicker mono">Étude de cas · {project.kind}</p>
          <h1><span className="grad">{project.title}</span></h1>
          <p>{project.description}</p>
          <div className="detail-links">
            {project.liveUrl && (
              <a className="btn btn-primary" href={project.liveUrl} target="_blank" rel="noreferrer">
                Voir le site <ArrowUpRight size={16} />
              </a>
            )}
            {project.repoUrl && (
              <a className="btn btn-ghost" href={project.repoUrl} target="_blank" rel="noreferrer">
                Voir le code <ArrowUpRight size={16} />
              </a>
            )}
          </div>
        </div>
      </section>

      <section className="container">
        <div className="gallery">
          {images.map((image, index) => (
            <div className="detail-cover" key={image}>
              <div className="browser">
                <div className="browser-bar" aria-hidden="true"><i /><i /><i /></div>
                <img src={image} alt={`${project.title} — vue ${index + 1}`} />
              </div>
            </div>
          ))}
        </div>
        <div className="detail-meta">
          {project.client && (
            <div className="card"><span className="label mono">Client</span><strong>{project.client}</strong></div>
          )}
          <div className="card"><span className="label mono">Mon rôle</span><strong>{project.role}</strong></div>
          <div className="card">
            <span className="label mono">Technologies</span>
            <ul className="tags">
              {project.stack.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="next-project">
          <span className="mono" style={{ color: "var(--muted)", fontSize: 12 }}>Projet suivant</span>
          <Link className="link-arrow" href={`/work/${next.id}`}>{next.title} <ArrowUpRight size={16} /></Link>
        </div>
      </section>
    </SiteLayout>
  );
}
