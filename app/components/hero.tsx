import Link from "next/link";

const highlights = [
  { label: "Start immediately", value: "No-code deployment" },
  { label: "Catalog", value: "10,000+ products ready" },
  { label: "Fulfillment", value: "Automated drop-shipping" },
];

export function Hero() {
  return (
    <header className="relative overflow-hidden bg-hero-gradient text-white">
      <div className="section-shell pt-20 pb-24 lg:pt-28 lg:pb-32">
        <div className="grid gap-14 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-baapGold ring-1 ring-white/15">
              <span className="h-2 w-2 rounded-full bg-green-400" aria-hidden />
              Built for the Baapstore demo experience
            </div>
            <div className="space-y-6">
              <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
                Launch a Baapstore-inspired storefront with Next.js
              </h1>
              <p className="max-w-2xl text-lg text-slate-200">
                This project recreates the polished feel of <strong>demo.baapstore.com</strong> using modern
                Next.js patterns so you can start customizing your own white-label ecommerce brand quickly.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link
                className="rounded-full bg-baapPink px-6 py-3 text-base font-semibold text-white shadow-glow transition hover:-translate-y-0.5 hover:bg-baapGold"
                href="https://demo.baapstore.com/a/"
                target="_blank"
                rel="noreferrer"
              >
                View live Baapstore demo
              </Link>
              <Link
                className="rounded-full border border-white/30 px-6 py-3 text-base font-semibold text-white transition hover:-translate-y-0.5 hover:border-baapGold"
                href="#features"
              >
                Explore the build
              </Link>
            </div>
            <dl className="grid gap-4 sm:grid-cols-3">
              {highlights.map((item) => (
                <div key={item.label} className="glass-panel p-4 text-center">
                  <dt className="text-sm text-slate-300">{item.label}</dt>
                  <dd className="text-lg font-semibold text-white">{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="glass-panel relative overflow-hidden p-8">
            <div className="absolute inset-x-16 -top-24 h-48 rounded-full bg-gradient-to-b from-baapGold/40 to-transparent blur-3xl" />
            <div className="relative space-y-6">
              <div className="flex items-center justify-between rounded-2xl bg-slate-900/80 px-5 py-4 ring-1 ring-white/5">
                <div>
                  <p className="text-sm text-slate-300">Baapstore theme</p>
                  <p className="text-lg font-semibold">Vibrant fashion drops</p>
                </div>
                <span className="rounded-full bg-baapPink/20 px-3 py-1 text-sm font-semibold text-baapPink">LIVE</span>
              </div>
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-800 to-slate-900 p-6 shadow-lg">
                <div className="mb-4 flex items-center gap-3 text-sm text-slate-300">
                  <span className="h-2 w-2 rounded-full bg-green-400" />
                  Instant storefront provisioning
                </div>
                <div className="space-y-3 text-sm text-slate-200">
                  <p>
                    Imported catalogue, landing page, and navigation are all set up. Swap assets, update copy, and you
                    have a fully branded store without touching the backend.
                  </p>
                  <p>
                    Tailwind CSS styling keeps the Baapstore color DNA while the layout is powered by the Next.js app
                    router for blazing-fast loads.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
