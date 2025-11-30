export function Testimonial() {
  return (
    <section className="section-shell">
      <div className="glass-panel grid gap-6 p-8 md:grid-cols-[1.1fr,0.9fr] md:items-center">
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-baapGold">Merchant spotlight</p>
          <h2 className="text-3xl font-semibold sm:text-4xl">“Baapstore let us ship a fashion brand in days.”</h2>
          <p className="text-slate-200">
            "We pulled the Baapstore demo into a Next.js front-end, swapped assets, and were live with automated fulfillment
            the same week. The template here mirrors that exact flow so you can do the same." — <strong>Ridhi, Founder</strong>
          </p>
        </div>
        <div className="glass-panel bg-slate-900/70 p-6">
          <ul className="space-y-4 text-slate-200">
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2.5 w-2.5 rounded-full bg-green-400" aria-hidden />
              <div>
                <p className="font-semibold text-white">Performance ready</p>
                <p>Built with image optimization, font loading, and metadata configured out of the box.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2.5 w-2.5 rounded-full bg-baapPink" aria-hidden />
              <div>
                <p className="font-semibold text-white">Conversion-focused design</p>
                <p>Prominent CTAs point to the Baapstore live demo while keeping your brand message front-and-center.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2.5 w-2.5 rounded-full bg-baapGold" aria-hidden />
              <div>
                <p className="font-semibold text-white">Tailwind + Next.js</p>
                <p>Everything is componentized for fast iteration—add sections, replace colors, or hook up data sources easily.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
