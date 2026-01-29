// app/page.tsx
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import About from "@components/About";
import Services from "@/components/Services";
import Readiness from "@/components/Readiness";
import Sustainability from "@/components/Sustainability";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Readiness />
      <Sustainability />
      <Testimonials />
      <Contact />
    </>
  );
}