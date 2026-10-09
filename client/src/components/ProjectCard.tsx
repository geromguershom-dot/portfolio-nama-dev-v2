import { ArrowUpRight } from "lucide-react";
import { Link } from "wouter";
import type { Project } from "@/data/portfolio";

export function ProjectCard({ project }: { project: Project }) {
  const image = project.screenshots?.[0] ?? project.cover;
  const meta = [project.category, project.year].filter(Boolean).join(" · ");

  return (
    <article className="project-card card reveal">
      <Link className="project-media" href={`/work/${project.id}`} aria-label={`Voir le projet ${project.title}`}>
        <div className="browser">
          <div className="browser-bar" aria-hidden="true"><i /><i /><i /></div>
          <img src={image} alt={`Aperçu du projet ${project.title}`} loading="lazy" />
        </div>
      </Link>
      <div className="project-body">
        <p className="project-meta mono">{meta}</p>
        <h3>{project.title}</h3>
        <p className="project-kind">{project.kind}</p>
        <p className="project-role"><b>Rôle :</b> {project.role}</p>
        <ul className="tags">
          {project.stack.slice(0, 5).map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
        <Link className="link-arrow" href={`/work/${project.id}`}>
          Voir l'étude de cas <ArrowUpRight size={16} />
        </Link>
      </div>
    </article>
  );
}
