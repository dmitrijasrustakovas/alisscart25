"use client";

import { motion } from "framer-motion";

const EXPERIENCE = [
  "E-commerce",
  "Финансы",
  "Фудтех",
  "Недвижимость",
  "SaaS/AI",
  "Стартапы",
];

const SKILLS = [
  "Дизайн интерфейсов",
  "Айдентика",
  "Исследования",
  "Разработка",
  "3D визуализации",
  "Мобильные приложения",
];

function TagList({ label, items }: { label: string; items: string[] }) {
  return (
    <div>
      <span className="rounded-full bg-ink/5 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-ink-muted">
        {label}
      </span>
      <ul className="mt-6 space-y-2">
        {items.map((item) => (
          <li key={item} className="text-2xl text-ink md:text-3xl">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function AboutIntro() {
  return (
    <section id="services" className="section-light px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-16 md:grid-cols-2">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="text-5xl leading-[1.05] font-medium text-ink md:text-6xl"
        >
          Digital
          <br />
          это наша
          <br />
          любовь
        </motion.h2>

        <div className="flex flex-col gap-16">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="max-w-md text-2xl leading-snug text-ink"
          >
            Мы отлично умеем делать проекты любого типа, но особенно хороши в
            продуктовом дизайне
          </motion.p>

          <div className="grid gap-12 sm:grid-cols-2">
            <TagList label="Наш опыт" items={EXPERIENCE} />
            <TagList label="Что умеем" items={SKILLS} />
          </div>
        </div>
      </div>
    </section>
  );
}
