import type { ReactNode } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { PageTransition } from '@/components/layout/PageTransition';

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-dvh bg-background">
      <Navbar />
      <main className="min-h-[60vh]">
        <PageTransition>{children}</PageTransition>
      </main>
      <Footer />
    </div>
  );
}
