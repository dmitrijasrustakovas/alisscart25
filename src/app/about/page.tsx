import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col items-center gap-8 px-6 py-40 text-center">
      <div className="relative h-32 w-32 overflow-hidden rounded-full border border-white/10">
        <Image src="/mainpage/avatar.png" alt="alisscart" fill className="object-cover" />
      </div>
      <h1 className="text-3xl font-semibold md:text-5xl">Dmitrijas</h1>
      <p className="text-muted md:text-lg">
        Digital creator specializing in experimental web3, 3D and audiovisual
        work. Three years of freelance experience collaborating across
        industries on custom web experiences, design, animation and coded
        projects — with an emphasis on creative, unique solutions.
      </p>
      <p className="text-muted md:text-lg">
        Handcrafted projects for events and music releases, built through an
        interdisciplinary approach across design, motion and code. Open to
        artistic collaborations and original commissions.
      </p>
      <a
        href="mailto:julbanchick@outlook.com"
        className="mt-4 rounded-full border border-white/20 px-8 py-3 text-sm uppercase tracking-wide transition-colors hover:border-white/60"
      >
        julbanchick@outlook.com
      </a>
    </div>
  );
}
