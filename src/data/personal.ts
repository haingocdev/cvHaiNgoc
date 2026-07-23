import type { PersonalInfo } from '@/types';
import { SECTION_IDS } from '@/constants';

export const personalInfo: PersonalInfo = {
  name: 'Dang Ngoc Hai',
  role: 'Mobile Developer',
  introduction:
    'Mobile Developer with 4 years of experience building scalable apps with Flutter and React Native — strong architecture, solid performance, and production-ready release workflows.',
  yearsOfExperience: 4,
  about:
    'I am a Mobile Developer with 4 years of experience designing, developing, and deploying scalable mobile applications using Flutter and React Native. I focus on production-ready quality, modular architecture, and optimized release workflows for App Store and Google Play. I am experienced with CI/CD collaboration, state management, unit testing, and Agile/Scrum delivery.',
  careerObjective:
    'To keep shipping high-quality mobile products, strengthen Flutter and React Native expertise, and contribute to teams that value clean architecture, performance, and maintainable code.',
  email: 'haingocdev@gmail.com',
  phone: '+84 348 263 626',
  location: 'Hanoi, Vietnam',
  cvUrl: '/DangNgocHai-FE-Developer.pdf',
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
  { id: SECTION_IDS.CERTIFICATES, label: 'Certificates', href: `#${SECTION_IDS.CERTIFICATES}` },
  { id: SECTION_IDS.EDUCATION, label: 'Education', href: `#${SECTION_IDS.EDUCATION}` },
  { id: SECTION_IDS.CONTACT, label: 'Contact', href: `#${SECTION_IDS.CONTACT}` },
] as const;
