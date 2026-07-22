import { Card, Container, Reveal, SectionHeading } from '@/components/ui';
import { education } from '@/data/education';
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
            description="Formal study and intensive training that shaped my engineering approach."
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
      </Container>
    </section>
  );
}
