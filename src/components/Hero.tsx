import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-barber.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background"></div>
      </div>

      {/* Green Gradient Effect */}
      <div className="absolute inset-0 bg-gradient-hero opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center animate-fade-in">
        <h1 className="font-poppins text-5xl md:text-7xl lg:text-8xl font-black mb-6 bg-gradient-primary bg-clip-text text-transparent">
          RAY FAY
        </h1>
        <h2 className="font-poppins text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
          Seu Estilo, Nossas Regras.
        </h2>
        <p className="font-poppins text-3xl md:text-5xl lg:text-6xl font-bold mb-8 text-foreground/90">
          Mais que um Corte, uma Atitude.
        </p>
        <p className="text-lg md:text-xl mb-12 text-muted-foreground max-w-2xl mx-auto">
          O upgrade que seu visual precisava. Simples assim.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            variant="hero" 
            size="lg"
            onClick={() => scrollToSection("booking")}
            className="w-full sm:w-auto"
          >
            Agende seu Horário
          </Button>
          <Button 
            variant="heroOutline" 
            size="lg"
            onClick={() => scrollToSection("gallery")}
            className="w-full sm:w-auto"
          >
            Veja Nosso Trabalho
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;