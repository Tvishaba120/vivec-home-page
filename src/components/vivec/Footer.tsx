import logo from "@/assets/vivec-logo.png";

const cols = [
  { title: "ABOUT US", links: ["Overview Of The Trust", "Mission And Vision", "Campus Facilities", "Staff And Faculty Profiles"] },
  { title: "PROGRAMS", links: ["Vivekananda Institute Of Vocational Training & Entrepreneurial Competence", "Business Process Outsourcing Learning Center For Tribal Youths", "Adult Literacy For Women", "Youth Development Centers", "School Support Program (SSP)"] },
  { title: "WHY VIVEC", links: ["Campus Activities", "Clubs And Organizations", "Student Services", "Career Services", "Alumni Network"] },
  { title: "LINKS", links: ["Home", "Admission", "Events", "Blog", "Contact Us"] },
];

export function Footer() {
  return (
    <footer className="bg-white py-16 border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
        {cols.map((c) => (
          <div key={c.title}>
            <h4 className="font-bold text-brand-text mb-4 tracking-wide">{c.title}</h4>
            <ul className="space-y-2">
              {c.links.map((l) => (
                <li key={l}>
                  <a href="#" className="text-sm text-brand-muted hover:text-brand-green leading-snug">{l}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className="col-span-2 md:col-span-3 lg:col-span-1 flex flex-col items-start gap-3">
          <img src={logo} alt="VIVEC" className="h-16 w-auto" />
          <p className="text-xs text-brand-muted">© 2025 VIVEC. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}
