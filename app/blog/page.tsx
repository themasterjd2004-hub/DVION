import AnimatedSection from "@/components/AnimatedSection";
import SectionTitle from "@/components/SectionTitle";
import { blogPreview } from "@/data/site";

export default function BlogPage() {
  return (
    <AnimatedSection>
      <SectionTitle title="Blog" subtitle="Insights on product engineering, AI adoption, and delivery strategy." />
      <div className="grid gap-4 md:grid-cols-2">
        {blogPreview.map((post) => (
          <article key={post.title} className="glass rounded-2xl p-5">
            <p className="text-xs uppercase tracking-[0.2em] text-cyan">{post.date}</p>
            <h3 className="mt-2 font-heading text-2xl text-frost">{post.title}</h3>
            <p className="mt-3 text-slate">{post.excerpt}</p>
          </article>
        ))}
      </div>
    </AnimatedSection>
  );
}
