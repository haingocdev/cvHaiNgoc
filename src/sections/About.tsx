import { Target, UserRound } from 'lucide-react';
import { Card, Container, Reveal, SectionHeading } from '@/components/ui';
import { personalInfo } from '@/data/personal';
import { SECTION_IDS } from '@/constants';

export function About() {
  return (
    <section id={SECTION_IDS.ABOUT} className="section-padding" aria-labelledby="about-heading">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="About Me"
            title="Building mobile products people enjoy using"
            description="A brief look at my background, experience, and where I’m headed."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          <Reveal delay={0.05}>
            <Card className="h-full text-center">
              <p className="text-5xl font-extrabold tracking-tight text-primary">
                {personalInfo.yearsOfExperience}
              </p>
              <p className="mt-2 text-sm font-medium text-[var(--fg-muted)]">Years of Experience</p>
              <p className="mt-4 text-sm leading-relaxed text-[var(--fg-muted)]">
                Shipping production Flutter and React Native apps across workforce, fintech, and
                commerce domains.
              </p>
            </Card>
          </Reveal>

          <Reveal delay={0.1}>
            <Card className="h-full">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <UserRound className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold">Introduction</h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--fg-muted)]">
                {personalInfo.about}
              </p>
            </Card>
          </Reveal>

          <Reveal delay={0.15}>
            <Card className="h-full">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <Target className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold">Career Objective</h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--fg-muted)]">
                {personalInfo.careerObjective}
              </p>
            </Card>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
