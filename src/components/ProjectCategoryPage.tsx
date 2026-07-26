export default function ProjectCategoryPage({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center gap-4 px-6 py-40 text-center">
      <h1 className="text-3xl font-semibold md:text-5xl">{title}</h1>
      <p className="max-w-xl text-muted md:text-lg">{description}</p>
      <p className="text-sm uppercase tracking-widest text-muted">
        Gallery coming soon
      </p>
    </div>
  );
}
