import { Container } from '@/components/ui/container';
import { Card } from '@/components/ui/card';
import { gallery } from '@/content/site-data';

export const metadata = {
  title: 'Gallery',
  description: 'Photos and videos from campus life.',
};

export default function GalleryPage() {
  const items = gallery;

  return (
    <div>
      <section className="py-12 bg-muted">
        <Container>
          <h1 className="text-3xl font-extrabold">Gallery</h1>
          <p className="mt-2 text-sm text-foreground/70 max-w-2xl">
            A glimpse of campus life, events, and student activities.
          </p>
        </Container>
      </section>

      <section className="py-12">
        <Container>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((g) => (
              <Card key={g.id} className="overflow-hidden">
                {g.type === 'IMAGE' ? (
                  <div className="aspect-video bg-muted">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={g.imageUrl}
                      alt={g.title ?? 'Gallery image'}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                ) : (
                  <div className="aspect-video grid place-items-center bg-muted">
                    <a
                      href={g.imageUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm font-semibold hover:underline"
                    >
                      Open video
                    </a>
                  </div>
                )}
                <div className="p-4">
                  <div className="text-sm font-bold">{g.title ?? (g.type === 'IMAGE' ? 'Photo' : 'Video')}</div>
                  <div className="mt-1 text-xs text-foreground/60">{new Date(g.createdAt).toLocaleDateString()}</div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
