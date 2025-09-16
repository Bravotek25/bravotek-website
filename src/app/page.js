import AboutSection from "@/components/views/AboutSection";
import HeroSection from "@/components/views/HeroSection";
import PartnerSection from "@/components/views/PartnerSection";
import FAQSection from "@/components/views/FAQSection";
import TestimonialSection from "@/components/views/TestimonialSection";
import CTASection from "@/components/views/CTASection";
import ServicesSection from "@/components/views/ServicesSection";
import ProjectSection from "@/components/views/ProjectSection";

export default function Home() {
  return (
    <>
      {" "}
      {/* hero section */}
      <HeroSection />
      {/* partner section */}
      <PartnerSection />
      {/* about section */}
      <AboutSection />
      <ServicesSection />
      <ProjectSection />
      {/* testimonial section */}
      <TestimonialSection />
      {/* faq section */}
      <FAQSection />
      <CTASection />
    </>
  );
}
