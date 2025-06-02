import type React from 'react';
import { SiteHeader, type NavItem } from './site-header';
import { SiteFooter } from './site-footer';

interface AppLayoutProps {
  children: React.ReactNode;
  navItems: NavItem[];
}

export function AppLayout({ children, navItems }: AppLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader navItems={navItems} />
      <main className="flex-grow container mx-auto px-4 py-8">
        {children}
      </main>
      <SiteFooter />
    </div>
  );
}
