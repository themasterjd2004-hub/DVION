type ProjectCardProps = {
  name: string;
  description: string;
};

export default function ProjectCard({ name, description }: ProjectCardProps) {
  return (
    <article className="glass neon-border rounded-2xl p-5 transition duration-300 hover:-translate-y-1">
      <p className="mb-3 text-xs uppercase tracking-[0.24em] text-cyan">Case Study</p>
      <h3 className="font-heading text-xl font-semibold text-gradient">{name}</h3>
      <p className="mt-3 text-sm leading-relaxed text-slate">{description}</p>
    </article>
  );
}
