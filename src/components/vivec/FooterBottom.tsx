import { Facebook, Instagram, Youtube, Linkedin, Twitter, Send } from "lucide-react";

const socials = [Facebook, Instagram, Youtube, Linkedin, Twitter];
const insta = [
  "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=300&h=300&fit=crop",
  "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=300&h=300&fit=crop",
  "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=300&h=300&fit=crop",
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=300&h=300&fit=crop",
];


export function FooterBottom() {
  return (
    <section className="bg-[oklch(0.25_0.02_250)] text-white py-14">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3">
        <div className="py-2 pr-10 border-r border-white/10">
          <h4 className="font-bold tracking-widest mb-6 text-sm">CONNECT WITH US</h4>
          <div className="flex gap-3">
            {socials.map((Icon, i) => (
              <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-brand-orange flex items-center justify-center transition-colors" aria-label="social">
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
        <div className="py-2 px-10 border-r border-white/10">
          <h4 className="font-bold tracking-widest mb-6 text-sm text-center md:text-left">SUBSCRIBE WITH US</h4>
          <form className="flex max-w-sm mx-auto md:mx-0" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="ENTER YOUR EMAIL" className="flex-1 px-4 py-3 rounded-l-md bg-white border-none text-sm text-brand-navy placeholder:text-neutral-400 focus:outline-none" />
            <button className="px-5 bg-brand-blue hover:brightness-110 rounded-r-md transition" aria-label="subscribe">
              <Send size={18} className="text-white" />
            </button>
          </form>
        </div>
        <div className="py-2 pl-10">
          <h4 className="font-bold tracking-widest mb-6 text-sm text-center md:text-left">@INSTAGRAM</h4>
          <div className="grid grid-cols-4 md:grid-cols-4 gap-2 mx-auto md:mx-0">
            {insta.map((src, i) => (
              <img key={i} src={src} alt="" className="w-12 h-12 object-cover rounded" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
