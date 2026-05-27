import { createFileRoute } from "@tanstack/react-router";
import { TopBar } from "@/components/vivec/TopBar";
import { Header } from "@/components/vivec/Header";
import { Hero } from "@/components/vivec/Hero";
import { HeroCtaCards } from "@/components/vivec/HeroCtaCards";
import { AboutVivec } from "@/components/vivec/AboutVivec";
import { WhyChooseUs } from "@/components/vivec/WhyChooseUs";
import { StudyCourses } from "@/components/vivec/StudyCourses";
import { HowToStudy } from "@/components/vivec/HowToStudy";
import { FeaturesGrid } from "@/components/vivec/FeaturesGrid";
import { Testimonials } from "@/components/vivec/Testimonials";
import { AlumniBar } from "@/components/vivec/AlumniBar";
import { SuccessStories } from "@/components/vivec/SuccessStories";
import { Footer } from "@/components/vivec/Footer";
import { FooterBottom } from "@/components/vivec/FooterBottom";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "VIVEC — Vivekanand Institute of Vocational and Entrepreneurial Competence" },
      { name: "description", content: "Gujarat's largest skill training institute. Vocational training, entrepreneurial competence, and skill-oriented courses at VIVEC." },
      { property: "og:title", content: "VIVEC — Vivekanand Institute of Vocational and Entrepreneurial Competence" },
      { property: "og:description", content: "Gujarat's largest skill training institute offering vocational and entrepreneurial training." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-white">
      <TopBar />
      <Header />
      <main>
        <Hero />
        <HeroCtaCards />
        <AboutVivec />
        <WhyChooseUs />
        <StudyCourses />
        <HowToStudy />
        <FeaturesGrid />
        <Testimonials />
        <AlumniBar />
        <SuccessStories />
      </main>
      <Footer />
      <FooterBottom />
    </div>
  );
}
