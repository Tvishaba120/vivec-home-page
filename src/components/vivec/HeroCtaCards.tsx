import { ChevronRight } from "lucide-react";

/* Inline SVG icons matching the Figma design */
function MouseIcon() {
  return (
    <svg width="60" height="60" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Mouse body */}
      <rect x="16" y="18" width="22" height="32" rx="11" stroke="white" strokeWidth="2.5" fill="none" />
      {/* Scroll wheel / line */}
      <line x1="27" y1="26" x2="27" y2="34" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
      {/* Cord */}
      <path d="M27 18 Q27 8 37 8 Q47 8 47 18" stroke="white" strokeWidth="2.5" fill="none" strokeLinecap="round" />
    </svg>
  );
}

function CloudDownloadIcon() {
  return (
    <svg width="60" height="60" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Cloud shape */}
      <path d="M16 38 Q10 38 10 32 Q10 26 16 25 Q16 18 24 16 Q32 14 36 20 Q38 16 44 16 Q52 16 52 24 Q56 24 56 30 Q56 38 48 38" stroke="white" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      {/* Arrow down */}
      <line x1="32" y1="30" x2="32" y2="48" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
      <polyline points="24,42 32,50 40,42" stroke="white" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CertificateIcon() {
  return (
    <svg width="60" height="60" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Certificate body */}
      <rect x="12" y="8" width="40" height="32" rx="3" stroke="white" strokeWidth="2.5" fill="none" />
      {/* Lines on certificate */}
      <line x1="20" y1="18" x2="44" y2="18" stroke="white" strokeWidth="2" strokeLinecap="round" />
      <line x1="20" y1="24" x2="44" y2="24" stroke="white" strokeWidth="2" strokeLinecap="round" />
      <line x1="20" y1="30" x2="36" y2="30" stroke="white" strokeWidth="2" strokeLinecap="round" />
      {/* Ribbon / medal hanging from bottom */}
      <circle cx="38" cy="44" r="8" stroke="white" strokeWidth="2.5" fill="none" />
      <line x1="33" y1="50" x2="30" y2="58" stroke="white" strokeWidth="2" strokeLinecap="round" />
      <line x1="43" y1="50" x2="46" y2="58" stroke="white" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

const cards = [
  {
    bg: "#E77817",
    icon: <MouseIcon />,
    title: "APPLY ONLINE",
    text: "lorem ipsum is simply dummy text of the"
  },
  {
    bg: "#2C97EA",
    icon: <CloudDownloadIcon />,
    title: "DOWNLOADS",
    text: "lorem ipsum is simply dummy text of the"
  },
  {
    bg: "#F0BC01",
    icon: <CertificateIcon />,
    title: "CERTIFICATION",
    text: "lorem ipsum is simply dummy text of the"
  },
];

export function HeroCtaCards() {
  return (
    <section id="admissions" className="w-full max-w-7xl mx-auto px-4 relative z-20 -mt-16 md:-mt-24 mb-16">
      <div className="grid md:grid-cols-3 shadow-2xl">
        {cards.map(({ bg, icon, title, text }) => (
          <div
            key={title}
            className="text-white p-10 lg:p-12 pb-16 flex items-center lg:items-start gap-5 lg:gap-6 relative"
            style={{ background: bg }}
          >
            <div className="flex-shrink-0">
              {icon}
            </div>
            <div className="flex-1">
              <h3 className="text-white mb-2 leading-tight font-bold text-xl lg:text-3xl">{title}</h3>
              <p className="leading-relaxed text-xs lg:text-sm text-white/90">{text}</p>
            </div>

            {/* Circular button overlapping the bottom edge */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 z-20">
              <button
                className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer"
                style={{ color: bg, border: `2px solid ${bg}` }}
                aria-label="learn more"
              >
                <ChevronRight size={24} strokeWidth={3} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
