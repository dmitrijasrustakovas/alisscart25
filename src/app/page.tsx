import HeroScene from "@/components/three/HeroScene";
import SectionCard from "@/components/SectionCard";

const SECTIONS = [
  {
    title: "3D Artworks",
    description: "Animated sequences, sculpted scenes and rendered visuals.",
    image: "/mainpage/headers/3d.svg",
    href: "/projects/animations",
  },
  {
    title: "Motion Artworks",
    description: "Motion design for music releases and album covers.",
    image: "/mainpage/headers/albumcover.svg",
    href: "/projects/animations",
  },
  {
    title: "Film & Editing",
    description: "Festival filmmaking and narrative editing.",
    image: "/mainpage/headers/festival.svg",
    href: "/projects/film",
  },
  {
    title: "Editorial",
    description: "Magazine layout and editorial visuals.",
    image: "/mainpage/headers/magazine.svg",
    href: "/projects/animation/wav",
  },
  {
    title: "Development",
    description: "Web3 sites and interactive builds for AI agents.",
    image: "/mainpage/headers/web3.svg",
    href: "/projects/web",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center">
        <HeroScene />
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-muted">
          Alisscart · Creative Studio
        </p>
        <h1 className="max-w-3xl text-4xl font-semibold leading-tight md:text-6xl">
          Digital art, motion &amp; code
          <br />
          for people who commission it.
        </h1>
        <p className="mt-6 max-w-xl text-base text-muted md:text-lg">
          3D, motion design, film, editorial and development — one place for
          handcrafted work made for events, releases and brands.
        </p>
      </section>

      <section className="px-6 py-24 md:px-12">
        <h2 className="mb-10 text-sm uppercase tracking-[0.3em] text-muted">
          What I make
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SECTIONS.map((s) => (
            <SectionCard key={s.title} {...s} />
          ))}
        </div>
      </section>

      <section
        id="contact"
        className="flex flex-col items-center gap-6 border-t border-white/10 px-6 py-32 text-center md:px-12"
      >
        <h2 className="text-3xl font-semibold md:text-5xl">
          Let&apos;s work together
        </h2>
        <p className="max-w-md text-muted">
          Open to new commissions and collaborations across 3D, motion, film
          and web.
        </p>
        <a
          href="mailto:julbanchick@outlook.com"
          className="mt-4 rounded-full border border-white/20 px-8 py-3 text-sm uppercase tracking-wide transition-colors hover:border-white/60"
        >
          julbanchick@outlook.com
        </a>
      </section>
    </div>
  );
}
