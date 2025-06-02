import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Sparkles } from 'lucide-react';

export interface NavItem {
  label: string;
  href?: string;
  onClick?: () => void;
}

interface SiteHeaderProps {
  navItems: NavItem[];
}

export function SiteHeader({ navItems }: SiteHeaderProps) {
  const siteTitle = "Abhi Connect";

  const renderNavItem = (item: NavItem, index: number, isMobile: boolean = false) => {
    if (item.onClick) {
      return (
        <Button
          key={index}
          variant="ghost"
          onClick={item.onClick}
          className={`font-headline text-lg ${isMobile ? 'w-full text-left justify-start' : ''}`}
        >
          {item.label}
        </Button>
      );
    }
    return (
      <Button
        key={index}
        asChild
        variant="ghost"
        className={`font-headline text-lg ${isMobile ? 'w-full text-left justify-start' : ''}`}
      >
        <Link href={item.href || '#'}>{item.label}</Link>
      </Button>
    );
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center justify-between mx-auto px-4">
        <Link href="/" className="flex items-center space-x-2">
          <Sparkles className="h-8 w-8 text-primary" />
          <span className="font-headline text-3xl font-bold text-primary">{siteTitle}</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-2">
          {navItems.map((item, index) => renderNavItem(item, index))}
        </nav>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col space-y-4 p-4">
                <Link href="/" className="flex items-center space-x-2 mb-4">
                   <Sparkles className="h-7 w-7 text-primary" />
                   <span className="font-headline text-2xl font-bold text-primary">{siteTitle}</span>
                </Link>
                {navItems.map((item, index) => renderNavItem(item, index, true))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
