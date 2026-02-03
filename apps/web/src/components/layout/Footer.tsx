import Link from 'next/link';
import { Container } from '@/components/ui/container';

const links = [
  { href: '/about', label: 'About' },
  { href: '/academics', label: 'Academics' },
  { href: '/admissions', label: 'Admissions' },
  { href: '/news', label: 'News & Events' },
  { href: '/notices', label: 'Notices' },
  { href: '/contact', label: 'Contact' },
];

export function Footer() {
  return (
    <footer className="mt-16 border-t border-foreground/10 bg-muted">
      <Container className="py-10 grid gap-8 md:grid-cols-3">
        <div>
          <div className="text-base font-extrabold text-foreground">University</div>
          <p className="mt-2 text-sm text-foreground/70">
            A modern, student-first institution focused on excellence in education, research, and
            impact.
          </p>
        </div>
        <div>
          <div className="text-sm font-bold text-foreground">Quick Links</div>
          <ul className="mt-3 grid gap-2">
            {links.map((l) => (
              <li key={l.href}>
                <Link className="text-sm text-foreground/70 hover:text-foreground" href={l.href}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="text-sm font-bold text-foreground">Contact</div>
          <div className="mt-3 text-sm text-foreground/70 grid gap-1">
            <div>123 University Road, City, State</div>
            <div>+91 00000 00000</div>
            <div>info@university.edu</div>
          </div>
        </div>
      </Container>
      <div className="border-t border-foreground/10">
        <Container className="py-4 text-xs text-foreground/60 flex items-center justify-between">
          <div>© {new Date().getFullYear()} University. All rights reserved.</div>
          <div className="flex items-center gap-3">
            <Link href="/privacy" className="hover:text-foreground">
              Privacy
            </Link>
          </div>
        </Container>
      </div>
    </footer>
  );
}
