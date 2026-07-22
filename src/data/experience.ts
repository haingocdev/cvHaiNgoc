import type { ExperienceItem } from '@/types';

export const experiences: ExperienceItem[] = [
  {
    id: 'exp-1',
    company: 'Netline Technology Solutions JSC',
    position: 'Front-end Developer',
    duration: 'Jan 2025 — Present',
    description:
      'Building Flutter production apps with modular Super App architecture. Delivered Corework (workforce management) and Solas Farm (e-commerce), including App Store & Google Play releases, performance optimization, and payment integrations.',
    technologies: ['Flutter', 'Dart', 'MySQL', 'App Store', 'Google Play'],
  },
  {
    id: 'exp-2',
    company: 'Pinetree Securities',
    position: 'Front-end Developer',
    duration: 'Jun 2023 — Dec 2024',
    description:
      'Developed cross-platform stock trading and social trading products (AlphaTrading, Pinex). Worked across React Native, React/Next.js, and Kotlin; refactored code, optimized performance, and shipped new business features with vendor integrations.',
    technologies: ['React Native', 'React', 'Next.js', 'Kotlin', 'JavaScript', 'MySQL'],
  },
  {
    id: 'exp-3',
    company: 'Fetch Technology',
    position: 'React Native Developer',
    duration: 'Oct 2022 — Dec 2023',
    description:
      'Built features for food delivery and team-builder apps (Oddle Eat, LineUp). Integrated Google Maps & tracking, Firebase services, CI/CD with Fastlane, and collaborated in an Agile international team.',
    technologies: ['React Native', 'React', 'Node.js', 'Firebase', 'MySQL', 'GraphQL', 'Fastlane'],
  },
];
