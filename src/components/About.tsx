import shopInterior from "@/assets/shop-interior.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 animate-fade-in">
            <h2 className="font-poppins text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Aqui, a gente entende do seu estilo.
            </h2>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Na RAY FAY, a vibe é outra. A gente não faz só corte — a gente cria uma experiência autêntica. Degradê perfeito, barba alinhada ou aquela transformação completa: cada trampo é feito pensando no que combina com você.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Só usamos as melhores ferramentas e técnicas pra garantir que você saia daqui com um visual impecável e a confiança lá em cima.
            </p>
          </div>

          {/* Image */}
          <div className="relative animate-slide-in-right">
            <div className="relative rounded-lg overflow-hidden shadow-green-glow">
              <img 
                src={shopInterior} 
                alt="RAY FAY Barber Shop Interior" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent"></div>
            </div>
            {/* Decorative Element */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-lg -z-10"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-lg -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;