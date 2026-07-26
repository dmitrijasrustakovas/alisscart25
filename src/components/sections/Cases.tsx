"use client";

import { motion } from "framer-motion";

const FEATURED = [
  {
    tag: "Best experience",
    name: "Проект 01",
    description: "Стильный онлайн-магазин обуви",
    pills: ["website", "identity", "ecommerce"],
    tone: "from-rose-100 to-rose-200",
  },
  {
    tag: "AI-sexy style",
    name: "Проект 02",
    description: "Сайт с AI-помощником на борту",
    pills: ["website", "identity", "saas"],
    tone: "from-indigo-950 to-indigo-900 text-white",
  },
  {
    tag: "Clever health",
    name: "Проект 03",
    description: "Веб-сервис и приложение для правильного питания",
    pills: ["service", "mobile app", "foodtech", "startup"],
    tone: "from-violet-100 to-amber-100",
  },
  {
    tag: "Отечественный",
    name: "Проект 04",
    description: "Сайт и личный кабинет крупного онлайн-магазина радиаторов",
    pills: ["website", "identity", "ecommerce"],
    tone: "from-stone-100 to-stone-200",
  },
];

const MORE = [
  { name: "Проект 05", description: "AI-решения для бизнеса", pills: ["identity", "saas"] },
  { name: "Проект 06", description: "Маркетплейс барбершопов", pills: ["service", "beauty"] },
  { name: "Проект 07", description: "Сайт и айдентика научного фонда", pills: ["website", "identity", "science"] },
  { name: "Проект 08", description: "Сервис для создания голосовых и чат-ботов", pills: ["service", "saas"] },
  { name: "Проект 09", description: "Онлайн-версия журнала", pills: ["website", "magazine"] },
  { name: "Проект 10", description: "Digital marketing agency", pills: ["website", "identity", "agency"] },
  { name: "Проект 11", description: "Shhh...", pills: ["wow", "amazing", "so secret"] },
];

export default function Cases() {
  return (
    <section id="cases" className="section-light px-6 py-24 md:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-6 md:grid-cols-2">
          {FEATURED.map((item, i) => (
            <motion.div
              key={item.name}
              data-cursor-hover
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.06 * i }}
              className={`group relative flex aspect-[4/3] flex-col justify-end overflow-hidden rounded-2xl bg-gradient-to-br p-6 ${item.tone}`}
            >
              <span className="absolute top-5 left-5 w-fit rounded-full bg-black/10 px-3 py-1 text-[11px] uppercase tracking-wide backdrop-blur-sm">
                {item.tag}
              </span>
              <div className="absolute top-5 right-5 flex flex-col items-end gap-1">
                {item.pills.map((pill) => (
                  <span
                    key={pill}
                    className="rounded-full bg-black/10 px-3 py-1 text-[10px] uppercase tracking-wide backdrop-blur-sm"
                  >
                    {pill}
                  </span>
                ))}
              </div>
              <h3 className="text-2xl font-medium">{item.name}</h3>
              <p className="mt-1 max-w-sm text-sm opacity-80">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.h3
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="mt-24 mb-10 text-4xl font-medium text-ink"
        >
          Ещё немного кейсов
        </motion.h3>

        <div className="divide-y divide-line border-t border-b border-line">
          {MORE.map((item) => (
            <div
              key={item.name}
              data-cursor-hover
              className="flex flex-col gap-2 py-5 transition-colors hover:bg-ink/[0.03] sm:flex-row sm:items-center sm:justify-between sm:px-2"
            >
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 shrink-0 rounded-md bg-gradient-to-br from-ink/10 to-ink/20" />
                <div>
                  <p className="font-medium text-ink">{item.name}</p>
                  <p className="text-sm text-ink-muted">{item.description}</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 pl-14 sm:pl-0">
                {item.pills.map((pill) => (
                  <span
                    key={pill}
                    className="rounded-full bg-ink/5 px-3 py-1 text-[11px] uppercase tracking-wide text-ink-muted"
                  >
                    {pill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
