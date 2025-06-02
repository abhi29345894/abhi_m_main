import type React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Phone, Instagram, Facebook, MessageSquare } from 'lucide-react';
import Link from 'next/link';

export function ConnectSection() {
  const email = "sitequickpersonal@gmail.com";
  const phone = "8320446826";
  const instagramUser = "dankhara_abhi_";
  const instagramLink = `https://instagram.com/${instagramUser}`;
  const facebookId = "100031798394529"; 
  const facebookLink = `https://facebook.com/${facebookId}`;


  const contactMethods = [
    {
      name: 'Email Me',
      value: email,
      href: `mailto:${email}`,
      icon: <Mail className="h-6 w-6 text-primary" />,
      delay: "0.4s"
    },
    {
      name: 'WhatsApp',
      value: `+91 ${phone}`,
      href: `https://wa.me/91${phone}?text=Hello%20Abhi,%20I'd%20like%20to%20connect!`,
      icon: <MessageSquare className="h-6 w-6 text-primary" />, // Using MessageSquare for WhatsApp
      delay: "0.6s"
    },
    {
      name: 'Instagram',
      value: `@${instagramUser}`,
      href: instagramLink,
      icon: <Instagram className="h-6 w-6 text-primary" />,
      delay: "0.8s"
    },
    {
      name: 'Facebook',
      value: 'Dankhara Abhi', 
      href: facebookLink,
      icon: <Facebook className="h-6 w-6 text-primary" />,
      delay: "1.0s"
    },
  ];

  return (
    <section id="connect" className="py-20 md:py-28 animate-fadeIn section-mb">
      <div className="container mx-auto px-4">
        <Card className="shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:scale-[1.01]">
          <CardHeader className="bg-primary/10 p-6 md:p-8">
            <CardTitle className="font-headline text-3xl md:text-4xl text-primary text-center animate-slideInUp" style={{animationDelay: '0.2s'}}>
              Let&apos;s Connect
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 md:p-8">
            <p className="text-center text-lg text-foreground/80 mb-10 md:mb-12 animate-slideInUp" style={{animationDelay: '0.3s'}}>
              I&apos;m always excited to discuss new projects or help with your digital needs. Reach out through your preferred channel below:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 max-w-2xl mx-auto">
              {contactMethods.map((method) => (
                <div key={method.name} className="animate-slideInUp" style={{ animationDelay: method.delay }}>
                  <Button
                    asChild
                    variant="outline"
                    className="h-auto w-full py-4 px-6 text-left justify-start items-center space-x-4 rounded-lg shadow-md hover:shadow-lg hover:bg-accent/10 group transform hover:-translate-y-1 transition-all duration-300"
                  >
                    <Link href={method.href} target="_blank" rel="noopener noreferrer">
                      {method.icon}
                      <div className="flex flex-col">
                        <span className="font-headline text-lg text-foreground group-hover:text-accent transition-colors">
                          {method.name}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          {method.value}
                        </span>
                      </div>
                    </Link>
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
