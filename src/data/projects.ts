import type { ProjectItem } from '@/types';
import { PROJECT_FILTERS } from '@/constants';

export const projects: ProjectItem[] = [
  {
    id: 'proj-1',
    title: 'Corework',
    description:
      'Smart Workforce Super App with modular architecture — timekeeping, facial recognition, location tracking, reporting, and notifications. Published on App Store & Google Play.',
    image: '/images/projects/payflow.svg',
    technologies: ['Flutter', 'Dart', 'MySQL'],
    category: PROJECT_FILTERS.FLUTTER,
  },
  {
    id: 'proj-2',
    title: 'Solas Farm',
    description:
      'Multi-feature e-commerce app with membership, vouchers, payment gateway, and VietQR. Integrated Google Vision API and optimized product listing performance.',
    image: '/images/projects/shoply.svg',
    technologies: ['Flutter', 'Dart', 'MySQL', 'VietQR'],
    category: PROJECT_FILTERS.FLUTTER,
  },
  {
    id: 'proj-3',
    title: 'AlphaTrading',
    description:
      'Cross-platform stock trading app with real-time market data, order placement, and portfolio management for iOS and Android.',
    image: '/images/projects/pulse.svg',
    technologies: ['React Native', 'React', 'Kotlin', 'JavaScript', 'MySQL'],
    category: PROJECT_FILTERS.REACT_NATIVE,
  },
  {
    id: 'proj-4',
    title: 'Pinex Social Trading',
    description:
      'Social stock trading platform combining investment tools with networking — follow top investors, share strategies, and trade. Mobile + Next.js web.',
    image: '/images/projects/routesync.svg',
    technologies: ['React Native', 'Next.js', 'Kotlin', 'MySQL'],
    category: PROJECT_FILTERS.REACT_NATIVE,
  },
  {
    id: 'proj-5',
    title: 'Oddle Eat',
    description:
      'Food delivery platform supporting 1,500+ restaurants. Google Maps tracking, CI/CD with Fastlane & Firebase, and Agile delivery with an international team.',
    image: '/images/projects/fittrack.svg',
    technologies: ['React Native', 'React', 'Node.js', 'MySQL', 'GraphQL'],
    category: PROJECT_FILTERS.REACT_NATIVE,
  },
  {
    id: 'proj-6',
    title: 'LineUp',
    description:
      'Team builder app with interactive drag-and-drop UI, Firebase integration, and refactored codebase for better maintainability.',
    image: '/images/projects/studio.svg',
    technologies: ['React Native', 'Node.js', 'Firebase'],
    category: PROJECT_FILTERS.REACT_NATIVE,
  },
  {
    id: 'proj-7',
    title: 'xYoYo',
    description:
      'Freelance fuel & vehicle service platform — feature development and backend API integration.',
    image: '/images/projects/payflow.svg',
    technologies: ['React Native', 'Node.js', 'MongoDB'],
    category: PROJECT_FILTERS.REACT_NATIVE,
  },
  {
    id: 'proj-8',
    title: 'OkGo',
    description:
      'Freelance event booking app — feature development and bug fixing across iOS and Android.',
    image: '/images/projects/shoply.svg',
    technologies: ['React Native', 'Xcode', 'Android Studio'],
    category: PROJECT_FILTERS.REACT_NATIVE,
  },
  {
    id: 'proj-9',
    title: 'Bluezone Vaccine Reminder',
    description:
      'Legacy React Native app refactor — improved feature stability and user experience.',
    image: '/images/projects/pulse.svg',
    technologies: ['React Native', 'MySQL'],
    category: PROJECT_FILTERS.REACT_NATIVE,
  },
];

export const projectFilterOptions = [
  { id: PROJECT_FILTERS.ALL, label: 'All' },
  { id: PROJECT_FILTERS.FLUTTER, label: 'Flutter' },
  { id: PROJECT_FILTERS.REACT_NATIVE, label: 'React Native' },
  { id: PROJECT_FILTERS.REACT, label: 'React' },
] as const;
