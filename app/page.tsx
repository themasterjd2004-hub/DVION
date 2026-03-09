import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import SectionTitle from "@/components/SectionTitle";
import ServiceCard from "@/components/ServiceCard";
import ProjectCard from "@/components/ProjectCard";
import HeroMotionText from "@/components/HeroMotionText";
import HologramOrb from "@/components/HologramOrb";
import HomeContactForm from "@/components/HomeContactForm";
import { projects, services } from "@/data/site";

export default function HomePage() {
  return (
    <div className="space-y-14 pb-6">
      <AnimatedSection className="section-shell relative p-8 md:p-12">
        <div className="particle-bg" />
        <div className="grid-backdrop" />
        <div className="relative grid items-center gap-8 md:grid-cols-2 md:gap-12">
          <div>
            <p className="text-sm uppercase tracking-[0.26em] text-cyan">DVION Intelligence</p>
            <HeroMotionText />
            <p className="mt-5 max-w-2xl text-slate">
              We build AI-powered software, automation platforms, and modern digital experiences.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="badge-chip">AI-first delivery</span>
              <span className="badge-chip">Startup-speed execution</span>
              <span className="badge-chip">Scalable architecture</span>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/projects"
                className="lime-btn rounded-lg px-5 py-3 font-semibold text-slate"
              >
                Explore Projects
              </Link>
              <Link
                href="/contact"
                className="rounded-lg border border-cyan/40 bg-ink/45 px-5 py-3 font-semibold text-frost transition hover:border-cyan/70 hover:bg-cyan/15"
              >
                Start Your Project
              </Link>
            </div>
          </div>
          <HologramOrb />
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-shell p-6 md:p-8">
        <SectionTitle
          title="Services"
          subtitle="AI systems, web applications, automation tools, startup MVPs, and data platforms."
        />
        <div className="grid gap-4 md:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} title={service.title} points={service.points} />
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-shell p-6 md:p-8">
        <SectionTitle title="Projects" subtitle="Sliding portfolio cards with reveal motion." />
        <div className="flex snap-x gap-4 overflow-x-auto pb-2">
          {projects.map((project) => (
            <div key={project.name} className="min-w-[280px] snap-start md:min-w-[360px]">
              <ProjectCard name={project.name} description={project.description} />
            </div>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-shell p-6 md:p-8">
        <SectionTitle
          title="About DVION Intelligence"
          subtitle="DVION Intelligence is a startup technology studio engineering intelligent systems for modern businesses."
        />
        <article className="glass neon-border rounded-2xl p-6">
          <p className="text-lg text-slate">
            We combine design, engineering, and AI integration to create fast, scalable products
            with a clean startup execution model.
          </p>
          <Link href="/about" className="lime-link mt-4 inline-block font-semibold text-cobalt">
            Learn more about us
          </Link>
        </article>
      </AnimatedSection>

      <AnimatedSection className="section-shell p-6 md:p-8">
        <SectionTitle title="Contact" subtitle="Have an idea? Let's build it." />
        <HomeContactForm />
      </AnimatedSection>
    </div>
  );
}
