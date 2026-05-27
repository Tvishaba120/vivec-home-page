import { Award, GraduationCap, BookOpen, Users } from "lucide-react";

const stats = [
  { Icon: Award, num: "8,700+", label: "SUCCESSFULLY TRAINED" },
  { Icon: GraduationCap, num: "294+", label: "STUDENTS PLACED" },
  { Icon: BookOpen, num: "14+", label: "SKILL-ORIENTED COURSES" },
  { Icon: Users, num: "65%", label: "LITERACY CLASSES" },
];

const bgImg = "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1920&q=80";

export function WhyChooseUs() {
  return (
    <section
      className="relative py-20 text-white"
      style={{ backgroundImage: `url(${bgImg})`, backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <div className="absolute inset-0" style={{ background: "rgba(23, 164, 59, 0.8)" }} />
      <div className="relative max-w-7xl mx-auto px-4 text-center">
        <div className="text-sm font-semibold tracking-widest mb-3 text-white/80 uppercase">THE NUMBERS SAY IT ALL</div>
        <h2 className="text-4xl md:text-5xl font-semibold uppercase mb-14">WHY CHOOSE US</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10">
          {stats.map(({ Icon, num, label }, idx) => (
            <div
              key={label}
              className="px-6"
              style={idx > 0 ? { borderLeft: "1px solid rgba(255,255,255,0.4)" } : undefined}
            >
              <Icon className="mx-auto mb-4" size={80} strokeWidth={1.25} />
              <div className="mb-2" style={{ fontSize: "60px", fontWeight: 700, lineHeight: 1 }}>{num}</div>
              <div className="text-sm font-semibold tracking-wide text-white/90 uppercase mt-3">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
