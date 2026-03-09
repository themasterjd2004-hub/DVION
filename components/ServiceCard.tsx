type ServiceCardProps = {
  title: string;
  points: string[];
};

export default function ServiceCard({ title, points }: ServiceCardProps) {
  return (
    <article className="glass neon-border rounded-2xl p-5 transition duration-300 hover:-translate-y-1">
      <p className="mb-3 text-xs uppercase tracking-[0.24em] text-cyan">Service</p>
      <h3 className="font-heading text-xl font-semibold text-gradient">{title}</h3>
      <ul className="mt-4 space-y-2.5 text-sm text-slate">
        {points.map((point) => (
          <li key={point} className="flex gap-2">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan/90" />
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
