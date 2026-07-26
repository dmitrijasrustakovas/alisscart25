import Link from "next/link";

const SOCIALS = [
  { href: "https://t.me/alisscart", label: "Telegram" },
  { href: "https://www.instagram.com/alisscart", label: "Instagram" },
  { href: "https://www.youtube.com/@alisscart", label: "YouTube" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-10 md:px-12">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <a
          href="mailto:julbanchick@outlook.com"
          className="text-sm uppercase tracking-wide text-muted hover:text-foreground transition-colors"
        >
          julbanchick@outlook.com
        </a>

        <div className="flex gap-6 text-sm uppercase tracking-wide">
          {SOCIALS.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-foreground transition-colors"
            >
              {s.label}
            </Link>
          ))}
        </div>

        <p className="text-xs text-muted">
          © {new Date().getFullYear()} alisscart. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
