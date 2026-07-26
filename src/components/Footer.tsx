import Link from "next/link";

const NAV = [
  { href: "#services", label: "Услуги" },
  { href: "#cases", label: "Кейсы" },
  { href: "#about", label: "О нас" },
  { href: "#contact", label: "Контакты" },
];

const SOCIALS = [
  { href: "https://t.me/alisscart", label: "Telegram-канал" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-background px-6 py-8 text-foreground md:px-12">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-6 text-sm">
          <span className="font-medium">Alisscart</span>
          <span className="text-muted">©{new Date().getFullYear()}</span>
        </div>

        <nav className="flex flex-wrap gap-6 text-sm uppercase tracking-wide">
          {NAV.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-muted transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex gap-6 text-sm uppercase tracking-wide">
          {SOCIALS.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted transition-colors hover:text-foreground"
            >
              {s.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
