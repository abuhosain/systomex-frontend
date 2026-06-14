import Hero from "@/components/website/sections/Hero";
import TrustedBy from "@/components/website/sections/TrustedBy";
import Services from "@/components/website/sections/Services";
import Products from "@/components/website/sections/Products";
import Courses from "@/components/website/sections/Courses";
import WhyChooseUs from "@/components/website/sections/WhyChooseUs";
import Projects from "@/components/website/sections/Projects";
import Process from "@/components/website/sections/Process";
import Testimonials from "@/components/website/sections/Testimonials";
import About from "@/components/website/sections/About";
import FAQ from "@/components/website/sections/FAQ";
import Contact from "@/components/website/sections/Contact";
import CTA from "@/components/website/sections/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <Services />
      <Products />
      <Courses />
      <WhyChooseUs />
      <Projects />
      <Process />
      <Testimonials />
      <About />
      <FAQ />
      <Contact />
      <CTA />
    </>
  );
}
