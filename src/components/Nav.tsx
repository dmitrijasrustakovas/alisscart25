"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const LINKS = [
  { href: "/", label: "Main" },
  { href: "/projects", label: "Projects" },
  { href: "/shop", label: "Shop" },
  { href: "/about", label: "About" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-5 md:px-12 mix-blend-difference">
      <Link href="/" className="text-sm font-semibold tracking-widest uppercase">
        alisscart
      </Link>

      <nav className="hidden md:flex items-center gap-8 text-sm">
        {LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={clsx(
              "uppercase tracking-wide transition-opacity hover:opacity-60",
              pathname === link.href ? "opacity-100" : "opacity-70"
            )}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <button
        onClick={() => setOpen((v) => !v)}
        className="md:hidden flex flex-col gap-1.5 z-50"
        aria-label="Toggle menu"
      >
        <span className="block h-px w-6 bg-current" />
        <span className="block h-px w-6 bg-current" />
      </button>

      {open && (
        <nav className="fixed inset-0 flex flex-col items-center justify-center gap-8 bg-background text-2xl md:hidden">
          {LINKS.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
