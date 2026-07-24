import type { PersonalInfo } from '@/types';
import { SECTION_IDS } from '@/constants';

export const personalInfo: PersonalInfo = {
  name: 'Dang Ngoc Hai',
  role: 'Mobile Developer',
  introduction:
    'Mobile Developer with 4 years of experience building scalable mobile and web applications using Flutter, React Native, React, and Next.js. Skilled in modular architecture, efficient state management, and delivering production-ready applications for the App Store and Google Play.',
  yearsOfExperience: 4,
  about:
    'Front-end / Mobile Developer with 4 years designing, building, and deploying scalable web & mobile apps using Flutter, React Native, React, and Next.js. Hands-on with Bloc/Cubit, Provider, Riverpod, and Redux; CI/CD and store releases; Firebase, MySQL, MongoDB & GraphQL; plus unit testing and Agile/Scrum delivery.',
  careerObjective:
    'To keep shipping high-quality mobile and web products, deepen Flutter and React Native expertise, and contribute to teams that value clean architecture, performance, and maintainable code.',
  email: 'haingocdev@gmail.com',
  phone: '+84 348 263 626',
  location: 'Hanoi, Vietnam',
  cvUrl: `${import.meta.env.BASE_URL}DangNgocHai-FE-Developer.pdf`,
  socials: [
    {
      id: 'email',
      label: 'Email',
      href: 'mailto:haingocdev@gmail.com',
      icon: 'email',
    },
    {
      id: 'phone',
      label: 'Phone',
      href: 'tel:+84348263626',
      icon: 'phone',
    },
  ],
};

export const navItems = [
  { id: SECTION_IDS.ABOUT, label: 'About', href: `#${SECTION_IDS.ABOUT}` },
  { id: SECTION_IDS.SKILLS, label: 'Skills', href: `#${SECTION_IDS.SKILLS}` },
  { id: SECTION_IDS.EXPERIENCE, label: 'Experience', href: `#${SECTION_IDS.EXPERIENCE}` },
  { id: SECTION_IDS.PROJECTS, label: 'Projects', href: `#${SECTION_IDS.PROJECTS}` },
  { id: SECTION_IDS.EDUCATION, label: 'Education', href: `#${SECTION_IDS.EDUCATION}` },
] as const;
