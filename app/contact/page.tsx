"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import AnimatedSection from "@/components/AnimatedSection";
import SectionTitle from "@/components/SectionTitle";

export default function ContactPage() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [sending, setSending] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    setSending(true);

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      description: String(formData.get("description") ?? ""),
      budget: String(formData.get("budget") ?? "")
    };

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    const result = (await response.json()) as { error?: string };
    if (!response.ok) {
      setError(result.error ?? "Failed to submit. Please try again.");
      setSending(false);
      return;
    }

    router.push("/thanks");
  };

  return (
    <AnimatedSection className="space-y-6">
      <SectionTitle title="Contact" subtitle="Share your project idea and timeline. We will respond quickly." />
      <div className="grid gap-4 md:grid-cols-3">
        <article className="glass rounded-2xl p-4">
          <p className="text-sm text-cyan">Email</p>
          <p className="mt-1 text-frost">dhruvkuruvilla@gmail.com</p>
        </article>
        <article className="glass rounded-2xl p-4">
          <p className="text-sm text-cyan">Phone</p>
          <p className="mt-1 text-frost">9035801491</p>
        </article>
        <article className="glass rounded-2xl p-4">
          <p className="text-sm text-cyan">Location</p>
          <p className="mt-1 text-frost">Mysuru, Karnataka</p>
        </article>
      </div>

      <form onSubmit={handleSubmit} className="glass space-y-4 rounded-2xl p-6">
        <div>
          <label className="mb-2 block text-sm text-cyan" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            name="name"
            required
            className="w-full rounded-md border border-cyan/35 bg-ink/70 px-3 py-2 text-frost outline-none placeholder:text-slate"
          />
        </div>
        <div>
          <label className="mb-2 block text-sm text-cyan" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full rounded-md border border-cyan/35 bg-ink/70 px-3 py-2 text-frost outline-none placeholder:text-slate"
          />
        </div>
        <div>
          <label className="mb-2 block text-sm text-cyan" htmlFor="description">
            Project Description
          </label>
          <textarea
            id="description"
            name="description"
            required
            rows={4}
            className="w-full rounded-md border border-cyan/35 bg-ink/70 px-3 py-2 text-frost outline-none placeholder:text-slate"
          />
        </div>
        <div>
          <label className="mb-2 block text-sm text-cyan" htmlFor="budget">
            Budget
          </label>
          <input
            id="budget"
            name="budget"
            required
            placeholder="Example: $2,000 - $5,000"
            className="w-full rounded-md border border-cyan/35 bg-ink/70 px-3 py-2 text-frost outline-none placeholder:text-slate"
          />
        </div>
        <button
          type="submit"
          disabled={sending}
          className="lime-btn rounded-lg px-5 py-3 font-semibold disabled:cursor-not-allowed disabled:opacity-70"
        >
          {sending ? "Sending..." : "Send Request"}
        </button>
        {error ? <p className="text-sm text-highlight">{error}</p> : null}
      </form>
    </AnimatedSection>
  );
}
