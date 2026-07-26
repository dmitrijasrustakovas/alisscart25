"use client";

import { motion } from "framer-motion";
import HeroScene from "@/components/three/HeroScene";

export default function Hero() {
  return (
    <section className="section-light relative flex min-h-[92vh] flex-col items-center justify-center overflow-hidden px-6 pt-32 pb-16 text-center md:px-12">
      <HeroScene />

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-6 text-xs uppercase tracking-[0.35em] text-ink-muted"
      >
        Alisscart · Design Studio
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="max-w-4xl text-[13vw] font-semibold leading-[0.95] tracking-tight text-ink sm:text-6xl md:text-7xl lg:text-8xl"
      >
        alisscart
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.35 }}
        className="mt-10 max-w-xs text-lg leading-relaxed text-ink md:max-w-sm"
      >
        Выводим дизайн цифровых продуктов на новый уровень
      </motion.p>
    </section>
  );
}
