import { Container } from '@/components/ui/container';
import { Card } from '@/components/ui/card';
import Link from 'next/link';
import { notices } from '@/content/site-data';

export const metadata = {
  title: 'Notices',
  description: 'Official notices and announcements.',
};

function formatDate(iso: string) {
  const d = new Date(iso);
  return d.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: '2-digit' });
}

export default function NoticesPage() {
  return (
    <div>
      <section className="py-12 bg-muted">
        <Container>
          <h1 className="text-3xl font-extrabold">Notices</h1>
          <p className="mt-2 text-sm text-foreground/70 max-w-2xl">
            Official circulars, announcements, and important updates.
          </p>
        </Container>
      </section>

      <section className="py-12">
        <Container>
          <div className="grid gap-4">
            {notices
              .slice()
              .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
              .map((n) => (
              <Link key={n.id} href={`/notices/${n.id}`} className="group">
                <Card className="p-5">
                  <div className="flex items-baseline justify-between gap-4">
                    <div className="text-base font-extrabold group-hover:underline">
                      {n.title}
                    </div>
                    <div className="text-xs text-foreground/60 shrink-0">
                      {formatDate(n.createdAt)}
                    </div>
                  </div>
                  <p className="mt-2 text-sm text-foreground/70 line-clamp-2">
                    {n.content}
                  </p>
                </Card>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
