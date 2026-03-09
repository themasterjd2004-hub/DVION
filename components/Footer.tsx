export default function Footer() {
  return (
    <footer className="mt-16 border-t border-cyan/20 bg-ink/35 py-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-4 text-sm text-slate md:flex-row md:items-center md:justify-between">
        <p>(c) {new Date().getFullYear()} DVION Intelligence</p>
        <p>Mysuru, Karnataka | dhruvkuruvilla@gmail.com | +91 90358 01491</p>
      </div>
    </footer>
  );
}
