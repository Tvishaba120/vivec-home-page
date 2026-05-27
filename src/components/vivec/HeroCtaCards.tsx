import { FileText, Download, Award, ArrowRight } from "lucide-react";

const cards = [
  { bg: "#E77817", Icon: FileText, title: "APPLY ONLINE", text: "Lorem ipsum dolor sit amet consectetur adipiscing elit." },
  { bg: "#2C97EA", Icon: Download, title: "DOWNLOADS", text: "Lorem ipsum dolor sit amet consectetur adipiscing elit." },
  { bg: "#F0BC01", Icon: Award, title: "CERTIFICATION", text: "Lorem ipsum dolor sit amet consectetur adipiscing elit." },
];

export function HeroCtaCards() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3">
      {cards.map(({ bg, Icon, title, text }) => (
        <div
          key={title}
          className="text-white p-8 flex items-start gap-5 md:h-[194px]"
          style={{ background: bg }}
        >
          <div className="flex-shrink-0 w-14 h-14 rounded-full bg-white/20 flex items-center justify-center">
            <Icon size={28} />
          </div>
          <div className="flex-1">
            <h3 className="uppercase text-white mb-2" style={{ fontWeight: 600, fontSize: "24px" }}>{title}</h3>
            <p className="leading-relaxed mb-3" style={{ fontWeight: 500, fontSize: "12px", color: "rgba(255,255,255,0.8)" }}>{text}</p>
            <button
              className="w-9 h-9 rounded-full bg-white flex items-center justify-center hover:brightness-95 transition"
              style={{ border: `2px solid ${bg}`, color: bg }}
              aria-label="learn more"
            >
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      ))}
    </section>
  );
}
