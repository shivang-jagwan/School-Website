import { Container } from '@/components/ui/container';
import { Card } from '@/components/ui/card';
import { courses } from '@/content/site-data';
import { AdmissionsForm } from '@/components/forms/AdmissionsForm';

export const metadata = {
  title: 'Admissions',
  description: 'Apply online for admissions.',
};

export default function AdmissionsPage() {
  const options = courses.map((c) => ({ id: c.id, title: c.title }));

  return (
    <div>
      <section className="py-12 bg-muted">
        <Container>
          <h1 className="text-3xl font-extrabold">Admissions</h1>
          <p className="mt-2 text-sm text-foreground/70 max-w-2xl">
            Submit your application. Our admissions team will reach out.
          </p>
        </Container>
      </section>

      <section className="py-12">
        <Container className="grid gap-6 md:grid-cols-3">
          <Card className="p-6 md:col-span-1">
            <div className="text-sm font-bold">Eligibility</div>
            <ul className="mt-3 grid gap-2 text-sm text-foreground/70 list-disc pl-5">
              <li>Minimum qualifying exam as per program requirements</li>
              <li>Valid ID proof</li>
              <li>Program-specific prerequisites (if any)</li>
            </ul>
            <div className="mt-6 text-sm font-bold">Fee & Scholarships</div>
            <p className="mt-2 text-sm text-foreground/70">
              Fees vary by program. Scholarships available for merit and need.
            </p>
          </Card>

          <Card className="p-6 md:col-span-2">
            <div className="text-sm font-bold">Application Form</div>
            <AdmissionsForm courses={options} />
          </Card>
        </Container>
      </section>
    </div>
  );
}
