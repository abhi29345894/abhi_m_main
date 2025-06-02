import type React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Phone, Instagram, Facebook } from 'lucide-react';
import Link from 'next/link';

export function ConnectSection() {
  const email = "sitequickpersonal@gmail.com";
  const phone = "8320446826";
  const instagramUser = "dankhara_abhi_";
  const instagramLink = `https://instagram.com/${instagramUser}`;
  // Facebook link from site-footer is '#', so using a placeholder. Update with actual ID/link.
  const facebookId = "YourFacebookProfile"; // Or a full URL
  const facebookLink = `https://facebook.com/${facebookId}`;


  const contactMethods = [
    {
      name: 'Email',
      value: email,
      href: `mailto:${email}`,
      icon: <Mail className="h-6 w-6 text-primary" />,
    },
    {
      name: 'Phone / WhatsApp',
      value: phone,
      href: `https://wa.me/${phone}`, // Or `tel:${phone}` for direct call
      icon: <Phone className="h-6 w-6 text-primary" />,
    },
    {
      name: 'Instagram',
      value: `@${instagramUser}`,
      href: instagramLink,
      icon: <Instagram className="h-6 w-6 text-primary" />,
    },
    {
      name: 'Facebook',
      value: facebookId, // Display the ID or a generic "Facebook"
      href: facebookLink, // Update with actual Facebook profile link
      icon: <Facebook className="h-6 w-6 text-primary" />,
    },
  ];

  return (
    <section id="connect" className="py-16 md:py-24 animate-fadeIn section-mb">
      <div className="container mx-auto px-4">
        <Card className="shadow-xl hover:shadow-2xl transition-shadow duration-300">
          <CardHeader className="bg-primary/10 p-6">
            <CardTitle className="font-headline text-3xl text-primary text-center">Connect With Me</CardTitle>
          </CardHeader>
          <CardContent className="p-6 md:p-8">
            <p className="text-center text-lg text-foreground/80 mb-8">
              You can reach out to me through any of the following channels:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contactMethods.map((method) => (
                <Button
                  key={method.name}
                  asChild
                  variant="outline"
                  className="h-auto py-4 px-6 text-left justify-start items-center space-x-4 hover:bg-accent/10 group"
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
              ))}
            </div>
             {facebookId === "YourFacebookProfile" && (
              <p className="text-center text-sm text-muted-foreground mt-8">
                Note: Please update the Facebook ID/link in the code.
              </p>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
