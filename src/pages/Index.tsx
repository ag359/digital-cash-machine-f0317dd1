import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SEOSlider from "@/components/SEOSlider";
import ValueProposition from "@/components/ValueProposition";
import Portfolio from "@/components/Portfolio";
import TargetGroups from "@/components/TargetGroups";
import Process from "@/components/Process";
import AboutUs from "@/components/AboutUs";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <Hero />
      <div id="leistungen">
        <SEOSlider />
      </div>
      <ValueProposition />
      <Portfolio />
      <TargetGroups />
      <div id="prozess">
        <Process />
      </div>
      <div id="ueber-uns">
        <AboutUs />
      </div>
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
