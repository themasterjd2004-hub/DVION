import AnimatedSection from "@/components/AnimatedSection";
import SectionTitle from "@/components/SectionTitle";

const specializations = [
  "AI-powered applications",
  "Frontend & Backend development",
  "Automation systems",
  "Data-driven platforms",
  "Custom software solutions"
];

export default function AboutPage() {
  return (
    <AnimatedSection className="space-y-6">
      <SectionTitle title="About DVION Intelligence" />
      <p className="max-w-4xl text-lg text-slate">
        DVION Intelligence is a technology initiative founded by Dhruva S, focused on building
        intelligent digital systems and scalable software solutions.
      </p>
      <div className="glass rounded-2xl p-6">
        <p className="text-frost">We specialize in:</p>
        <ul className="mt-4 grid gap-2 text-slate md:grid-cols-2">
          {specializations.map((item) => (
            <li key={item}>• {item}</li>
          ))}
        </ul>
      </div>
      <p className="max-w-4xl text-slate">
        Our goal is to help startups, businesses, and innovators turn ideas into powerful
        technology products.
      </p>
    </AnimatedSection>
  );
}
