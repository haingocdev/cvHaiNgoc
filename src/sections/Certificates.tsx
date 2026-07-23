import { Badge, Card, Container, Reveal, SectionHeading } from '@/components/ui';
import { certificates } from '@/data/certificates';
import { ANIMATION, SECTION_IDS } from '@/constants';

export function Certificates() {
  return (
    <section
      id={SECTION_IDS.CERTIFICATES}
      className="section-padding"
      aria-labelledby="certificates-heading"
    >
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Certificates"
            title="Credentials and continuous learning"
            description="Recognitions that reflect my commitment to mobile craft and modern web stacks."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {certificates.map((certificate, index) => (
            <Reveal key={certificate.id} delay={index * ANIMATION.STAGGER}>
              <Card hover>
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-sm font-semibold leading-snug">{certificate.name}</h3>
                  <Badge>{certificate.year}</Badge>
                </div>
                <p className="mt-2 text-xs text-[var(--fg-muted)]">{certificate.issuer}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
