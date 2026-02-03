import { Container } from '@/components/ui/container';
import { Card } from '@/components/ui/card';
import { ContactForm } from '@/components/forms/ContactForm';

export const metadata = {
  title: 'Contact',
  description: 'Get in touch with the university.',
};

export default function ContactPage() {
  return (
    <div>
      <section className="py-12 bg-muted">
        <Container>
          <h1 className="text-3xl font-extrabold">Contact</h1>
          <p className="mt-2 text-sm text-foreground/70 max-w-2xl">
            Have a question? Send us a message and we’ll respond shortly.
          </p>
        </Container>
      </section>

      <section className="py-12">
        <Container className="grid gap-6 md:grid-cols-3">
          <Card className="p-6 md:col-span-1">
            <div className="text-sm font-bold">Office</div>
            <div className="mt-2 text-sm text-foreground/70 grid gap-1">
              <div>123 University Road</div>
              <div>City, State</div>
              <div>+91 00000 00000</div>
              <div>info@university.edu</div>
            </div>

            <div className="mt-6 text-sm font-bold">Hours</div>
            <div className="mt-2 text-sm text-foreground/70 grid gap-1">
              <div>Mon–Fri: 9:00 AM – 5:00 PM</div>
              <div>Sat: 9:00 AM – 1:00 PM</div>
              <div>Sun: Closed</div>
            </div>
          </Card>

          <Card className="p-6 md:col-span-2">
            <div className="text-sm font-bold">Send a message</div>
            <ContactForm />
          </Card>
        </Container>
      </section>
    </div>
  );
}
