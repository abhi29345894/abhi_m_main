import Image from 'next/image';
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
          <Image
            src="https://placehold.co/1200x400.png"
            alt="Abstract Banner Background"
            width={1200}
            height={400}
            className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-500"
            data-ai-hint="abstract design"
          />
          <div className="relative py-16 md:py-24">
            <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-primary animate-fadeIn" style={{ animationDelay: '0.2s' }}>
              <span className="block">Dankhara Abhi</span>
            </h1>
            <p className="text-xl md:text-2xl text-foreground/80 mb-10 max-w-2xl mx-auto animate-fadeIn" style={{ animationDelay: '0.4s' }}>
              Welcome to my personal connect platform. Let&apos;s build something amazing together!
            </p>
            <Button
              size="lg"
              className="font-headline text-xl animate-fadeIn shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group"
              onClick={onContactClick}
              style={{ animationDelay: '0.6s' }}
            >
              Connect With Me <ChevronRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
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
