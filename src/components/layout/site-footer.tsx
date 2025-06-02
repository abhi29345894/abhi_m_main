import Link from 'next/link';
import { Instagram, Facebook, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function SiteFooter() {
  const email = "sitequickpersonal@gmail.com";
  const phone = "8320446826";
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'Instagram', href: 'https://instagram.com/dankhara_abhi_?igshid=MzRlODBiNWFlZA==', icon: <Instagram className="h-5 w-5" /> },
    { name: 'Facebook', href: '#', icon: <Facebook className="h-5 w-5" /> }, // Replace # with actual Facebook link
    { name: 'WhatsApp', href: `https://wa.me/${phone}`, icon: <Phone className="h-5 w-5" /> },
  ];

  return (
    <footer className="border-t border-border/40 bg-background/95 py-8">
      <div className="container mx-auto px-4 text-center text-muted-foreground">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm">
            <p>&copy; {currentYear} Dankhara Abhi. All rights reserved.</p>
            <p>
              Contact: <a href={`mailto:${email}`} className="hover:text-primary">{email}</a> | Phone: <a href={`tel:${phone}`} className="hover:text-primary">{phone}</a>
            </p>
          </div>
          <div className="flex space-x-4">
            {socialLinks.map((link) => (
              <Button key={link.name} variant="ghost" size="icon" asChild>
                <Link href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.name}>
                  {link.icon}
                </Link>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
