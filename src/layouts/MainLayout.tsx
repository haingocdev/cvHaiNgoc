import type { ReactNode } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { BackToTop, ScrollProgress } from '@/components/ui';

interface MainLayoutProps {
  children: ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen">
      <ScrollProgress />
      <Navbar />
      <main>{children}</main>
      <Footer />
      <BackToTop />
    </div>
  );
}
