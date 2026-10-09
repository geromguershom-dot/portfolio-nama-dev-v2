import { ProjectCard } from "@/components/ProjectCard";
import SiteLayout from "@/components/SiteLayout";
import { projects } from "@/data/portfolio";

export default function WorkPage() {
  return (
    <SiteLayout>
      <section className="page-hero">
        <div className="container">
          <p className="kicker mono">Travail sélectionné</p>
          <h1>
            Mes <span className="grad">projets</span>
          </h1>
          <p>Des projets concrets, de la maquette à la mise en ligne. Ouvre une étude de cas pour voir le détail.</p>
        </div>
      </section>
      <section className="section" style={{ paddingTop: 40 }}>
        <div className="container project-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
