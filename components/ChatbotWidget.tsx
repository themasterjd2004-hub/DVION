"use client";

import { useState } from "react";

const cannedReplies: Record<string, string> = {
  services: "We provide web, backend, AI, automation, and custom software development.",
  projects: "Share your scope and timeline, and we will suggest the best build approach.",
  contact: "Email dhruvkuruvilla@gmail.com or call +91 90358 01491."
};

export default function ChatbotWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<string[]>([
    "Hi, I am DVION Assistant. Ask about services, projects, or contact."
  ]);

  const handleSend = () => {
    if (!input.trim()) return;
    const normalized = input.toLowerCase();
    const reply =
      Object.entries(cannedReplies).find(([key]) => normalized.includes(key))?.[1] ??
      "Thanks for your message. We will review your requirement and get back soon.";
    setMessages((current) => [...current, `You: ${input}`, `Bot: ${reply}`]);
    setInput("");
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <button
        onClick={() => setOpen((state) => !state)}
        className="rounded-full bg-cyan px-4 py-2 text-sm font-semibold text-ink"
      >
        AI Chat
      </button>
      {open ? (
        <div className="glass mt-3 w-80 rounded-xl p-4 shadow-glow">
          <div className="max-h-56 space-y-2 overflow-y-auto pr-1 text-sm">
            {messages.map((message) => (
              <p key={message}>{message}</p>
            ))}
          </div>
          <div className="mt-3 flex gap-2">
            <input
              value={input}
              onChange={(event) => setInput(event.target.value)}
              className="w-full rounded-md border border-slate-700 bg-ink px-3 py-2 text-sm outline-none"
              placeholder="Ask something..."
            />
            <button onClick={handleSend} className="rounded-md bg-cobalt px-3 py-2 text-sm">
              Send
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
