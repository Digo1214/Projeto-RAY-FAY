import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const Newsletter = () => {
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Bem-vindo ao Clube RAY FAY! Entraremos em contato em breve.");
    setPhone("");
    setName("");
  };

  return (
    <section id="newsletter" className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8 animate-fade-in">
            <h2 className="font-poppins text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Fique Afiado com RAY FAY
            </h2>
            <p className="text-muted-foreground text-lg">
              Junte-se à nossa comunidade para dicas de estilo, ofertas especiais e atualizações.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 animate-fade-in">
            <div className="grid sm:grid-cols-2 gap-4">
              <Input
                type="text"
                placeholder="Seu Nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <Input
                type="tel"
                placeholder="Seu Número de Celular"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
            <Button type="submit" variant="hero" size="lg" className="w-full sm:w-auto">
              Entrar no Clube
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;