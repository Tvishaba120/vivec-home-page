const companies = ["L&T", "LOREM", "SFT", "ALEMBIC", "INFOSYS", "TCS", "WIPRO", "RELIANCE"];

export function AlumniBar() {
  return (
    <section className="py-16 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 text-center mb-8">
        <div className="text-brand-green text-sm font-bold tracking-widest mb-3">ALUMNI</div>
        <h2 className="text-4xl md:text-5xl font-extrabold text-brand-text">WORKING WITH</h2>
      </div>
      <div className="bg-[oklch(0.25_0.02_250)] overflow-hidden">
        <div className="flex gap-8 py-8 animate-marquee whitespace-nowrap">
          {[...companies, ...companies].map((c, i) => (
            <div key={i} className="inline-flex items-center justify-center bg-white px-10 py-4 rounded-sm shadow-sm">
              <span className="text-brand-navy text-xl md:text-2xl font-bold tracking-wider">
                {c}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
