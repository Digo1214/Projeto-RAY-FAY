import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail } from "lucide-react";

const Location = () => {
  return (
    <section id="location" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-poppins text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Onde a Mágica Acontece
          </h2>
          <p className="text-muted-foreground text-lg">Nosso espaço em Antônio Cardoso-BA tá te esperando.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Details */}
          <div className="space-y-6 animate-fade-in">
            <Card className="border-border bg-card hover:shadow-green-glow transition-all duration-300">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Endereço</h3>
                    <p className="text-muted-foreground">Praça da Matriz, Centro<br />CEP 44180-000<br />Antônio Cardoso-BA</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border bg-card hover:shadow-green-glow transition-all duration-300">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Telefone</h3>
                    <p className="text-muted-foreground">(555) 123-4567</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border bg-card hover:shadow-green-glow transition-all duration-300">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Email</h3>
                    <p className="text-muted-foreground">contact@rayfaybarbers.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Button variant="hero" size="lg" className="w-full" asChild>
              <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
                Obter Direções
              </a>
            </Button>
          </div>

          {/* Map */}
          <div className="animate-slide-in-right">
            <div className="rounded-lg overflow-hidden shadow-green-glow h-[500px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15524.847392034395!2d-39.13753544999999!3d-12.458333333333334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x73ea77e53c3f0c7%3A0x7e9c4f3b8e8f0c7!2sPra%C3%A7a%20da%20Matriz%2C%20Ant%C3%B4nio%20Cardoso%20-%20BA%2C%2044180-000!5e0!3m2!1spt-BR!2sbr!4v1234567890123"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="RAY FAY Barber Shop Location - Antônio Cardoso-BA"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;