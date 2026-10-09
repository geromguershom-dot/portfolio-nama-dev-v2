import { ArrowUpRight } from "lucide-react";
import { Link } from "wouter";
import type { Project } from "@/data/portfolio";

export function ProjectRow({ project, index }: { project: Project; index: number }) {
  return (
    <Link className="archive-row" href={`/work/${project.id}`}>
      <span className="archive-number">{String(index + 1).padStart(2, "0")}</span>
      <span className="archive-title">
        <strong>{project.title}</strong>
        <small>{project.kind}</small>
        <em>{project.description}</em>
      </span>
      <span className="archive-thumb">
        <img src={project.cover} alt="" loading="lazy" />
      </span>
      <span className="archive-year">{project.year ?? project.category}</span>
      <ArrowUpRight className="archive-arrow" size={17} />
    </Link>
  );
}
