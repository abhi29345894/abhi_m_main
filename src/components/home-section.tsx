import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChevronRight, Sparkles, Palette, Orbit, LifeBuoy } from 'lucide-react';

interface HomeSectionProps {
  onContactClick: () => void;
}

const services = [
  {
    icon: <Palette className="h-10 w-10 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />,
    title: "Graphic Design",
    description: "Crafting stunning visuals that tell your story and captivate your audience.",
    delay: "0.8s",
  },
  {
    icon: <Orbit className="h-10 w-10 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />,
    title: "Web Animations",
    description: "Bringing your website to life with smooth, interactive, and engaging animations.",
    delay: "1.0s",
  },
  {
    icon: <LifeBuoy className="h-10 w-10 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />,
    title: "Digital Assistance",
    description: "Providing comprehensive support for your digital needs and projects.",
    delay: "1.2s",
  },
];

export function HomeSection({ onContactClick }: HomeSectionProps) {
  return (
    <section id="home" className="py-24 md:py-32 bg-gradient-to-br from-background to-secondary/30 rounded-xl shadow-2xl overflow-hidden animate-fadeIn section-mb">
      <div className="container mx-auto px-4 text-center">
        <div className="relative mb-16 group">
          <div className="absolute inset-0 flex items-center justify-center opacity-10 group-hover:opacity-15 transition-opacity duration-500 overflow-hidden -z-10">
            {/* Placeholder for Lottie Animation - Sparkles icon used for now */}
            <Sparkles className="h-72 w-72 md:h-96 md:w-96 text-primary/50 animate-pulseSlow" />
          </div>
          <div className="relative py-16 md:py-24">
            <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-primary animate-fadeIn" style={{ animationDelay: '0.2s' }}>
              <span className="block">Dankhara Abhi</span>
            </h1>
            <p className="text-xl md:text-2xl text-foreground/80 mb-10 max-w-3xl mx-auto animate-fadeIn" style={{ animationDelay: '0.4s' }}>
              Affordable 3D & Animated Websites
            </p>
            <Button
              size="lg"
              className="font-headline text-xl animate-fadeIn shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group/button"
              onClick={onContactClick}
              style={{ animationDelay: '0.6s' }}
            >
              Connect With Me <ChevronRight className="ml-2 h-6 w-6 group-hover/button:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>
        </div>
        
        <div className="mt-16 animate-fadeIn" style={{ animationDelay: '0.7s' }}>
          <h2 className="font-headline text-3xl md:text-4xl text-accent mb-12 text-center">My Core Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="bg-card/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 group transform hover:-translate-y-1 animate-slideInUp"
                style={{ animationDelay: service.delay }}
              >
                <CardHeader className="items-center text-center">
                  {service.icon}
                  <CardTitle className="font-headline text-2xl text-primary">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
