"use client";

import { motion } from "framer-motion";

export default function ContactCta() {
  return (
    <section
      id="contact"
      className="bg-background px-6 pt-24 pb-16 text-foreground md:px-12 md:pt-32"
    >
      <div className="mx-auto max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center text-sm uppercase tracking-[0.35em] text-muted"
        >
          Let&apos;s go?
        </motion.h2>

        <div className="grid gap-6 md:grid-cols-2">
          <motion.a
            href="#brief"
            data-cursor-hover
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="group flex min-h-64 flex-col justify-between rounded-2xl bg-surface p-8 text-ink transition-transform hover:-translate-y-1"
          >
            <span className="text-sm uppercase tracking-wide text-ink-muted">
              ✉ Кратко о задаче
            </span>
            <span className="text-3xl font-medium">Заполнить бриф</span>
          </motion.a>

          <motion.a
            href="https://t.me/alisscart"
            target="_blank"
            rel="noopener noreferrer"
            data-cursor-hover
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group flex min-h-64 flex-col justify-between rounded-2xl border border-white/10 p-8 transition-transform hover:-translate-y-1"
          >
            <span className="flex items-center gap-2 text-sm text-muted">
              <span className="h-6 w-6 rounded-full bg-gradient-to-br from-accent/60 to-accent/20" />
              Команда Alisscart
            </span>
            <span className="text-3xl font-medium">Написать в TG</span>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
