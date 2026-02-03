import { Container } from '@/components/ui/container';
import { Card } from '@/components/ui/card';
import { faculty as facultyList, getFacultyById } from '@/content/site-data';
import { notFound } from 'next/navigation';

type PageProps = {
  params: Promise<{ id: string }>;
};

export const dynamicParams = false;

export async function generateStaticParams() {
  return facultyList.map((f) => ({ id: f.id }));
}

export async function generateMetadata({ params }: PageProps) {
  const { id } = await params;
  const f = getFacultyById(id);
  if (!f) return { title: 'Faculty Member' };
  return {
    title: `${f.name} | Faculty`,
    description: `${f.designation}${f.department?.name ? `, ${f.department.name}` : ''}`,
  };
}

export default async function FacultyDetailPage({ params }: PageProps) {
  const { id } = await params;

  const faculty = getFacultyById(id);
  if (!faculty) return notFound();

  return (
    <div>
      <section className="py-12 bg-muted">
        <Container>
          <h1 className="text-3xl font-extrabold">{faculty.name}</h1>
          <p className="mt-2 text-sm text-foreground/70">
            {faculty.designation}
            {faculty.department?.name ? ` • ${faculty.department.name}` : ''}
          </p>
        </Container>
      </section>

      <section className="py-12">
        <Container className="grid gap-6 md:grid-cols-3">
          <Card className="p-6 md:col-span-1">
            <div className="h-64 w-full overflow-hidden rounded-2xl bg-muted border border-foreground/10">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={faculty.image}
                alt={faculty.name}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="mt-4 text-sm font-bold">Designation</div>
            <div className="mt-1 text-sm text-foreground/70">{faculty.designation}</div>
            {faculty.department?.name && (
              <>
                <div className="mt-4 text-sm font-bold">Department</div>
                <div className="mt-1 text-sm text-foreground/70">{faculty.department.name}</div>
              </>
            )}
          </Card>

          <Card className="p-6 md:col-span-2">
            <div className="text-sm font-bold">Biography</div>
            <p className="mt-2 text-sm text-foreground/70 whitespace-pre-line">
              {faculty.bio || '—'}
            </p>
          </Card>
        </Container>
      </section>
    </div>
  );
}
