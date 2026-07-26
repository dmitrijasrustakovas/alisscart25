"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { gsap } from "@/lib/gsap";

const PANELS = [
  {
    number: "01",
    title: "Экспертиза",
    body: "Собрали команду с опытом в дизайн-студиях и продуктовых компаниях. Знаем, как выглядит хороший процесс и умеем перекладывать его на новую команду, и в вебдизайне несколько раз недавно фин.",
  },
  {
    number: "02",
    title: "Процессы",
    body: "Понимаем, как устроены сложные продукты и процессы. Работаем по Time & Material. Делаем понятную оценку и формируем план-максимум, чтобы можно было отслеживать прогресс и превращать его в поставленный конкретный результат.",
  },
  {
    number: "03",
    title: "Дизайн культура",
    body: "Знаем, как создавать крутые сервисы и сайты. Можем любим делать актуальный продуктовый дизайн, уходить в метрики с головой, ищем исследования и профессионально готовим макеты к вёрстке.",
  },
];

function Panel({
  number,
  title,
  body,
}: {
  number: string;
  title: string;
  body: string;
}) {
  const [open, setOpen] = useState(false);
  const bodyRef = useRef<HTMLDivElement>(null);

  const toggle = () => {
    const next = !open;
    setOpen(next);
    const el = bodyRef.current;
    if (!el) return;
    if (next) {
      gsap.set(el, { height: "auto" });
      gsap.from(el, { height: 0, duration: 0.5, ease: "power3.out" });
    } else {
      gsap.to(el, { height: 0, duration: 0.4, ease: "power3.in" });
    }
  };

  return (
    <div className="border-b border-white/10 py-8">
      <button
        type="button"
        onClick={toggle}
        data-cursor-hover
        className="flex w-full items-center justify-between gap-6 text-left"
      >
        <span className="flex items-center gap-6">
          <span className="text-sm text-muted">{number}</span>
          <span className="text-2xl font-medium md:text-3xl">{title}</span>
        </span>
        <span className="text-sm uppercase tracking-widest text-muted">
          {open ? "Свернуть" : "Открыть"}
        </span>
      </button>
      <div ref={bodyRef} className="overflow-hidden">
        <p className="max-w-2xl pt-6 pl-0 text-lg leading-relaxed text-muted md:pl-16">
          {body}
        </p>
      </div>
    </div>
  );
}

export default function AboutUs() {
  return (
    <section id="about" className="bg-background px-6 py-24 text-foreground md:px-12 md:py-32">
      <div className="mx-auto max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="mb-4 text-4xl font-medium md:text-5xl"
        >
          Пара слов о нас
        </motion.h2>

        <div className="mb-16 flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-gradient-to-br from-accent/60 to-accent/20" />
          <div>
            <p className="text-sm font-medium">Команда Alisscart</p>
            <a
              href="https://t.me/alisscart"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor-hover
              className="text-sm text-muted hover:text-foreground"
            >
              Написать в Telegram →
            </a>
          </div>
        </div>

        <div>
          {PANELS.map((panel) => (
            <Panel key={panel.number} {...panel} />
          ))}
        </div>
      </div>
    </section>
  );
}
