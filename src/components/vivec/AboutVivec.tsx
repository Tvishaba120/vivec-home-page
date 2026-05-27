import { ArrowRight } from "lucide-react";

export function AboutVivec() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <img
          src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1200&q=80"
          alt="VIVEC classroom training"
          className="w-full h-[400px] object-cover rounded-lg shadow-lg"
        />
        <div className="flex flex-col gap-6">
          <div className="text-brand-green text-sm font-bold tracking-widest mb-2 uppercase">ABOUT US</div>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight" style={{ color: "#0F2942" }}>
            VIVEC
          </h2>
          <p className="text-brand-muted leading-relaxed mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
          <a href="#" className="inline-flex items-center gap-2 text-brand-green font-bold hover:gap-3 transition-all">
            KNOW MORE <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
