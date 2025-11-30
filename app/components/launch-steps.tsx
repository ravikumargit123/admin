const steps = [
  {
    title: "Clone & install",
    detail: "Install dependencies, run `yarn dev`, and you instantly get the Baapstore-inspired UI running locally.",
  },
  {
    title: "Swap branding",
    detail: "Update the hero copy, replace accent colors if needed, and drop in your own logo or category photography.",
  },
  {
    title: "Connect your catalog",
    detail: "Use the Baapstore dashboard or your own API to hydrate the product grid and featured collections.",
  },
  {
    title: "Ship it",
    detail: "Deploy to Vercel or Netlify with zero additional configuration—the project ships with production-ready defaults.",
  },
];

export function LaunchSteps() {
  return (
    <section className="section-shell space-y-8">
      <div className="space-y-3 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-baapGold">How to launch</p>
        <h2 className="text-3xl font-semibold sm:text-4xl">From the Baapstore demo to your store</h2>
        <p className="text-slate-300">Follow these steps to make the template your own.</p>
      </div>
      <ol className="grid gap-5 md:grid-cols-2">
        {steps.map((step, idx) => (
          <li key={step.title} className="glass-panel flex flex-col gap-3 p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-baapPink/20 text-lg font-semibold text-baapPink">
                {idx + 1}
              </div>
              <h3 className="text-lg font-semibold text-white">{step.title}</h3>
            </div>
            <p className="text-slate-200">{step.detail}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
