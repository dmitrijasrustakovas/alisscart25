"use client";

import Spline from "@splinetool/react-spline";

export default function MotionShowcase() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <Spline scene="/far/scene-3.splinecode" className="absolute inset-0 w-full h-full" />

      <div className="absolute top-0 left-0 w-full h-24 md:h-32 bg-gradient-to-b from-black to-transparent pointer-events-none z-10" />
      <div className="absolute bottom-0 left-0 w-full h-24 md:h-32 bg-gradient-to-t from-black to-transparent pointer-events-none z-10" />
    </section>
  );
}