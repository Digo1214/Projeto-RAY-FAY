import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Marcus L.",
    text: "Melhor degradê que já fiz! A atenção aos detalhes é incomparável.",
    rating: 5,
  },
  {
    name: "David R.",
    text: "Barbearia limpa, ótima atmosfera e serviço de primeira.",
    rating: 5,
  },
  {
    name: "Liam J.",
    text: "Finalmente encontrei um barbeiro que entende meu estilo sempre.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-poppins text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-muted-foreground text-lg">Experiências reais de pessoas reais</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="hover:shadow-green-glow transition-all duration-300 animate-fade-in border-border bg-card"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground/80 mb-4 italic">"{testimonial.text}"</p>
                <p className="font-semibold text-primary">— {testimonial.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;