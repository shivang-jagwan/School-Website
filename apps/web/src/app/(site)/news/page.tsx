import { Container } from '@/components/ui/container';
import { Card } from '@/components/ui/card';
import Link from 'next/link';
import { news } from '@/content/site-data';

export const metadata = {
  title: 'News & Events',
  description: 'Latest updates from the university.',
};

function formatDate(iso: string) {
  const d = new Date(iso);
  return d.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: '2-digit' });
}

export default function NewsPage() {
  return (
    <div>
      <section className="py-12 bg-muted">
        <Container>
          <h1 className="text-3xl font-extrabold">News & Events</h1>
          <p className="mt-2 text-sm text-foreground/70 max-w-2xl">
            Announcements, activities, and campus updates.
          </p>
        </Container>
      </section>

      <section className="py-12">
        <Container>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {news
              .slice()
              .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
              .map((n) => (
              <Link key={n.id} href={`/news/${n.slug}`} className="group">
                <Card className="p-5 h-full">
                  <div className="text-xs text-foreground/60">{formatDate(n.createdAt)}</div>
                  <div className="mt-2 text-base font-extrabold group-hover:underline">
                    {n.title}
                  </div>
                  <div className="mt-3 text-xs text-foreground/60">Read more →</div>
                </Card>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
