
'use client';

import { useRef } from 'react';
import { AppLayout } from '@/components/layout/app-layout';
import { HomeSection } from '@/components/home-section';
import { AboutSection } from '@/components/about-section';
import { PackagesSection } from '@/components/packages-section';
import { ConnectSection } from '@/components/connect-section';


export default function LandingPage() {
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const packagesRef = useRef<HTMLDivElement>(null);
  const connectRef = useRef<HTMLDivElement>(null);

  const scrollToRef = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const navItems = [
    { label: 'Home', onClick: () => scrollToRef(homeRef) },
    { label: 'About', onClick: () => scrollToRef(aboutRef) },
    { label: 'Packages', onClick: () => scrollToRef(packagesRef) },
    { label: 'Connect', onClick: () => scrollToRef(connectRef) },
  ];

  return (
    <AppLayout navItems={navItems}>
      <div ref={homeRef} className="pt-5"> {/* Add padding top to account for fixed header */}
        <HomeSection onContactClick={() => scrollToRef(connectRef)} />
      </div>
      <div ref={aboutRef} className="pt-20 -mt-20"> {/* Offset for fixed header */}
        <AboutSection />
      </div>
      <div ref={packagesRef} className="pt-20 -mt-20"> {/* Offset for fixed header */}
        <PackagesSection />
      </div>
      <div ref={connectRef} className="pt-20 -mt-20"> {/* Offset for fixed header */}
        <ConnectSection />
      </div>
    </AppLayout>
  );
}

