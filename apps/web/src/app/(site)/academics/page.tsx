import { Container } from '@/components/ui/container';
import { Card } from '@/components/ui/card';
import Link from 'next/link';
import { departments } from '@/content/site-data';

export const metadata = {
  title: 'Academics',
  description: 'Departments and programs.',
};

export default function AcademicsPage() {
  return (
    <div>
      <section className="py-12 bg-muted">
        <Container>
          <h1 className="text-3xl font-extrabold">Academics</h1>
          <p className="mt-2 text-sm text-foreground/70 max-w-2xl">
            Explore departments and courses.
          </p>
        </Container>
      </section>

      <section className="py-12">
        <Container className="grid gap-4">
          {departments.map((d) => (
            <Card key={d.id} className="p-6">
              <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                <div>
                  <div className="text-lg font-extrabold">{d.name}</div>
                  <p className="mt-1 text-sm text-foreground/70 max-w-3xl">{d.description}</p>
                </div>
                <div className="text-xs font-semibold text-foreground/60">
                  {d.courses.length} courses
                </div>
              </div>

              {d.courses.length > 0 && (
                <div className="mt-4 grid gap-2 md:grid-cols-2">
                  {d.courses.map((c) => (
                    <Link
                      key={c.id}
                      href={`/academics/courses/${c.id}`}
                      className="rounded-xl border border-foreground/10 px-4 py-3 hover:border-foreground/20 transition-colors"
                    >
                      <div className="text-sm font-bold text-foreground">{c.title}</div>
                      <div className="mt-1 text-xs text-foreground/60">Duration: {c.duration}</div>
                    </Link>
                  ))}
                </div>
              )}
            </Card>
          ))}
        </Container>
      </section>
    </div>
  );
}
