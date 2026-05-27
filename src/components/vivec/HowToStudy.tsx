const items = [
  { img: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=900&q=80", title: "Apply Now" },
  { img: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=900&q=80", title: "Schedule A Visit" },
  { img: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=900&q=80", title: "Contact Us" },
];

export function HowToStudy() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="text-brand-green text-sm font-bold tracking-widest mb-3">THERE ARE MANY WAYS TO LEARN</div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-brand-text">HOW DO YOU WANT TO STUDY?</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((it) => (
            <div key={it.title} className="relative h-96 rounded-lg overflow-hidden group cursor-pointer">
              <img src={it.img} alt={it.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                <h3 className="text-2xl font-bold mb-2">{it.title}</h3>
                <p className="text-sm text-white/85 leading-relaxed">Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor.</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
