"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Showreel() {
  return (
    <section className="section-light px-6 py-16 md:px-12">
      <motion.div
        data-cursor-hover
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
        className="group relative block aspect-video w-full overflow-hidden rounded-2xl bg-ink"
      >
        <Image
          src="/mainpage/hero.png"
          alt="Showreel preview"
          fill
          className="object-cover opacity-70 transition-opacity group-hover:opacity-90"
        />
        <span className="absolute inset-0 flex items-center justify-center">
          <span className="flex h-20 w-20 items-center justify-center rounded-full bg-surface text-sm uppercase tracking-widest text-ink transition-transform group-hover:scale-110">
            Play
          </span>
        </span>
        <span className="absolute bottom-6 left-6 text-xs uppercase tracking-[0.3em] text-surface/70">
          Showreel
        </span>
      </motion.div>
    </section>
  );
}
