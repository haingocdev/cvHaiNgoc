import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
  About,
  Education,
  Experience,
  Hero,
  Projects,
  Skills,
} from '@/sections';
import { SEO } from '@/components/SEO';
import { scrollToSection } from '@/utils';

export function HomePage() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;
    const id = location.hash.replace('#', '');
    const timer = window.setTimeout(() => scrollToSection(id), 80);
    return () => window.clearTimeout(timer);
  }, [location.hash]);

  return (
    <>
      <SEO
        title="Dang Ngoc Hai | Mobile Developer"
        description="Portfolio of Dang Ngoc Hai — Mobile Developer with 4 years of experience in Flutter, React Native, and scalable mobile apps."
      />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
    </>
  );
}
