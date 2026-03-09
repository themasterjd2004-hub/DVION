import AnimatedSection from "@/components/AnimatedSection";
import SectionTitle from "@/components/SectionTitle";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/site";

export default function ProjectsPage() {
  return (
    <AnimatedSection>
      <SectionTitle
        title="Projects"
        subtitle="Selected systems built across AI, analytics, healthcare, and product automation."
      />
      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.name} name={project.name} description={project.description} />
        ))}
      </div>
    </AnimatedSection>
  );
}
