import AnimatedSection from "@/components/AnimatedSection";
import SectionTitle from "@/components/SectionTitle";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/data/site";

export default function ServicesPage() {
  return (
    <AnimatedSection>
      <SectionTitle title="Services" subtitle="End-to-end product engineering for startups and businesses." />
      <div className="grid gap-4 md:grid-cols-2">
        {services.map((service) => (
          <ServiceCard key={service.title} title={service.title} points={service.points} />
        ))}
      </div>
    </AnimatedSection>
  );
}
