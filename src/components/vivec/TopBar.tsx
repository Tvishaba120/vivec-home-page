import { Facebook, Instagram, Youtube, Linkedin, Twitter, ChevronDown } from "lucide-react";

export function TopBar() {
  const socials = [Facebook, Instagram, Youtube, Linkedin, Twitter];
  return (
    <div className="bg-black text-white text-xs">
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          {socials.map((Icon, i) => (
            <a key={i} href="#" className="hover:text-brand-orange transition-colors" aria-label="social">
              <Icon size={14} />
            </a>
          ))}
        </div>
        <div className="hidden md:flex items-center gap-4">
          <a href="#" className="hover:text-brand-orange">REGISTER</a>
          <span className="opacity-40">|</span>
          <a href="#" className="hover:text-brand-orange">APPLY ONLINE</a>
          <span className="opacity-40">|</span>
          <a href="#" className="hover:text-brand-orange">BLOG</a>
          <span className="opacity-40">|</span>
          <a href="#" className="hover:text-brand-orange">FAQ</a>
          <span className="opacity-40">|</span>
          <button className="flex items-center gap-1 hover:text-brand-orange">
            English <ChevronDown size={12} />
          </button>
        </div>
      </div>
    </div>
  );
}
