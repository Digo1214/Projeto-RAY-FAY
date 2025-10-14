import { useState } from "react";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

const Booking = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    date: undefined as Date | undefined,
    time: "",
    message: "",
  });

  // Gerar horários com intervalo de 40 minutos das 08:00 às 16:00
  const generateTimeSlots = () => {
    const slots = [];
    let currentTime = 8 * 60; // 08:00 em minutos
    const endTime = 16 * 60; // 16:00 em minutos

    while (currentTime <= endTime) {
      const hours = Math.floor(currentTime / 60);
      const minutes = currentTime % 60;
      const timeString = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;
      slots.push(timeString);
      currentTime += 40; // Intervalo de 40 minutos
    }

    return slots;
  };

  const timeSlots = generateTimeSlots();

  // Desabilitar dias que não são sábado ou domingo
  const isWeekendDay = (date: Date) => {
    const day = date.getDay();
    return day === 0 || day === 6; // 0 = Domingo, 6 = Sábado
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Solicitação de agendamento enviada! Entraremos em contato em breve.");
    setFormData({ name: "", phone: "", service: "", date: undefined, time: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleDateSelect = (date: Date | undefined) => {
    setFormData({ ...formData, date });
  };

  const handleTimeSelect = (time: string) => {
    setFormData({ ...formData, time });
  };

  return (
    <section id="booking" className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="font-poppins text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Pronto para seu Próximo Corte?
            </h2>
            <p className="text-muted-foreground text-lg">
              Agende facilmente sua próxima visita à RAY FAY — seu horário está a um clique de distância.
            </p>
            <div className="mt-4 p-4 bg-primary/10 border border-primary/20 rounded-lg">
              <p className="text-foreground font-semibold">
                ⏰ Horário de Funcionamento: Sábados e Domingos, das 08:00 às 16:00
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">Nome</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Seu nome"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Número de Celular</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="(00) 00000-0000"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="service">Serviço</Label>
              <Input
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                placeholder="ex: Corte Clássico, Barba"
                required
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="date">Data Preferida (Sábado ou Domingo)</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !formData.date && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {formData.date ? format(formData.date, "PPP") : <span>Selecione uma data</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={formData.date}
                      onSelect={handleDateSelect}
                      disabled={(date) => !isWeekendDay(date) || date < new Date(new Date().setHours(0, 0, 0, 0))}
                      initialFocus
                      className="pointer-events-auto"
                    />
                  </PopoverContent>
                </Popover>
              </div>
              <div className="space-y-2">
                <Label htmlFor="time">Horário Preferido</Label>
                <Select value={formData.time} onValueChange={handleTimeSelect} required>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Selecione um horário" />
                  </SelectTrigger>
                  <SelectContent>
                    {timeSlots.map((slot) => (
                      <SelectItem key={slot} value={slot}>
                        {slot}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Mensagem Adicional (Opcional)</Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Alguma solicitação especial ou preferência?"
                rows={4}
              />
            </div>

            <div className="text-center">
              <Button type="submit" variant="hero" size="lg" className="w-full md:w-auto">
                Reservar Meu Horário
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Booking;