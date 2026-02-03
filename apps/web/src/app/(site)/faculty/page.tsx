import { Container } from '@/components/ui/container';
import { Card } from '@/components/ui/card';
import Link from 'next/link';
import { faculty } from '@/content/site-data';

export const metadata = {
  title: 'Faculty',
  description: 'Meet our faculty members.',
};

export default function FacultyPage() {
  return (
    <div>
      <section className="py-12 bg-muted">
        <Container>
          <h1 className="text-3xl font-extrabold">Faculty</h1>
          <p className="mt-2 text-sm text-foreground/70 max-w-2xl">
            Experienced educators and mentors across departments.
          </p>
        </Container>
      </section>

      <section className="py-12">
        <Container className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {faculty.map((f) => (
            <Link key={f.id} href={`/faculty/${f.id}`} className="group">
              <Card className="p-5 h-full">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 overflow-hidden rounded-xl bg-muted border border-foreground/10">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={f.image}
                      alt={f.name}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm font-extrabold text-foreground group-hover:underline">
                      {f.name}
                    </div>
                    <div className="mt-1 text-xs text-foreground/70">{f.designation}</div>
                    {f.department?.name && (
                      <div className="mt-1 text-xs text-foreground/60">{f.department.name}</div>
                    )}
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </Container>
      </section>
    </div>
  );
}
