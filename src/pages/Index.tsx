import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Booking from "@/components/Booking";
import Testimonials from "@/components/Testimonials";
import Gallery from "@/components/Gallery";
import Location from "@/components/Location";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-poppins">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Booking />
      <Testimonials />
      <Gallery />
      <Location />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;