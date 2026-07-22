import { Link } from 'react-router-dom';
import { ArrowRight, Download, Mail, MapPin, Phone } from 'lucide-react';
import { Badge, Button, Card, Container, LazyImage } from '@/components/ui';
import { SEO } from '@/components/SEO';
import { SocialLinks } from '@/components/SocialLinks';
import { personalInfo } from '@/data/personal';
import { skillCategories } from '@/data/skills';
import { experiences } from '@/data/experience';
import { projects } from '@/data/projects';
import { education } from '@/data/education';
import { ROUTES } from '@/constants';

const highlightSkills = skillCategories.flatMap((category) =>
  category.skills.slice(0, category.id === 'tools' ? 3 : 4).map((skill) => skill.name),
);

const topProjects = projects.slice(0, 3);

export function SummaryPage() {
  return (
    <>
      <SEO
        title="Dang Ngoc Hai | Quick Summary"
        description="Short overview of Dang Ngoc Hai — Mobile Developer with 4 years of experience in Flutter and React Native."
      />

      <section className="section-padding pt-28 sm:pt-32">
        <Container className="max-w-4xl">
          <div className="mb-8 flex flex-wrap items-center justify-between gap-3">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              Quick Summary
            </p>
            <Link
              to={ROUTES.HOME}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--fg-muted)] transition-colors hover:text-primary"
            >
              Full portfolio
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <Card className="overflow-hidden p-0">
            {/* Header */}
            <div className="border-b border-[var(--card-border)] bg-[var(--bg-muted)]/50 p-6 sm:p-8">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
                <LazyImage
                  src={personalInfo.avatar}
                  alt={`${personalInfo.name} avatar`}
                  className="h-24 w-24 shrink-0 rounded-2xl sm:h-28 sm:w-28"
                  width={112}
                  height={112}
                />
                <div className="min-w-0 flex-1">
                  <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
                    {personalInfo.name}
                  </h1>
                  <p className="mt-1 text-base font-medium text-secondary sm:text-lg">
                    {personalInfo.role} · {personalInfo.yearsOfExperience}+ years
                  </p>
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[var(--fg-muted)]">
                    {personalInfo.introduction}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    <Button
                      size="sm"
                      onClick={() => window.open(personalInfo.cvUrl, '_blank')}
                      aria-label="Download CV"
                    >
                      <Download className="h-4 w-4" />
                      Download CV
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => {
                        window.location.href = `mailto:${personalInfo.email}`;
                      }}
                    >
                      <Mail className="h-4 w-4" />
                      Contact
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-0 lg:grid-cols-[1fr_1.2fr]">
              {/* Left column */}
              <div className="space-y-8 border-b border-[var(--card-border)] p-6 sm:p-8 lg:border-r lg:border-b-0">
                <div>
                  <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--fg)]">
                    Contact
                  </h2>
                  <ul className="mt-4 space-y-2.5 text-sm">
                    <li className="flex items-center gap-2 text-[var(--fg)]">
                      <Mail className="h-4 w-4 shrink-0 text-primary" />
                      <a href={`mailto:${personalInfo.email}`} className="hover:text-primary">
                        {personalInfo.email}
                      </a>
                    </li>
                    <li className="flex items-center gap-2">
                      <Phone className="h-4 w-4 shrink-0 text-primary" />
                      <a
                        href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                        className="hover:text-primary"
                      >
                        {personalInfo.phone}
                      </a>
                    </li>
                    <li className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 shrink-0 text-primary" />
                      {personalInfo.location}
                    </li>
                  </ul>
                  <SocialLinks links={personalInfo.socials} className="mt-4" />
                </div>

                <div>
                  <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--fg)]">
                    Skills
                  </h2>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {highlightSkills.map((skill) => (
                      <Badge key={skill}>{skill}</Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--fg)]">
                    Education
                  </h2>
                  <ul className="mt-4 space-y-3">
                    {education.map((item) => (
                      <li key={item.id}>
                        <p className="text-sm font-semibold">{item.degree}</p>
                        <p className="text-xs text-[var(--fg-muted)]">
                          {item.school} · {item.duration}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right column */}
              <div className="space-y-8 p-6 sm:p-8">
                <div>
                  <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--fg)]">
                    Experience
                  </h2>
                  <ul className="mt-4 space-y-5">
                    {experiences.map((item) => (
                      <li key={item.id} className="relative pl-4 before:absolute before:top-1.5 before:left-0 before:h-2 before:w-2 before:rounded-full before:bg-primary">
                        <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                          <p className="text-sm font-semibold">
                            {item.position}
                            <span className="font-medium text-primary"> · {item.company}</span>
                          </p>
                          <span className="text-xs text-[var(--fg-muted)]">{item.duration}</span>
                        </div>
                        <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-[var(--fg-muted)]">
                          {item.description}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--fg)]">
                    Selected projects
                  </h2>
                  <ul className="mt-4 space-y-4">
                    {topProjects.map((project) => (
                      <li
                        key={project.id}
                        className="rounded-xl border border-[var(--card-border)] bg-[var(--bg-muted)]/40 p-3.5"
                      >
                        <p className="text-sm font-semibold">{project.title}</p>
                        <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-[var(--fg-muted)]">
                          {project.description}
                        </p>
                        <div className="mt-2 flex flex-wrap gap-1.5">
                          {project.technologies.slice(0, 3).map((tech) => (
                            <Badge key={tech}>{tech}</Badge>
                          ))}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Card>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-center">
            <p className="w-full text-sm text-[var(--fg-muted)] sm:w-auto">
              Want more detail, projects, and certificates?
            </p>
            <Link to={ROUTES.HOME}>
              <Button variant="outline" size="sm">
                View full portfolio
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
