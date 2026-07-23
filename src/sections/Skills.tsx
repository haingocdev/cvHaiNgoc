import { Badge, Card, Container, Reveal, SectionHeading } from '@/components/ui';
import { skillCategories } from '@/data/skills';
import { ANIMATION, SECTION_IDS } from '@/constants';

export function Skills() {
  return (
    <section id={SECTION_IDS.SKILLS} className="section-padding" aria-labelledby="skills-heading">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Skills"
            title="Tools and technologies"
            description="Languages, frameworks, and tooling I use to ship production mobile and web apps."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <Reveal key={category.id} delay={index * ANIMATION.STAGGER}>
              <Card hover className="h-full">
                <h3 className="text-base font-semibold text-[var(--fg)]">{category.title}</h3>
                <ul className="mt-4 flex flex-wrap gap-2" aria-label={category.title}>
                  {category.skills.map((skill) => (
                    <li key={skill}>
                      <Badge>{skill}</Badge>
                    </li>
                  ))}
                </ul>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
