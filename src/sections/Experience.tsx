import { Container, Reveal, SectionHeading } from '@/components/ui';
import { experiences } from '@/data/experience';
import { ANIMATION, SECTION_IDS } from '@/constants';
import { cn } from '@/utils';

export function Experience() {
  return (
    <section
      id={SECTION_IDS.EXPERIENCE}
      className="section-padding"
      aria-labelledby="experience-heading"
    >
      <Container className="max-w-3xl">
        <Reveal>
          <SectionHeading
            eyebrow="Experience"
            title=""
            // description="A timeline of roles focused on Flutter, React Native, and cross-platform delivery."
          />
        </Reveal>

        <ol className="relative mt-12 ml-1 border-l border-[var(--card-border)] sm:ml-2">
          {experiences.map((item, index) => (
            <li key={item.id} className="relative">
              <span
                className="absolute top-1.5 -left-[5px] h-2.5 w-2.5 rounded-full border-2 border-primary bg-[var(--bg)]"
                aria-hidden
              />

              <Reveal
                delay={index * ANIMATION.STAGGER}
                className={cn(
                  'border-b border-[var(--card-border)] py-6 pl-8 sm:pl-10',
                  index === experiences.length - 1 && 'border-b-0 pb-0',
                )}
              >
                <time className="text-xs font-medium text-primary sm:text-sm">{item.duration}</time>
                <h3 className="mt-2 text-lg font-bold tracking-tight text-[var(--fg)] sm:text-xl">
                  {item.company}
                </h3>
                <p className="mt-1 text-sm text-[var(--fg-muted)] sm:text-base">{item.position}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
