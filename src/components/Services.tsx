import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Scissors, ShowerHead, Sparkles, Package } from "lucide-react";

const services = [
  {
    icon: Scissors,
    title: "Corte Clássico",
    description: "Um corte limpo e sob medida com acabamento perfeito.",
    price: "R$ 17,00",
  },
  {
    icon: Sparkles,
    title: "Barba",
    description: "Barbas perfeitamente modeladas com ferramentas de precisão.",
    price: "R$ 10,00",
  },
  {
    icon: ShowerHead,
    title: "Pezinho e Sobrancelha",
    description: "Acabamento perfeito no pezinho e design de sobrancelha.",
    price: "R$ 12,00",
  },
  {
    icon: Package,
    title: "Pacote Completo",
    description: "Corte + Barba + Finalização",
    price: "R$ 25,00",
  },
];

const Services = () => {
  const scrollToBooking = () => {
    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-poppins text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            O Que a Casa Oferece
          </h2>
          <p className="text-muted-foreground text-lg">Cuidados premium sob medida para a perfeição</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-green-glow transition-all duration-300 hover:scale-105 animate-fade-in border-border bg-card"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="w-14 h-14 rounded-lg bg-gradient-primary flex items-center justify-center mb-4 group-hover:animate-glow-pulse">
                  <service.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <CardTitle className="font-poppins text-xl">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  {service.price}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="hero" size="lg" onClick={scrollToBooking}>
            Agendar um Serviço
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;