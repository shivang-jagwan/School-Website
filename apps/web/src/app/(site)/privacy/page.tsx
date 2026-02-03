import { Container } from '@/components/ui/container';
import { Card } from '@/components/ui/card';

export const metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy and data handling.',
};

export default function PrivacyPage() {
  return (
    <div>
      <section className="py-12 bg-muted">
        <Container>
          <h1 className="text-3xl font-extrabold">Privacy Policy</h1>
          <p className="mt-2 text-sm text-foreground/70 max-w-2xl">
            This is a placeholder privacy policy page. Update the content to match your institution’s
            requirements.
          </p>
        </Container>
      </section>

      <section className="py-12">
        <Container>
          <Card className="p-6">
            <div className="grid gap-4 text-sm text-foreground/70">
              <p>
                We collect information you provide via forms (e.g., admissions and contact) to respond
                to requests and process applications.
              </p>
              <p>
                Access to administrative systems is restricted and protected. Security controls include
                authentication and role-based access.
              </p>
              <p>
                For questions regarding privacy, contact the university administration.
              </p>
            </div>
          </Card>
        </Container>
      </section>
    </div>
  );
}
