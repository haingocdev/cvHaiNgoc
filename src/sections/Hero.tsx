import { Link } from 'react-router-dom';
import { ArrowDown, Download, FileText, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button, Container } from '@/components/ui';
import { personalInfo } from '@/data/personal';
import { ANIMATION, ROUTES, SECTION_IDS } from '@/constants';
import { scrollToSection } from '@/utils';

export function Hero() {
  return (
    <section
      id={SECTION_IDS.HERO}
      className="relative flex min-h-screen items-center overflow-hidden pt-24 pb-16"
      aria-labelledby="hero-heading"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/15 blur-3xl" />
        <div className="absolute right-10 bottom-20 h-56 w-56 rounded-full bg-accent/15 blur-3xl" />
      </div>

      <Container className="flex justify-center">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: ANIMATION.DURATION, ease: ANIMATION.EASE }}
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Portfolio
          </p>
          <h1
            id="hero-heading"
            className="text-4xl font-extrabold tracking-tight text-[var(--fg)] sm:text-5xl lg:text-6xl"
          >
            {personalInfo.name}
          </h1>
          <p className="mt-3 text-xl font-medium text-secondary sm:text-2xl">{personalInfo.role}</p>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[var(--fg-muted)] sm:text-lg">
            {personalInfo.introduction}
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link to={ROUTES.SUMMARY}>
              <Button>
                <FileText className="h-4 w-4" />
                Quick Summary
              </Button>
            </Link>
            <Button
              variant="outline"
              onClick={() => window.open(personalInfo.cvUrl, '_blank')}
              aria-label="Download CV"
            >
              <Download className="h-4 w-4" />
              Download CV
            </Button>
            <Link to={ROUTES.SUMMARY}>
              <Button variant="ghost">
                <Mail className="h-4 w-4" />
                Contact
              </Button>
            </Link>
          </div>
        </motion.div>
      </Container>

      <motion.button
        type="button"
        onClick={() => scrollToSection(SECTION_IDS.ABOUT)}
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-xs font-medium text-[var(--fg-muted)]"
        aria-label="Scroll down to about section"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
      >
        Scroll Down
        <ArrowDown className="h-4 w-4" />
      </motion.button>
    </section>
  );
}
