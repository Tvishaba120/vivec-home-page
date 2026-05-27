import { useState } from "react";
import { Mail, Phone, User, Search, Menu, X, ChevronDown } from "lucide-react";
import logo from "@/assets/vivec-logo.png";

const navLinks = [
  { label: "Home", href: "#home", hasMenu: false },
  { label: "About Us", href: "#about", hasMenu: true },
  { label: "Programs", href: "#programs", hasMenu: true },
  { label: "Admissions", href: "#admissions", hasMenu: false },
  { label: "Resources", href: "#resources", hasMenu: true },
  { label: "Stories", href: "#stories", hasMenu: false },
  { label: "Contact Us", href: "#contact", hasMenu: false },
];

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="bg-white shadow-sm">
      {/* Row 1 */}
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between gap-6">
        <a href="#" className="flex-shrink-0">
          <img src={logo} alt="VIVEC - Vivekanand Institute of Vocational and Entrepreneurial Competence" className="h-14 md:h-16 w-auto" />
        </a>

        <div className="hidden lg:flex items-center gap-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green">
              <Mail size={18} />
            </div>
            <div>
              <div className="text-xs text-brand-muted">APPLY ONLINE</div>
              <div className="text-sm font-semibold">vivec@inquiry.org</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green">
              <Phone size={18} />
            </div>
            <div>
              <div className="text-xs text-brand-muted">CALL US</div>
              <div className="text-sm font-semibold">123-456-789</div>
            </div>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <button className="flex items-center gap-2 px-5 py-2.5 border border-[#D76B38] rounded-lg text-sm font-semibold text-[#D76B38] hover:bg-[#D76B38] hover:text-white transition-all">
            <User size={18} /> Student Login
          </button>
          <button className="px-6 py-2.5 rounded-lg text-sm font-bold text-white bg-[#D76B38] hover:brightness-110 shadow-sm transition">
            DONATE
          </button>
        </div>

        <button className="lg:hidden p-2" onClick={() => setOpen(!open)} aria-label="menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Row 2 — green nav */}
      <nav className="bg-brand-green text-white hidden lg:block border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-[52px]">
          <ul className="flex items-center h-full">
            {navLinks.map((l, idx) => (
              <li key={l.label} className="flex items-center h-full">
                <a href={l.href} className="flex items-center gap-1 px-6 h-full text-sm font-semibold hover:bg-black/10 transition-colors">
                  {l.label}
                  {l.hasMenu && <ChevronDown size={14} />}
                </a>
                <div className="h-full w-[1px] bg-white/20" aria-hidden="true" />
              </li>
            ))}
          </ul>
          <div className="flex items-center h-full">
            <button className="px-5 h-full hover:bg-black/10 transition-colors" aria-label="search">
              <Search size={18} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-brand-green text-white">
          <ul className="flex flex-col">
            {navLinks.map((l) => (
              <li key={l.label} className="border-b border-white/10">
                <a href={l.href} className="block px-4 py-3 text-sm font-semibold" onClick={() => setOpen(false)}>{l.label}</a>
              </li>
            ))}
          </ul>
          <div className="p-4 flex flex-col gap-2">
            <button className="w-full px-4 py-2 bg-white text-brand-text rounded font-semibold">Student Login</button>
            <button className="w-full px-4 py-2 bg-brand-orange text-white rounded font-bold">DONATE</button>
          </div>
        </div>
      )}
    </header>
  );
}
