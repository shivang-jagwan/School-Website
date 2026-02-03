import { Container } from '@/components/ui/container';
import { Card } from '@/components/ui/card';
import { courses, getCourseById } from '@/content/site-data';
import { notFound } from 'next/navigation';

type PageProps = {
  params: Promise<{ id: string }>;
};

export const dynamicParams = false;

export async function generateStaticParams() {
  return courses.map((c) => ({ id: c.id }));
}

export async function generateMetadata({ params }: PageProps) {
  const { id } = await params;
  const course = getCourseById(id);
  if (!course) return { title: 'Course' };
  return {
    title: `${course.title} | Course`,
    description: course.description ?? 'Course details.',
  };
}

export default async function CourseDetailPage({ params }: PageProps) {
  const { id } = await params;
  const course = getCourseById(id);
  if (!course) return notFound();

  return (
    <div>
      <section className="py-12 bg-muted">
        <Container>
          <h1 className="text-3xl font-extrabold">{course.title}</h1>
          <p className="mt-2 text-sm text-foreground/70">Duration: {course.duration}</p>
        </Container>
      </section>

      <section className="py-12">
        <Container>
          <Card className="p-6">
            <div className="grid gap-4">
              <div>
                <div className="text-sm font-bold">Overview</div>
                <p className="mt-1 text-sm text-foreground/70">{course.description || '—'}</p>
              </div>
            </div>
          </Card>
        </Container>
      </section>
    </div>
  );
}
