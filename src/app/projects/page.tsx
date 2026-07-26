import SectionCard from "@/components/SectionCard";

const CATEGORIES = [
  {
    title: "3D Animations",
    description: "Rendered scenes, sculpted objects and animated loops.",
    image: "/mainpage/folders/3d.png",
    href: "/projects/animations",
  },
  {
    title: "Film & Editing",
    description: "Festival films and narrative editing work.",
    image: "/mainpage/folders/film.png",
    href: "/projects/film",
  },
  {
    title: "Web3",
    description: "Interactive sites and builds for AI agents and brands.",
    image: "/mainpage/folders/web.png",
    href: "/projects/web",
  },
  {
    title: "Cloth",
    description: "Cloth simulation and fabric studies.",
    image: "/mainpage/folders/cloth.png",
    href: "/projects/cloth",
  },
];

export default function ProjectsPage() {
  return (
    <div className="px-6 py-40 md:px-12">
      <h1 className="mb-12 text-3xl font-semibold md:text-5xl">Projects</h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {CATEGORIES.map((c) => (
          <SectionCard key={c.title} {...c} />
        ))}
      </div>
    </div>
  );
}
