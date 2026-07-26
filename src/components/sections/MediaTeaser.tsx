"use client";

import { motion } from "framer-motion";

const CARDS = [
  { title: "Знакомство, искра, безумие", tone: "from-rose-200 to-rose-300" },
  { title: "Опыт и хардкор", tone: "from-sky-200 to-sky-300" },
  { title: "Исследование: таббар в мобильном вебе", tone: "from-indigo-200 to-indigo-300" },
  { title: "О работе в студии", tone: "from-amber-200 to-amber-300" },
  { title: "Скоро", tone: "from-stone-200 to-stone-300" },
];

export default function MediaTeaser() {
  return (
    <section className="section-light-alt px-6 py-24 md:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="flex gap-4 overflow-x-auto pb-4 [scrollbar-width:none]">
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="flex h-80 w-56 shrink-0 flex-col justify-between rounded-2xl bg-ink p-6 text-surface"
          >
            <span className="text-xs uppercase tracking-[0.3em] text-surface/60">
              ● Медиа
            </span>
            <p className="text-lg leading-snug">Идеи, процессы, наблюдения</p>
          </motion.div>

          {CARDS.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: 0.08 * (i + 1) }}
              data-cursor-hover
              className={`flex h-80 w-56 shrink-0 flex-col justify-end rounded-2xl bg-gradient-to-br ${card.tone} p-5`}
            >
              <p className="text-sm font-medium text-ink">{card.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
