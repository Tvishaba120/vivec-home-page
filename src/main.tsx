import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";

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

function App() {
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

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
