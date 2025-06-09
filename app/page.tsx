import AboutSection from "@/components/aboutUs";
import Commitment from "@/components/commitment";
import ContactUs from "@/components/contactUs";
import EmpowerSection from "@/components/empowerSection";
import { FaqSection } from "@/components/FAQSection";
import Footer from "@/components/Footer";
import HeroCarousel from "@/components/hero/hero-carousel";
import HorizontalScrollSection from "@/components/horizontalScroll";
import Loader from "@/components/Loader";
import MasonryCardsOnImages from "@/components/masonryGrid";
import Navbar from "@/components/Navbar";
import PackagesSection from "@/components/packages/package.home";
import { Button } from "@/components/ui/button";
import MarginedComponent from "@/components/ui/marginedComponent";
import RevealOnScroll from "@/components/ui/revealOnScroll";
import { aboutUsData } from "@/data/aboutUs";
import { FAQData } from "@/data/FAQ";
import { masonryGridImages } from "@/data/masonryGridImages";

export default function Home() {
  return (
    <Loader>
      <div className="home-gradient">
        <Navbar />
        <HeroCarousel />

        <MarginedComponent>
          <AboutSection data={aboutUsData} />

          <RevealOnScroll animationType="fade-left">
            <MasonryCardsOnImages images={masonryGridImages} />
          </RevealOnScroll>

          <RevealOnScroll animationType="zoom-in">
            <PackagesSection />
          </RevealOnScroll>

          <RevealOnScroll animationType="fade-up">
            <EmpowerSection />
          </RevealOnScroll>

          <RevealOnScroll animationType="fade-left">
            <Commitment />
          </RevealOnScroll>

          <RevealOnScroll animationType="zoom-in">
            <ContactUs />
          </RevealOnScroll>

          <RevealOnScroll animationType="fade-up">
            <FaqSection faqs={FAQData} />
          </RevealOnScroll>
        </MarginedComponent>

        <Footer />
      </div>
    </Loader>
  );
}
