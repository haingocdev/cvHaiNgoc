import { Badge, Card, Container, Reveal, SectionHeading } from '@/components/ui';
import { experiences } from '@/data/experience';
import { ANIMATION, SECTION_IDS } from '@/constants';

export function Experience() {
  return (
    <section
      id={SECTION_IDS.EXPERIENCE}
      className="section-padding"
      aria-labelledby="experience-heading"
    >
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Experience"
            title="Where I’ve shipped and grown"
            description="A timeline of roles focused on Flutter, React Native, and cross-platform delivery."
          />
        </Reveal>

        <ol className="relative mt-12 space-y-8 before:absolute before:top-2 before:bottom-2 before:left-4 before:w-px before:bg-[var(--card-border)] md:before:left-1/2 md:before:-translate-x-1/2">
          {experiences.map((item, index) => {
            const isLeft = index % 2 === 0;
            return (
              <li key={item.id} className="relative">
                <span className="absolute top-6 left-4 z-10 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-primary bg-[var(--bg)] md:left-1/2" />
                <Reveal
                  delay={index * ANIMATION.STAGGER}
                  direction={isLeft ? 'left' : 'right'}
                  className={`md:w-[calc(50%-2rem)] ${
                    isLeft ? 'md:mr-auto md:pr-4' : 'md:ml-auto md:pl-4'
                  } ml-10 md:ml-0`}
                >
                  <Card hover>
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <h3 className="text-lg font-semibold">{item.position}</h3>
                        <p className="mt-1 text-sm font-medium text-primary">{item.company}</p>
                      </div>
                      <span className="rounded-lg bg-primary/10 px-2.5 py-1 text-xs font-semibold text-primary">
                        {item.duration}
                      </span>
                    </div>
                    <p className="mt-4 text-sm leading-relaxed text-[var(--fg-muted)]">
                      {item.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {item.technologies.map((tech) => (
                        <Badge key={tech}>{tech}</Badge>
                      ))}
                    </div>
                  </Card>
                </Reveal>
              </li>
            );
          })}
        </ol>
      </Container>
    </section>
  );
}
