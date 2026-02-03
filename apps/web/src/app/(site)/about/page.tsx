import { Container } from '@/components/ui/container';
import { Card } from '@/components/ui/card';

export const metadata = {
  title: 'About',
  description: 'Vision, mission, infrastructure, and achievements.',
};

export default function AboutPage() {
  return (
    <div>
      <section className="py-12 bg-muted">
        <Container>
          <h1 className="text-3xl font-extrabold">About the University</h1>
          <p className="mt-2 text-sm text-foreground/70 max-w-2xl">
            A professional, modern university website modeled on best practices for large institutions.
          </p>
        </Container>
      </section>

      <section className="py-12">
        <Container className="grid gap-6 md:grid-cols-2">
          <Card className="p-6">
            <div className="text-sm font-bold">Vision</div>
            <p className="mt-2 text-sm text-foreground/70">
              To be a globally recognized institution fostering innovation, ethics, and excellence.
            </p>
          </Card>
          <Card className="p-6">
            <div className="text-sm font-bold">Mission</div>
            <p className="mt-2 text-sm text-foreground/70">
              Deliver outcome-based education, enable research, and build industry-ready graduates.
            </p>
          </Card>
          <Card className="p-6">
            <div className="text-sm font-bold">Principal&apos;s Message</div>
            <p className="mt-2 text-sm text-foreground/70">
              We are committed to student success through mentorship, practical learning, and strong
              community culture.
            </p>
          </Card>
          <Card className="p-6">
            <div className="text-sm font-bold">Infrastructure</div>
            <p className="mt-2 text-sm text-foreground/70">
              Modern labs, library, sports facilities, and technology-enabled classrooms.
            </p>
          </Card>
        </Container>
      </section>

      <section className="py-12 bg-muted">
        <Container>
          <h2 className="text-2xl font-extrabold">Achievements</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {['Rankings', 'Placements', 'Research'].map((t) => (
              <Card key={t} className="p-6">
                <div className="text-sm font-bold">{t}</div>
                <p className="mt-2 text-sm text-foreground/70">
                  Highlights maintained by administration.
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
