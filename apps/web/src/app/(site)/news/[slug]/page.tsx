import { Container } from '@/components/ui/container';
import { Card } from '@/components/ui/card';
import { getNewsBySlug, news as newsList } from '@/content/site-data';
import { notFound } from 'next/navigation';

type PageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export async function generateStaticParams() {
  return newsList.map((n) => ({ slug: n.slug }));
}

function formatDate(iso: string) {
  const d = new Date(iso);
  return d.toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: '2-digit' });
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const item = getNewsBySlug(slug);
  if (!item) return { title: 'News' };
  return {
    title: `${item.title} | News`,
    description: item.content?.slice(0, 160) ?? 'News details.',
  };
}

export default async function NewsDetailPage({ params }: PageProps) {
  const { slug } = await params;

  const item = getNewsBySlug(slug);
  if (!item) return notFound();

  const paragraphs = (item.content || '').split(/\n\n+/).map((p) => p.trim()).filter(Boolean);

  return (
    <div>
      <section className="py-12 bg-muted">
        <Container>
          <div className="text-xs text-foreground/60">{formatDate(item.createdAt)}</div>
          <h1 className="mt-2 text-3xl font-extrabold max-w-4xl">{item.title}</h1>
        </Container>
      </section>

      <section className="py-12">
        <Container>
          <Card className="p-6">
            <div className="prose prose-slate max-w-none">
              {paragraphs.length > 0 ? (
                paragraphs.map((p, idx) => (
                  <p key={idx} className="text-sm text-foreground/80 leading-7">
                    {p}
                  </p>
                ))
              ) : (
                <p className="text-sm text-foreground/70">—</p>
              )}
            </div>
          </Card>
        </Container>
      </section>
    </div>
  );
}
