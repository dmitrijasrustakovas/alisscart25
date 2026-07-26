import Image from "next/image";
import Link from "next/link";

export default function SectionCard({
  title,
  description,
  image,
  href,
}: {
  title: string;
  description: string;
  image: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] transition-colors hover:border-white/30"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-col gap-1 p-6">
        <h3 className="text-lg font-semibold uppercase tracking-wide">{title}</h3>
        <p className="text-sm text-muted">{description}</p>
      </div>
    </Link>
  );
}
