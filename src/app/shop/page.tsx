export default function ShopPage() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 px-6 py-40 text-center">
      <h1 className="text-3xl font-semibold md:text-5xl">Shop</h1>
      <p className="text-muted md:text-lg">
        Prints, assets and drops from ongoing 3D and motion work. Check back
        soon, or reach out directly for custom commissions.
      </p>
      <a
        href="mailto:julbanchick@outlook.com"
        className="mt-4 rounded-full border border-white/20 px-8 py-3 text-sm uppercase tracking-wide transition-colors hover:border-white/60"
      >
        Buy / Inquire
      </a>
    </div>
  );
}
