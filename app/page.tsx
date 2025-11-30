import { FeatureGrid } from "./components/feature-grid";
import { Hero } from "./components/hero";
import { LaunchSteps } from "./components/launch-steps";
import { Testimonial } from "./components/testimonial";

const callouts = [
  {
    title: "Built for marketers",
    body: "Edit hero copy, swap background gradients, and adjust CTAs without touching server code.",
  },
  {
    title: "Deploy anywhere",
    body: "Optimized for Vercel out of the box but works on Netlify, Render, or any Next.js-compatible host.",
  },
  {
    title: "Keep the Baapstore vibe",
    body: "Purple, pink, and gold accents mirror the live demo and can be changed via Tailwind tokens.",
  },
];

export default function Page() {
  return (
    <main className="space-y-12 pb-20">
      <Hero />
      <FeatureGrid />
      <section className="section-shell">
        <div className="glass-panel p-8">
          <div className="grid gap-8 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-baapGold">Catalog preview</p>
              <h2 className="text-3xl font-semibold sm:text-4xl">Merchandising layout ready to go</h2>
              <p className="text-slate-200">
                The content blocks mimic the Baapstore demo: a product grid, category callouts, and promotional banner space.
                Replace the placeholder imagery with your own creative and point the “View live demo” CTA straight to the Baapstore dashboard.
              </p>
            </div>
            <div className="glass-panel overflow-hidden bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950 p-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                  <p className="text-xs uppercase tracking-[0.2em] text-baapGold">New drop</p>
                  <p className="mt-2 text-lg font-semibold text-white">Streetwear set</p>
                  <p className="text-sm text-slate-300">$59.00</p>
                </div>
                <div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                  <p className="text-xs uppercase tracking-[0.2em] text-baapGold">Accessories</p>
                  <p className="mt-2 text-lg font-semibold text-white">Sunrise tote</p>
                  <p className="text-sm text-slate-300">$34.00</p>
                </div>
                <div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                  <p className="text-xs uppercase tracking-[0.2em] text-baapGold">Beauty</p>
                  <p className="mt-2 text-lg font-semibold text-white">Glow kit</p>
                  <p className="text-sm text-slate-300">$42.00</p>
                </div>
                <div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                  <p className="text-xs uppercase tracking-[0.2em] text-baapGold">Tech</p>
                  <p className="mt-2 text-lg font-semibold text-white">Wireless buds</p>
                  <p className="text-sm text-slate-300">$79.00</p>
                </div>
              </div>
              <div className="mt-6 rounded-xl bg-baapPurple/40 px-4 py-3 text-sm text-white ring-1 ring-baapPurple/50">
                Swap these placeholders with live products pulled from the Baapstore API or your own CMS to finish the build.
              </div>
            </div>
          </div>
        </div>
      </section>
      <LaunchSteps />
      <section className="section-shell">
        <div className="grid gap-6 lg:grid-cols-3">
          {callouts.map((item) => (
            <article key={item.title} className="glass-panel p-6">
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-slate-200">{item.body}</p>
            </article>
          ))}
        </div>
      </section>
      <Testimonial />
      <section className="section-shell pb-12 text-center">
        <div className="glass-panel space-y-4 px-8 py-10">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-baapGold">Ready to explore?</p>
          <h2 className="text-3xl font-semibold sm:text-4xl">Open the Baapstore demo and start customizing</h2>
          <p className="text-slate-200">
            Use this Next.js starter as the foundation for your drop-shipping empire. Iterate on the layout, hook up live data,
            and ship.
          </p>
          <a
            className="inline-flex items-center justify-center rounded-full bg-baapPink px-6 py-3 text-base font-semibold text-white shadow-glow transition hover:-translate-y-0.5 hover:bg-baapGold"
            href="https://demo.baapstore.com/a/"
            target="_blank"
            rel="noreferrer"
          >
            Visit demo.baapstore.com
          </a>
        </div>
      </section>
    </main>
  );
}
