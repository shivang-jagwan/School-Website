import { Container } from '@/components/ui/container';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default async function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-[radial-gradient(1200px_circle_at_20%_10%,rgba(202,164,59,0.18),transparent_45%),radial-gradient(900px_circle_at_70%_0%,rgba(10,42,102,0.22),transparent_45%)]">
        <Container className="py-16 md:py-24">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-background/70 px-3 py-1 text-xs font-semibold text-foreground/70">
                Admissions Open • 2026
              </div>
              <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-foreground md:text-5xl">
                Excellence in education.
                <span className="text-primary"> Future-ready careers.</span>
              </h1>
              <p className="mt-4 text-base leading-7 text-foreground/70">
                Professional, modern university website with programs, faculty, news, and a secure
                admin dashboard.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button href="/admissions">Apply Now</Button>
                <Button href="/academics" variant="outline">
                  Explore Programs
                </Button>
              </div>
              <div className="mt-6 grid grid-cols-3 gap-3">
                {[
                  { label: 'Students', value: '12k+' },
                  { label: 'Faculty', value: '450+' },
                  { label: 'Placements', value: '96%' },
                ].map((s) => (
                  <div key={s.label} className="rounded-2xl border border-foreground/10 bg-background/70 p-4">
                    <div className="text-2xl font-extrabold text-foreground">{s.value}</div>
                    <div className="text-xs font-semibold text-foreground/60">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero slider placeholder */}
            <Card className="overflow-hidden">
              <div className="h-72 bg-[linear-gradient(135deg,rgba(10,42,102,0.95),rgba(202,164,59,0.85))]" />
              <div className="p-6">
                <div className="text-sm font-bold">Campus Highlights</div>
                <p className="mt-2 text-sm text-foreground/70">
                  Hero slider will rotate key campus images and CTAs.
                </p>
                <div className="mt-4 flex gap-3">
                  <Link className="text-sm font-semibold text-primary hover:underline" href="/about">
                    Learn more
                  </Link>
                  <Link className="text-sm font-semibold text-foreground/70 hover:text-foreground" href="/gallery">
                    View gallery
                  </Link>
                </div>
              </div>
            </Card>
          </div>
        </Container>
      </section>

      {/* Programs highlight */}
      <section className="py-14">
        <Container>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-2xl font-extrabold">Programs</h2>
              <p className="mt-1 text-sm text-foreground/70">
                Departments and courses are managed from Admin.
              </p>
            </div>
            <Button href="/academics" variant="outline" className="w-full sm:w-auto">
              View all
            </Button>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {['Engineering', 'Management', 'Sciences'].map((name) => (
              <Card key={name} className="p-6 hover:border-foreground/20 transition-colors">
                <div className="text-sm font-bold">{name}</div>
                <p className="mt-2 text-sm text-foreground/70">
                  Modern curriculum with industry-aligned outcomes.
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* News & Events */}
      <section className="py-14 bg-muted">
        <Container>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-2xl font-extrabold">News & Events</h2>
              <p className="mt-1 text-sm text-foreground/70">
                Admin-managed content with SEO-friendly slugs.
              </p>
            </div>
            <Button href="/news" variant="outline" className="w-full sm:w-auto">
              Read more
            </Button>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="overflow-hidden">
                <div className="h-36 bg-primary/10" />
                <div className="p-5">
                  <div className="text-sm font-bold">Sample news headline {i}</div>
                  <p className="mt-2 text-sm text-foreground/70">
                    Updates and announcements from the campus.
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Testimonials */}
      <section className="py-14">
        <Container>
          <h2 className="text-2xl font-extrabold">Testimonials</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {['Alumni', 'Parent', 'Recruiter'].map((t) => (
              <Card key={t} className="p-6">
                <div className="text-sm font-bold">{t} Voice</div>
                <p className="mt-2 text-sm text-foreground/70">
                  “A professional platform and supportive faculty.”
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Admissions CTA */}
      <section className="py-14">
        <Container>
          <Card className="p-8 bg-[linear-gradient(135deg,rgba(10,42,102,0.95),rgba(10,42,102,0.70))] text-white border-transparent">
            <div className="grid gap-6 md:grid-cols-2 md:items-center">
              <div>
                <h2 className="text-2xl font-extrabold">Ready to apply?</h2>
                <p className="mt-2 text-sm text-white/85">
                  Submit your online admission form in minutes.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row md:justify-end">
                <Button href="/admissions" className="bg-accent text-accent-foreground hover:bg-accent/90">
                  Start Application
                </Button>
                <Button href="/contact" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                  Talk to us
                </Button>
              </div>
            </div>
          </Card>
        </Container>
      </section>
    </div>
  );
}
