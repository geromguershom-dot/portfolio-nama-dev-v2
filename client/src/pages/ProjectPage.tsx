import { ArrowUpRight } from "lucide-react";
import { Link, useRoute } from "wouter";
import SiteLayout from "@/components/SiteLayout";
import { getProject, projects } from "@/data/portfolio";

export default function ProjectPage() {
  const [, params] = useRoute("/work/:id");
  const project = params ? getProject(params.id) : undefined;

  if (!project) {
    return (
      <SiteLayout section="02 — Projet">
        <section className="inner-page">
          <h1>Projet introuvable<span>.</span></h1>
          <Link className="text-cta" href="/work">
            Retour aux projets <ArrowUpRight size={16} />
          </Link>
        </section>
      </SiteLayout>
    );
  }

  const images = project.screenshots?.length ? project.screenshots : [project.cover];
  const next = projects[(projects.findIndex((item) => item.id === project.id) + 1) % projects.length];

  return (
    <SiteLayout section={`02 — ${project.title}`}>
      <section className="project-detail">
        <div className="project-detail-top">
          <Link className="text-cta" href="/work">
            Retour aux projets <ArrowUpRight size={16} />
          </Link>
          <span>{[project.year, project.category].filter(Boolean).join(" / ")}</span>
        </div>
        <div className="project-detail-heading">
          <p className="section-kicker">Étude de cas / {project.kind}</p>
          <h1>{project.title}<span>.</span></h1>
          <p>{project.description}</p>
        </div>
        <div className="project-detail-links">
          {project.liveUrl && (
            <a className="text-cta" href={project.liveUrl} target="_blank" rel="noreferrer">
              Voir le site <ArrowUpRight size={16} />
            </a>
          )}
          {project.repoUrl && (
            <a className="text-cta" href={project.repoUrl} target="_blank" rel="noreferrer">
              Voir le code <ArrowUpRight size={16} />
            </a>
          )}
        </div>
        <div className="project-gallery">
          {images.map((image, index) => (
            <figure className={index === 0 ? "gallery-item gallery-feature" : "gallery-item"} key={image}>
              <img src={image} alt={`${project.title} — vue ${index + 1}`} />
              <figcaption>{String(index + 1).padStart(2, "0")} / {project.title}</figcaption>
            </figure>
          ))}
        </div>
        <div className="project-detail-meta">
          {project.client && (
            <div><span>Client</span><strong>{project.client}</strong></div>
          )}
          <div><span>Mon rôle</span><strong>{project.role}</strong></div>
          <div>
            <span>Technologies</span>
            <div className="stack-tags">
              {project.stack.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="project-next">
          <span>Projet suivant</span>
          <Link className="text-cta" href={`/work/${next.id}`}>
            {next.title} <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
