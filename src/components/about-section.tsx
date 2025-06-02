import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { UserCircle2, Briefcase, Sparkles } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 animate-fadeIn section-mb">
      <div className="container mx-auto px-4">
        <Card className="overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
          <CardHeader className="bg-primary/10 p-8">
            <div className="flex items-center space-x-4">
              <UserCircle2 className="h-12 w-12 text-primary" />
              <CardTitle className="font-headline text-4xl text-primary">About Me - Dankhara Abhi</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="p-8 grid md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-1 flex justify-center">
              <div className="flex flex-col items-center justify-center h-[250px] w-[250px] bg-primary/10 rounded-full shadow-lg border-4 border-secondary p-6 group transition-all duration-300 hover:shadow-primary/20 hover:border-primary/50">
                <Sparkles className="h-24 w-24 text-primary transition-transform duration-300 group-hover:scale-110 group-hover:animate-pulse" />
                <p className="mt-4 font-headline text-xl text-primary transition-opacity duration-300 group-hover:opacity-80">Abhi Connect</p>
              </div>
            </div>
            <div className="md:col-span-2 space-y-6">
              <p className="text-lg text-foreground/90 leading-relaxed">
                Hello! I&apos;m Dankhara Abhi, a passionate individual dedicated to providing high-quality digital services. My goal is to help you connect, create, and succeed in the digital world.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Briefcase className="h-6 w-6 text-accent mt-1 shrink-0" />
                  <div>
                    <h4 className="font-headline text-xl text-accent">My Services</h4>
                    <p className="text-foreground/80">
                      I offer a range of services including custom website development, captivating graphic design, interactive 3D animations, and general digital assistance. Whether you need a stunning visual for your brand or technical help to get your project off the ground, I&apos;m here to support you.
                    </p>
                  </div>
                </div>
                <blockquote className="border-l-4 border-primary pl-4 italic text-foreground/70">
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
