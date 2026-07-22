import { useState, type FormEvent } from 'react';
import { Send } from 'lucide-react';
import { Button, Card, Container, Reveal, SectionHeading } from '@/components/ui';
import { SocialLinks } from '@/components/SocialLinks';
import { personalInfo } from '@/data/personal';
import { SECTION_IDS } from '@/constants';
import type { ContactFormData } from '@/types';

const initialForm: ContactFormData = {
  name: '',
  email: '',
  message: '',
};

export function Contact() {
  const [form, setForm] = useState<ContactFormData>(initialForm);
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('sending');

    window.setTimeout(() => {
      setStatus('sent');
      setForm(initialForm);
      window.setTimeout(() => setStatus('idle'), 2500);
    }, 800);
  };

  return (
    <section id={SECTION_IDS.CONTACT} className="section-padding" aria-labelledby="contact-heading">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Contact"
            title="Let’s build something together"
            description="Reach out for collaborations, freelance work, or full-time opportunities."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <Card className="h-full">
              <h3 className="text-lg font-semibold">Contact details</h3>
                  <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <p className="font-medium text-[var(--fg-subtle)]">Email</p>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="mt-1 inline-block font-semibold text-[var(--fg)] hover:text-primary"
                  >
                    {personalInfo.email}
                  </a>
                </li>
                <li>
                  <p className="font-medium text-[var(--fg-subtle)]">Phone</p>
                  <a
                    href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                    className="mt-1 inline-block font-semibold text-[var(--fg)] hover:text-primary"
                  >
                    {personalInfo.phone}
                  </a>
                </li>
                <li>
                  <p className="font-medium text-[var(--fg-subtle)]">Location</p>
                  <p className="mt-1 font-semibold text-[var(--fg)]">{personalInfo.location}</p>
                </li>
              </ul>
              <div className="mt-8">
                <p className="mb-3 text-sm font-medium text-[var(--fg-subtle)]">Social</p>
                <SocialLinks links={personalInfo.socials} />
              </div>
            </Card>
          </Reveal>

          <Reveal delay={0.08}>
            <Card>
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div>
                  <label htmlFor="contact-name" className="mb-2 block text-sm font-medium">
                    Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    required
                    value={form.name}
                    onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
                    className="h-11 w-full rounded-xl border border-[var(--card-border)] bg-[var(--bg)] px-4 text-sm outline-none transition focus:border-primary"
                    placeholder="Your name"
                    autoComplete="name"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="mb-2 block text-sm font-medium">
                    Email
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(event) =>
                      setForm((prev) => ({ ...prev, email: event.target.value }))
                    }
                    className="h-11 w-full rounded-xl border border-[var(--card-border)] bg-[var(--bg)] px-4 text-sm outline-none transition focus:border-primary"
                    placeholder="you@example.com"
                    autoComplete="email"
                  />
                </div>
                <div>
                  <label htmlFor="contact-message" className="mb-2 block text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={(event) =>
                      setForm((prev) => ({ ...prev, message: event.target.value }))
                    }
                    className="w-full resize-y rounded-xl border border-[var(--card-border)] bg-[var(--bg)] px-4 py-3 text-sm outline-none transition focus:border-primary"
                    placeholder="Tell me about your project…"
                  />
                </div>
                <Button type="submit" disabled={status === 'sending'} className="w-full sm:w-auto">
                  <Send className="h-4 w-4" />
                  {status === 'sending' ? 'Sending…' : status === 'sent' ? 'Message sent!' : 'Send'}
                </Button>
                <p className="sr-only" aria-live="polite">
                  {status === 'sent' ? 'Your message has been sent successfully.' : ''}
                </p>
              </form>
            </Card>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
