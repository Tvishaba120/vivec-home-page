import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const items = [
  { quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.", name: "Priya Sharma", role: "BPO Executive" },
  { quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu nulla varius, accumsan velit a, fermentum nisi. Donec eu tellus eget arcu cursus iaculis.", name: "Rahul Patel", role: "Entrepreneur" },
  { quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada.", name: "Anita Desai", role: "Software Trainee" },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % items.length), 5000);
    return () => clearInterval(t);
  }, []);
  const prev = () => setI((p) => (p - 1 + items.length) % items.length);
  const next = () => setI((p) => (p + 1) % items.length);
  const t = items[i];
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="text-brand-green text-sm font-bold tracking-widest mb-3">WHAT PEOPLE SAY ABOUT US</div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-brand-text">TESTIMONIALS</h2>
        </div>
        <div className="flex items-center gap-4 max-w-4xl mx-auto">
          <button onClick={prev} aria-label="prev" className="flex-shrink-0 w-11 h-11 rounded-full border-2 border-brand-text/20 flex items-center justify-center hover:bg-brand-green hover:text-white hover:border-brand-green transition">
            <ChevronLeft size={20} />
          </button>
          <div className="relative flex-1 bg-white rounded-xl shadow-xl p-8 md:p-12 border border-neutral-100">
            <Quote className="absolute top-6 right-6 text-brand-orange/30" size={64} fill="currentColor" />
            <p className="text-lg text-brand-text/80 leading-relaxed mb-6 relative z-10">"{t.quote}"</p>
            <div>
              <div className="font-bold text-brand-text">{t.name}</div>
              <div className="text-sm text-brand-muted">{t.role}</div>
            </div>
          </div>
          <button onClick={next} aria-label="next" className="flex-shrink-0 w-11 h-11 rounded-full border-2 border-brand-text/20 flex items-center justify-center hover:bg-brand-green hover:text-white hover:border-brand-green transition">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
