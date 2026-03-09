"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export default function HomeContactForm() {
  const router = useRouter();
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSending(true);
    setError(null);

    const formData = new FormData(event.currentTarget);
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
      setError(result.error ?? "Failed to submit request.");
      setSending(false);
      return;
    }

    router.push("/thanks");
  };

  return (
    <form onSubmit={onSubmit} className="glass neon-border rounded-2xl p-6">
      <div className="grid gap-4 md:grid-cols-2">
        <input
          name="name"
          required
          placeholder="Name"
          className="animated-input rounded-lg border border-cyan/35 bg-ink/70 px-3 py-2 text-frost placeholder:text-slate outline-none"
        />
        <input
          name="email"
          type="email"
          required
          placeholder="Email"
          className="animated-input rounded-lg border border-cyan/35 bg-ink/70 px-3 py-2 text-frost placeholder:text-slate outline-none"
        />
      </div>
      <textarea
        name="description"
        required
        rows={4}
        placeholder="Project description"
        className="animated-input mt-4 w-full rounded-lg border border-cyan/35 bg-ink/70 px-3 py-2 text-frost placeholder:text-slate outline-none"
      />
      <input
        name="budget"
        required
        placeholder="Budget (e.g. $2,000 - $5,000)"
        className="animated-input mt-4 w-full rounded-lg border border-cyan/35 bg-ink/70 px-3 py-2 text-frost placeholder:text-slate outline-none"
      />
      <button
        type="submit"
        disabled={sending}
        className="lime-btn mt-5 rounded-lg px-5 py-3 font-semibold disabled:opacity-70"
      >
        {sending ? "Sending..." : "Start a Project"}
      </button>
      {error ? <p className="mt-3 text-sm text-highlight">{error}</p> : null}
    </form>
  );
}
