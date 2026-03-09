import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";

export default function ThanksPage() {
  return (
    <AnimatedSection className="glass neon-border rounded-3xl p-8 text-center md:p-12">
      <p className="text-sm uppercase tracking-[0.3em] text-cyan">Request Received</p>
      <h1 className="mt-3 font-heading text-4xl font-bold text-gradient md:text-5xl">Thank You</h1>
      <p className="mx-auto mt-4 max-w-2xl text-slate">
        Your project request has been submitted successfully. We will contact you shortly.
      </p>
      <div className="mt-8 flex items-center justify-center gap-3">
        <Link href="/" className="rounded-lg bg-cyan px-5 py-3 font-semibold text-ink">
          Back to Home
        </Link>
        <Link href="/projects" className="rounded-lg border border-cobalt/70 px-5 py-3 font-semibold">
          View Projects
        </Link>
      </div>
    </AnimatedSection>
  );
}
