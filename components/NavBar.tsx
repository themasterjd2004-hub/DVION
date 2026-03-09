import Link from "next/link";
import Image from "next/image";
import { navItems } from "@/data/site";

export default function NavBar() {
  return (
    <header className="sticky top-0 z-50 border-b border-cyan/20 bg-ink/60 backdrop-blur-xl">
      <nav className="relative mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center px-1 py-1">
          <Image
            src="/logo.png"
            alt="DVION Intelligence Logo"
            width={300}
            height={86}
            priority
            className="h-14 w-auto scale-[1.72] object-contain md:h-16"
          />
        </Link>
        <div className="pointer-events-none absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 rounded-full border border-cyan/20 bg-ink/70 p-1 text-sm text-slate shadow-[0_10px_32px_rgba(2,14,35,0.4)] md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="pointer-events-auto rounded-full px-3 py-1.5 transition hover:bg-cyan/15 hover:text-frost"
            >
              {item.label}
            </Link>
          ))}
        </div>
        <Link
          href="/contact"
          className="hidden rounded-full border border-cyan/35 bg-cyan/10 px-4 py-2 text-sm font-semibold text-frost transition hover:bg-cyan/20 md:inline-flex"
        >
          Book a Call
        </Link>
      </nav>
    </header>
  );
}
