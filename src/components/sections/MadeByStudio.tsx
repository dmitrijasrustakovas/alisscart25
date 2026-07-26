"use client";

import { motion } from "framer-motion";

export default function MadeByStudio() {
  return (
    <section className="relative overflow-hidden bg-background px-6 py-32 text-center text-foreground md:px-12">
      <motion.h2
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8 }}
        className="mx-auto max-w-4xl text-5xl leading-tight font-semibold md:text-7xl"
      >
        Made by Alisscart
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mx-auto mt-6 max-w-md text-lg text-muted"
      >
        с чертовски усердной работой{" "}
        <span className="text-accent">&amp; любовью</span>
      </motion.p>
    </section>
  );
}
