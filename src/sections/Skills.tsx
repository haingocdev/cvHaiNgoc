import { motion } from 'framer-motion';
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
            title="Tools and technologies I work with"
            description="Grouped by focus area — Flutter, React Native, state management, backend, and tooling."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {skillCategories.map((category, index) => (
            <Reveal key={category.id} delay={index * ANIMATION.STAGGER}>
              <Card hover className="h-full">
                <h3 className="text-lg font-semibold text-[var(--fg)]">{category.title}</h3>
                <ul className="mt-5 space-y-4">
                  {category.skills.map((skill) => (
                    <li key={skill.name}>
                      <div className="mb-2 flex items-center justify-between gap-3">
                        <Badge>{skill.name}</Badge>
                        <span className="text-xs font-medium text-[var(--fg-muted)]">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 overflow-hidden rounded-full bg-[var(--bg-muted)]">
                        <motion.div
                          className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true, amount: 0.6 }}
                          transition={{ duration: 0.8, ease: ANIMATION.EASE }}
                        />
                      </div>
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
