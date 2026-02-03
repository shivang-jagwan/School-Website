import { Container } from '@/components/ui/container';
import { Card } from '@/components/ui/card';
import { getNoticeById, notices as noticeList } from '@/content/site-data';
import { notFound } from 'next/navigation';

type PageProps = {
  params: Promise<{ id: string }>;
};

export const dynamicParams = false;

export async function generateStaticParams() {
  return noticeList.map((n) => ({ id: n.id }));
}

function formatDate(iso: string) {
  const d = new Date(iso);
  return d.toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: '2-digit' });
}

export async function generateMetadata({ params }: PageProps) {
  const { id } = await params;
  const notice = getNoticeById(id);
  if (!notice) return { title: 'Notice' };
  return {
    title: `${notice.title} | Notice`,
    description: notice.content.slice(0, 160),
  };
}

export default async function NoticeDetailPage({ params }: PageProps) {
  const { id } = await params;

  const notice = getNoticeById(id);
  if (!notice) return notFound();

  const paragraphs = (notice.content || '').split(/\n\n+/).map((p) => p.trim()).filter(Boolean);

  return (
    <div>
      <section className="py-12 bg-muted">
        <Container>
          <div className="text-xs text-foreground/60">{formatDate(notice.createdAt)}</div>
          <h1 className="mt-2 text-3xl font-extrabold max-w-4xl">{notice.title}</h1>
        </Container>
      </section>

      <section className="py-12">
        <Container>
          <Card className="p-6">
            <div className="grid gap-4">
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
