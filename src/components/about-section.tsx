import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { UserCircle2, Briefcase, Sparkles, Layers, Palette, Zap, HelpCircle } from "lucide-react";

const servicesList = [
  { icon: <Layers className="h-5 w-5 text-accent" />, text: "Custom website development" },
  { icon: <Palette className="h-5 w-5 text-accent" />, text: "Captivating graphic design" },
  { icon: <Zap className="h-5 w-5 text-accent" />, text: "Interactive 3D animations" },
  { icon: <HelpCircle className="h-5 w-5 text-accent" />, text: "General digital assistance" },
];

export function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-28 animate-fadeIn section-mb">
      <div className="container mx-auto px-4">
        <Card className="overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:scale-[1.01]">
          <CardHeader className="bg-primary/10 p-8 md:p-12">
            <div className="flex items-center space-x-4 animate-slideInLeft" style={{animationDelay: '0.2s'}}>
              <UserCircle2 className="h-12 w-12 md:h-16 md:w-16 text-primary" />
              <CardTitle className="font-headline text-4xl md:text-5xl text-primary">About Me - Dankhara Abhi</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="p-8 md:p-12 grid md:grid-cols-3 gap-8 md:gap-12 items-center">
            <div className="md:col-span-1 flex justify-center animate-slideInRight" style={{animationDelay: '0.4s'}}>
              <div className="flex flex-col items-center justify-center h-[250px] w-[250px] md:h-[300px] md:w-[300px] bg-primary/5 rounded-full shadow-lg border-4 border-secondary p-6 group transition-all duration-300 hover:shadow-primary/20 hover:border-primary/50 hover:scale-105">
                <Sparkles className="h-24 w-24 md:h-32 md:w-32 text-primary transition-transform duration-300 group-hover:scale-110 group-hover:animate-pulse" />
                <p className="mt-4 font-headline text-xl md:text-2xl text-primary transition-opacity duration-300 group-hover:opacity-80">Abhi Connect</p>
              </div>
            </div>
            <div className="md:col-span-2 space-y-6 md:space-y-8">
              <p className="text-lg md:text-xl text-foreground/90 leading-relaxed animate-slideInUp break-words" style={{animationDelay: '0.6s'}}>
                Hello! I&apos;m Dankhara Abhi, a passionate individual dedicated to providing high-quality digital services. My goal is to help you connect, create, and succeed in the digital world.
              </p>
              <div className="space-y-6">
                <div className="animate-slideInUp" style={{animationDelay: '0.8s'}}>
                  <div className="flex items-start space-x-3">
                    <Briefcase className="h-7 w-7 text-accent mt-1 shrink-0" />
                    <div>
                      <h4 className="font-headline text-xl md:text-2xl text-accent mb-2">My Services</h4>
                      <ul className="space-y-2">
                        {servicesList.map((service, index) => (
                           <li key={index} className="flex items-center space-x-3 text-foreground/80 animate-slideInUp break-words" style={{ animationDelay: `${1 + index * 0.2}s` }}>
                            {service.icon}
                            <span>{service.text}</span>
                          </li>
                        ))}
                      </ul>
                      <p className="text-foreground/80 mt-3 animate-slideInUp break-words" style={{ animationDelay: `${1 + servicesList.length * 0.2}s` }}>
                         Whether you need a stunning visual for your brand or technical help to get your project off the ground, I&apos;m here to support you.
                      </p>
                    </div>
                  </div>
                </div>
                <blockquote className="border-l-4 border-primary pl-4 py-2 italic text-foreground/70 bg-secondary/10 rounded-r-md animate-slideInUp hover:shadow-md transition-shadow break-words" style={{animationDelay: `${1.2 + servicesList.length * 0.2}s`}}>
                  &quot;Dankhara Abhi ek personal connect service platform chhe jethi tame saral rite mane message kari shako, rating aapi shako ane contact ma rahi shako. Hu sav thi ochha daam ma graphic, animation, ane digital help provide karu chu. Tamne koi help joiye? Toh message kari ne vato karie!&quot;
                </blockquote>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
