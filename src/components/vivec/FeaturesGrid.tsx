import { Clock, Briefcase, MousePointer, Smartphone, RefreshCw, Hand } from "lucide-react";

const features = [
  { Icon: Clock, color: "#F5A623", title: "MALLEABLE STUDY TIME" },
  { Icon: Briefcase, color: "#2EAA3E", title: "PLACEMENT ASSISTANCE" },
  { Icon: MousePointer, color: "#F5A623", title: "EASY TO ACCESS" },
  { Icon: Smartphone, color: "#F5A623", title: "STUDY ON THE GO" },
  { Icon: RefreshCw, color: "#3B82F6", title: "UPDATED SYLLABUS" },
  { Icon: Hand, color: "#2EAA3E", title: "PRACTICAL & INTERACTIVE" },
];

const divider = "1px solid rgba(42, 67, 86, 0.2)";

export function FeaturesGrid() {
  return (
    <section
      id="resources"
      className="py-20"
      style={{ background: "#F3F6F8", borderBottom: divider, color: "#2A4356" }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ Icon, color, title }, i) => {
            const col = i % 3;
            const row = Math.floor(i / 3);
            const style: React.CSSProperties = {};
            if (col < 2) style.borderRight = divider;
            if (row === 0) style.borderBottom = divider;
            return (
              <div key={title} className="p-8 flex gap-5 items-start" style={style}>
                <div
                  className="flex-shrink-0 w-14 h-14 rounded-lg flex items-center justify-center text-white shadow-md"
                  style={{ background: color }}
                >
                  <Icon size={26} />
                </div>
                <div>
                  <h3 className="uppercase mb-2" style={{ fontWeight: 600, fontSize: "18px", color: "#2A4356" }}>{title}</h3>
                  <p className="leading-relaxed" style={{ fontWeight: 500, fontSize: "12px", color: "#2A4356" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
