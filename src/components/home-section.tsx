import { Button } from '@/components/ui/button';
import { ChevronRight, Sparkles } from 'lucide-react';

interface HomeSectionProps {
  onContactClick: () => void;
}

export function HomeSection({ onContactClick }: HomeSectionProps) {
  return (
    <section id="home" className="py-16 md:py-24 bg-gradient-to-br from-background to-secondary/30 rounded-xl shadow-lg overflow-hidden animate-fadeIn section-mb">
      <div className="container mx-auto px-4 text-center">
        <div className="relative mb-12 group">
          <div className="absolute inset-0 flex items-center justify-center opacity-10 group-hover:opacity-15 transition-opacity duration-500 overflow-hidden -z-10">
            <Sparkles className="h-64 w-64 md:h-96 md:w-96 text-primary/50 animate-[pulse_3s_ease-in-out_infinite]" />
          </div>
          <div className="relative py-16 md:py-24">
            <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-primary animate-fadeIn" style={{ animationDelay: '0.2s' }}>
              <span className="block">Dankhara Abhi</span>
            </h1>
            <p className="text-xl md:text-2xl text-foreground/80 mb-10 max-w-2xl mx-auto animate-fadeIn" style={{ animationDelay: '0.4s' }}>
              Welcome to my personal connect platform. Let&apos;s build something amazing together!
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
        
        <div className="mt-12 p-6 bg-card rounded-lg shadow-md animate-fadeIn" style={{ animationDelay: '0.8s' }}>
          <div className="flex items-center justify-center mb-3 text-accent">
            <Sparkles className="w-8 h-8 mr-2" />
            <h3 className="font-headline text-2xl">My Core Services</h3>
          </div>
          <p className="text-muted-foreground max-w-xl mx-auto">
            I specialize in graphic design, web animations, and digital assistance to bring your ideas to life.
          </p>
        </div>

      </div>
    </section>
  );
}
