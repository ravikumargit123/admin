const features = [
  {
    title: "Catalog synced from Baapstore",
    description:
      "Reference product cards, pricing badges, and category tiles that mirror the Baapstore demo so you can replace them with your own inventory in minutes.",
  },
  {
    title: "Next.js App Router",
    description:
      "Uses the latest Next.js 14 layout primitives for fast navigation, streaming-friendly sections, and SEO-ready metadata.",
  },
  {
    title: "Tailwind-first styling",
    description:
      "Reusable utility classes and a Baapstore-inspired palette (purple, pink, and gold) keep branding consistent while remaining easy to tweak.",
  },
  {
    title: "Responsive hero",
    description:
      "A gradient-rich hero, prominent CTA, and highlight cards that closely follow the energy of the Baapstore demo hero section.",
  },
  {
    title: "Drop-shipping friendly copy",
    description:
      "Messaging is tuned to the Baapstore model: no-code setup, automated fulfillment, and ready-to-ship assortments.",
  },
  {
    title: "Guided sections",
    description:
      "A timeline that outlines how to go from demo to launched store, plus testimonials to build trust with prospective sellers.",
  },
];

export function FeatureGrid() {
  return (
    <section id="features" className="section-shell space-y-8">
      <div className="space-y-3 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-baapGold">What&apos;s inside</p>
        <h2 className="text-3xl font-semibold sm:text-4xl">Built to echo the Baapstore experience</h2>
        <p className="text-slate-300">Ready for you to extend with your own products, categories, and automation.</p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <article key={feature.title} className="glass-panel h-full p-6">
            <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
            <p className="mt-3 text-slate-200">{feature.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
