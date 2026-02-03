'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { cn } from '@/lib/cn';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';

const nav = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/academics', label: 'Academics' },
  { href: '/admissions', label: 'Admissions' },
  { href: '/faculty', label: 'Faculty' },
  { href: '/news', label: 'News & Events' },
  { href: '/notices', label: 'Notices' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-foreground/10 bg-background/80 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="grid h-9 w-9 place-items-center rounded-xl bg-primary text-primary-foreground font-bold">
            U
          </div>
          <div className="leading-tight">
            <div className="text-sm font-extrabold text-foreground">University</div>
            <div className="text-xs text-foreground/60">School of Excellence</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {nav.map((item) => {
            const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'text-sm font-semibold text-foreground/70 hover:text-foreground transition-colors',
                  active && 'text-foreground',
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <Button href="/admissions" variant="outline">
            Apply Now
          </Button>
        </div>

        <button
          type="button"
          className="md:hidden rounded-xl border border-foreground/15 px-3 py-2 text-sm"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          Menu
        </button>
      </Container>

      {open && (
        <div className="md:hidden border-t border-foreground/10 bg-background">
          <Container className="py-3 flex flex-col gap-1">
            {nav.map((item) => {
              const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    'rounded-xl px-3 py-2 text-sm font-semibold text-foreground/70 hover:bg-muted hover:text-foreground',
                    active && 'bg-muted text-foreground',
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
            <div className="mt-2 flex gap-2">
              <Button href="/admissions" variant="outline" className="w-full">
                Apply Now
              </Button>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
