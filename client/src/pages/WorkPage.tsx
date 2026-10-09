import { ProjectRow } from "@/components/ProjectRow";
import SiteLayout from "@/components/SiteLayout";
import { projects } from "@/data/portfolio";

export default function WorkPage() {
  return (
    <SiteLayout section="02 — Projets">
      <section className="inner-page archive-page">
        <div className="section-heading">
          <div>
            <p className="section-kicker">02 / Travail sélectionné</p>
            <h1>Projets<span>.</span></h1>
          </div>
          <p className="section-aside">Des projets concrets,<br />des sites en ligne.</p>
        </div>
        <div className="archive-list">
          {projects.map((project, index) => (
            <ProjectRow key={project.id} project={project} index={index} />
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
