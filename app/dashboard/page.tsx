import AnimatedSection from "@/components/AnimatedSection";
import SectionTitle from "@/components/SectionTitle";

const metrics = [
  { label: "Open Leads", value: "12" },
  { label: "In Progress Projects", value: "4" },
  { label: "Avg Response Time", value: "3h 10m" },
  { label: "Automation Jobs", value: "27/day" }
];

export default function DashboardPage() {
  return (
    <AnimatedSection>
      <SectionTitle title="Admin Dashboard (Preview)" subtitle="Foundation layout for future client/project management." />
      <div className="grid gap-4 md:grid-cols-2">
        {metrics.map((metric) => (
          <article key={metric.label} className="glass rounded-2xl p-5">
            <p className="text-sm text-slate">{metric.label}</p>
            <p className="mt-2 font-heading text-4xl text-frost">{metric.value}</p>
          </article>
        ))}
      </div>
      <div className="glass mt-6 rounded-2xl p-5">
        <h3 className="font-heading text-xl text-frost">Recent Requests</h3>
        <p className="mt-2 text-slate">
          Integrate your backend (Node.js/FastAPI + PostgreSQL/MongoDB) to replace this mock data
          with real project and lead tracking.
        </p>
      </div>
    </AnimatedSection>
  );
}
