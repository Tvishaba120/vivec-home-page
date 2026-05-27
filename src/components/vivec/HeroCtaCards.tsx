import { Mouse, CloudDownload, FileBadge, ChevronRight } from "lucide-react";

const cards = [
  {
    bg: "#E77817",
    Icon: Mouse,
    title: "APPLY ONLINE",
    text: "Lorem ipsum is simply dummy text of the"
  },
  {
    bg: "#2C97EA",
    Icon: CloudDownload,
    title: "DOWNLOADS",
    text: "Lorem ipsum is simply dummy text of the"
  },
  {
    bg: "#F0BC01",
    Icon: FileBadge,
    title: "CERTIFICATION",
    text: "Lorem ipsum is simply dummy text of the"
  },
];

export function HeroCtaCards() {
  return (
    <div id="admissions" className="max-w-7xl mx-auto px-4 -mt-16 md:-mt-24 relative z-10 grid md:grid-cols-3">
      {cards.map(({ bg, Icon, title, text }) => (
        <div
          key={title}
          className="text-white p-8 pb-12 flex items-start gap-6 relative"
          style={{ background: bg }}
        >
          <div className="flex-shrink-0">
            <Icon size={64} strokeWidth={1.5} className="text-white fill-white/10" />
          </div>
          <div className="flex-1">
            <h3 className="text-white mb-2 leading-tight" style={{ fontWeight: 600, fontSize: "24px" }}>{title}</h3>
            <p className="leading-relaxed" style={{ fontWeight: 400, fontSize: "14px", color: "rgba(255,255,255,0.9)" }}>{text}</p>
          </div>

          {/* Circular button overlapping the bottom edge */}
          <div className="absolute -bottom-5 left-1/2 -translate-x-1/2">
            <button
              className="w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer"
              style={{ color: bg, border: `2px solid ${bg}` }}
              aria-label="learn more"
            >
              <ChevronRight size={20} strokeWidth={3} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
