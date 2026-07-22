import { useEffect, useState } from 'react';
import type { SectionId } from '@/types';
import { SECTION_IDS } from '@/constants';

const OBSERVED_SECTIONS: SectionId[] = [
  SECTION_IDS.HERO,
  SECTION_IDS.ABOUT,
  SECTION_IDS.SKILLS,
  SECTION_IDS.EXPERIENCE,
  SECTION_IDS.PROJECTS,
  SECTION_IDS.CERTIFICATES,
  SECTION_IDS.EDUCATION,
  SECTION_IDS.CONTACT,
];

export function useActiveSection(offset = 120): SectionId {
  const [activeSection, setActiveSection] = useState<SectionId>(SECTION_IDS.HERO);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset;

      for (let i = OBSERVED_SECTIONS.length - 1; i >= 0; i -= 1) {
        const section = document.getElementById(OBSERVED_SECTIONS[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(OBSERVED_SECTIONS[i]);
          break;
        }
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [offset]);

  return activeSection;
}
