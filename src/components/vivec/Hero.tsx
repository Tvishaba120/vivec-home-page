import { useEffect, useState } from "react";

const slides = [
  {
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1920&q=80",
    label: "VOCATIONAL TRAINING INSTITUTE",
    title: "GUJARAT'S LARGEST SKILL TRAINING INSTITUTE",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    img: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=1920&q=80",
    label: "EMPOWERING YOUTH",
    title: "BUILDING TOMORROW'S WORKFORCE TODAY",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu nulla varius, accumsan velit a, fermentum nisi.",
  },
  {
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1920&q=80",
    label: "INDUSTRY-READY SKILLS",
    title: "TRAINING THAT TRANSFORMS LIVES",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.",
  },
];

export function Hero() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % slides.length), 6000);
    return () => clearInterval(t);
  }, []);
  const s = slides[i];
  return (
    <section id="home" className="relative min-h-[500px] md:h-[650px] flex items-center bg-black overflow-hidden">
      {slides.map((sl, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ${idx === i ? "opacity-100" : "opacity-0"}`}
          style={{ backgroundImage: `url(${sl.img})`, backgroundSize: "cover", backgroundPosition: "center" }}
        />
      ))}
      <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
        <div className="max-w-xl text-white">
          <div className="text-sm tracking-widest font-semibold mb-4 text-brand-orange uppercase">{s.label}</div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-5 uppercase">{s.title}</h1>
          <p className="text-white/90 mb-7 leading-relaxed">{s.text}</p>
          <button className="px-7 py-3 rounded-md bg-brand-orange text-white font-semibold uppercase hover:brightness-110 transition">
            Know More
          </button>
        </div>
      </div>
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setI(idx)}
            aria-label={`slide ${idx + 1}`}
            className="h-2 w-8 rounded-full transition-all"
            style={{ background: idx === i ? "#FFFFFF" : "rgba(255,255,255,0.3)" }}
          />
        ))}
      </div>
    </section>
  );
}
