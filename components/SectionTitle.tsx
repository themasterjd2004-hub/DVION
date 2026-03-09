type SectionTitleProps = {
  title: string;
  subtitle?: string;
};

export default function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <div className="mb-7">
      <div className="mb-3 h-px w-20 bg-gradient-to-r from-cyan to-transparent" />
      <h2 className="font-heading text-3xl font-bold tracking-tight text-frost md:text-4xl">{title}</h2>
      {subtitle ? <p className="mt-2 max-w-3xl text-[15px] leading-relaxed text-slate">{subtitle}</p> : null}
    </div>
  );
}
