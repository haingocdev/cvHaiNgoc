import { Badge, Card, Container, Reveal, SectionHeading } from '@/components/ui';
import { education } from '@/data/education';
import { certificates } from '@/data/certificates';
import { ANIMATION, SECTION_IDS } from '@/constants';

export function Education() {
  return (
    <section
      id={SECTION_IDS.EDUCATION}
      className="section-padding"
      aria-labelledby="education-heading"
    >
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Education"
            title="Academic foundation"
            description="Formal study and credentials that shaped my engineering approach."
          />
        </Reveal>

        <ol className="relative mt-12 space-y-8 before:absolute before:top-3 before:bottom-3 before:left-4 before:w-px before:bg-[var(--card-border)]">
          {education.map((item, index) => (
            <li key={item.id} className="relative ml-10">
              <span className="absolute top-6 -left-10 z-10 h-3 w-3 translate-x-[0.3rem] rounded-full border-2 border-secondary bg-[var(--bg)]" />
              <Reveal delay={index * ANIMATION.STAGGER}>
                <Card hover>
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="text-lg font-semibold">{item.degree}</h3>
                      <p className="mt-1 text-sm font-medium text-secondary">{item.school}</p>
                    </div>
                    <span className="rounded-lg bg-secondary/10 px-2.5 py-1 text-xs font-semibold text-secondary">
                      {item.duration}
                    </span>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-[var(--fg-muted)]">
                    {item.description}
                  </p>
                </Card>
              </Reveal>
            </li>
          ))}
        </ol>

        {certificates.length > 0 ? (
          <div className="mt-14">
            <Reveal>
              <h3 className="text-sm font-semibold tracking-[0.14em] text-[var(--fg)] uppercase">
                Certificates
              </h3>
            </Reveal>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {certificates.map((certificate, index) => (
                <Reveal key={certificate.id} delay={index * ANIMATION.STAGGER}>
                  <Card hover>
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="text-sm font-semibold leading-snug">{certificate.name}</h4>
                      <Badge>{certificate.year}</Badge>
                    </div>
                    <p className="mt-2 text-xs text-[var(--fg-muted)]">{certificate.issuer}</p>
                  </Card>
                </Reveal>
              ))}
            </div>
          </div>
        ) : null}
      </Container>
    </section>
  );
}
