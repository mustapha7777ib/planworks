// app/page.tsx
import Hero from "@/components/Hero";
import Contact from "@/components/Contact";
import About from "@components/About";
import ServicesPage from "@/components/Services";
import Readiness from "@/components/Readiness";
import Sustainability from "@/components/Sustainability";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <ServicesPage />
      <Readiness />
      <Sustainability />
      <Contact />
    </>
  );
}