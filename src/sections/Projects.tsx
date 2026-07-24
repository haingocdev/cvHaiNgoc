import { useMemo, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { Container, Reveal, SectionHeading } from '@/components/ui';
import { projectFilterOptions, projects } from '@/data/projects';
import { ANIMATION, PROJECT_FILTERS, SECTION_IDS } from '@/constants';
import type { ProjectCategory } from '@/types';
import { cn } from '@/utils';

export function Projects() {
  const [filter, setFilter] = useState<ProjectCategory>(PROJECT_FILTERS.ALL);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filteredProjects = useMemo(() => {
    if (filter === PROJECT_FILTERS.ALL) return projects;
    return projects.filter((project) => project.category === filter);
  }, [filter]);

  const handleFilterChange = (next: ProjectCategory) => {
    setFilter(next);
    setExpandedId(null);
  };

  return (
    <section
      id={SECTION_IDS.PROJECTS}
      className="section-padding"
      aria-labelledby="projects-heading"
    >
      <Container className="max-w-4xl">
        <Reveal>
          <SectionHeading eyebrow="Projects" title="" />
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-8 flex flex-wrap gap-2" role="tablist" aria-label="Project filters">
            {projectFilterOptions.map((option) => {
              const isActive = filter === option.id;
              return (
                <button
                  key={option.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => handleFilterChange(option.id)}
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

        <div className="mt-10 space-y-0 border-t border-[var(--card-border)]">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => {
              const isExpanded = expandedId === project.id;

              return (
                <motion.article
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3, delay: index * 0.03, ease: ANIMATION.EASE }}
                  className="border-b border-[var(--card-border)]"
                >
                  <button
                    type="button"
                    onClick={() => setExpandedId(isExpanded ? null : project.id)}
                    className="flex w-full items-start justify-between gap-4 py-5 text-left"
                    aria-expanded={isExpanded}
                    aria-controls={`project-details-${project.id}`}
                  >
                    <div className="min-w-0">
                      <h3 className="text-lg font-semibold text-[var(--fg)]">{project.title}</h3>
                      <p className="mt-1.5 text-sm font-normal text-[var(--fg-muted)]">
                        {project.role}
                        <span className="mx-1.5 text-[var(--fg-subtle)]">//</span>
                        {project.company}
                      </p>
                    </div>
                    <ChevronDown
                      className={cn(
                        'mt-1 h-5 w-5 shrink-0 text-[var(--fg-muted)] transition-transform duration-300',
                        isExpanded && 'rotate-180 text-primary',
                      )}
                      aria-hidden
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isExpanded ? (
                      <motion.div
                        id={`project-details-${project.id}`}
                        key="details"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: ANIMATION.EASE }}
                        className="overflow-hidden"
                      >
                        <div className="space-y-5 pb-6">
                          <div className="flex flex-wrap gap-2">
                            {project.platforms.map((platform) => (
                              <span
                                key={platform}
                                className="inline-flex items-center rounded border border-[var(--card-border)] px-2.5 py-1 text-xs font-medium tracking-wide text-[var(--fg)] uppercase"
                              >
                                {platform}
                              </span>
                            ))}
                          </div>

                          <p className="text-sm leading-relaxed font-normal text-[var(--fg)]">
                            {project.description}
                          </p>

                          <div>
                            <h4 className="text-xs font-semibold tracking-[0.14em] text-[var(--fg)] uppercase">
                              Responsibilities
                            </h4>
                            <ul className="mt-3 space-y-2">
                              {project.responsibilities.map((item) => (
                                <li
                                  key={item}
                                  className="flex gap-2 text-sm leading-relaxed font-normal text-[var(--fg)]"
                                >
                                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--fg)]" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h4 className="text-xs font-semibold tracking-[0.14em] text-[var(--fg)] uppercase">
                              Technologies
                            </h4>
                            <div className="mt-3 flex flex-wrap gap-2">
                              {project.technologies.map((tech) => (
                                <span
                                  key={tech}
                                  className="inline-flex items-center rounded border border-[var(--card-border)] bg-[var(--bg-muted)] px-2.5 py-1 text-xs font-normal text-[var(--fg)]"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </div>
      </Container>
    </section>
  );
}
