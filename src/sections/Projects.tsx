import { useMemo, useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { Badge, Card, Container, LazyImage, Reveal, SectionHeading } from '@/components/ui';
import { GitHubIcon } from '@/components/icons';
import { projectFilterOptions, projects } from '@/data/projects';
import { ANIMATION, PROJECT_FILTERS, SECTION_IDS } from '@/constants';
import type { ProjectCategory } from '@/types';
import { cn } from '@/utils';

export function Projects() {
  const [filter, setFilter] = useState<ProjectCategory>(PROJECT_FILTERS.ALL);

  const filteredProjects = useMemo(() => {
    if (filter === PROJECT_FILTERS.ALL) return projects;
    return projects.filter((project) => project.category === filter);
  }, [filter]);

  return (
    <section
      id={SECTION_IDS.PROJECTS}
      className="section-padding"
      aria-labelledby="projects-heading"
    >
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Projects"
            title="Selected work"
            description="Selected customer and freelance work — filter by Flutter, React Native, or React."
          />
        </Reveal>

        <Reveal delay={0.08}>
          <div
            className="mt-8 flex flex-wrap gap-2"
            role="tablist"
            aria-label="Project filters"
          >
            {projectFilterOptions.map((option) => {
              const isActive = filter === option.id;
              return (
                <button
                  key={option.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setFilter(option.id)}
                  className={cn(
                    'rounded-xl px-4 py-2 text-sm font-medium transition-all',
                    isActive
                      ? 'bg-primary text-white shadow-[var(--shadow-glow)]'
                      : 'border border-[var(--card-border)] bg-[var(--bg-muted)] text-[var(--fg)] hover:border-primary/40 hover:text-primary',
                  )}
                >
                  {option.label}
                </button>
              );
            })}
          </div>
        </Reveal>

        <motion.div layout className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.96, y: 16 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35, delay: index * 0.04, ease: ANIMATION.EASE }}
              >
                <Card hover className="group flex h-full flex-col overflow-hidden p-0">
                  <LazyImage
                    src={project.image}
                    alt={`${project.title} preview`}
                    className="aspect-[16/10] transition-transform duration-500 group-hover:scale-[1.03]"
                    width={640}
                    height={400}
                  />
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="text-lg font-semibold">{project.title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--fg-muted)]">
                      {project.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech}>{tech}</Badge>
                      ))}
                    </div>
                    {project.githubUrl || project.demoUrl ? (
                      <div className="mt-5 flex gap-3">
                        {project.githubUrl ? (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noreferrer noopener"
                            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--fg)] transition-colors hover:text-primary"
                          >
                            <GitHubIcon className="h-4 w-4" />
                            GitHub
                          </a>
                        ) : null}
                        {project.demoUrl ? (
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noreferrer noopener"
                            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--fg)] transition-colors hover:text-primary"
                          >
                            <ExternalLink className="h-4 w-4" />
                            Demo
                          </a>
                        ) : null}
                      </div>
                    ) : null}
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </Container>
    </section>
  );
}
