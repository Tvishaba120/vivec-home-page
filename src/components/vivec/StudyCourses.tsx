import { Play } from "lucide-react";

const courses = [
  { img: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80", title: "VIVEKANANDA INSTITUTE OF VOCATIONAL TRAINING & ENTREPRENEURIAL COMPETENCE", duration: "2 YEAR COURSE" },
  { img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80", title: "BUSINESS PROCESS OUTSOURCING LEARNING CENTER FOR TRIBAL YOUTHS", duration: "1 YEAR COURSE" },
  { img: "https://images.unsplash.com/photo-1544928147-79a2dbc1f389?auto=format&fit=crop&w=800&q=80", title: "ADULT LITERACY FOR WOMEN", duration: "1 YEAR COURSE" },
  { img: "https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=800&q=80", title: "YOUTH DEVELOPMENT CENTERS", duration: "1 YEAR COURSE" },
];

export function StudyCourses() {
  return (
    <section className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="text-brand-green text-sm font-bold tracking-widest mb-3">UNIQUE FEATURES OF OUR PROGRAMS</div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-brand-text">WHAT DO YOU WANT TO STUDY?</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((c) => (
            <div key={c.title} className="relative h-80 rounded-lg overflow-hidden group cursor-pointer">
              <img src={c.img} alt={c.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              <div className="absolute inset-0 p-6 flex flex-col justify-between">
                <h3 className="text-white font-bold text-sm leading-snug">{c.title}</h3>
                <div className="inline-flex items-center gap-2 self-start bg-brand-green text-white px-3 py-1.5 rounded-full text-xs font-bold">
                  <Play size={12} fill="currentColor" /> {c.duration}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
