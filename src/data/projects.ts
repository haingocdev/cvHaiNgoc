import type { ProjectItem } from '@/types';
import { PROJECT_FILTERS } from '@/constants';

export const projects: ProjectItem[] = [
  {
    id: 'proj-1',
    title: 'Corework',
    role: 'Front-end Developer',
    company: 'Netline Technology Solutions JSC',
    platforms: ['IOS', 'ANDROID'],
    description:
      'A multi-module workforce management application designed following Super App principles, supporting timekeeping, facial recognition, location tracking, reporting, and notification systems.',
    responsibilities: [
      'Designed and developed modular feature-based architecture following Super App principles.',
      'Implemented timekeeping, reporting, and notification modules.',
      'Refactored shared components to improve maintainability.',
      'Optimized API handling and application performance.',
      'Uploaded app to App Store and Google Play.',
    ],
    technologies: ['Flutter', 'Dart', 'MySQL'],
    category: PROJECT_FILTERS.FLUTTER,
  },
  {
    id: 'proj-2',
    title: 'Solas Farm',
    role: 'Front-end Developer',
    company: 'Netline Technology Solutions JSC',
    platforms: ['IOS', 'ANDROID'],
    description:
      'Multi-feature e-commerce mobile application with membership system, vouchers, payment gateway, and QR-based payments.',
    responsibilities: [
      'Developed core shopping, checkout, and order management flows.',
      'Integrated payment gateway and VietQR system.',
      'Implemented Google Vision API for smart product processing.',
      'Improved performance in product listing and filtering.',
      'Integrated backend APIs and uploaded app to App Store and Google Play.',
    ],
    technologies: ['Flutter', 'Dart', 'MySQL', 'VietQR'],
    category: PROJECT_FILTERS.FLUTTER,
  },
  {
    id: 'proj-3',
    title: 'AlphaTrading',
    role: 'Front-end Developer',
    company: 'Pinetree Securities',
    platforms: ['IOS', 'ANDROID'],
    description:
      'A cross-platform mobile app for stock trading, enabling real-time market data, order placement, and portfolio management.',
    responsibilities: [
      'Mobile development for iOS and Android platforms using React Native.',
      'Refactored code and optimized performance to ensure app stability and scalability.',
      'Implemented new features based on business requirements.',
      'Worked with vendors to develop and integrate admin and supporting systems.',
    ],
    technologies: ['JavaScript', 'React Native', 'React', 'Kotlin', 'MySQL'],
    category: PROJECT_FILTERS.REACT_NATIVE,
  },
  {
    id: 'proj-4',
    title: 'Pinex Social Trading',
    role: 'Front-end Developer',
    company: 'Pinetree Securities',
    platforms: ['IOS', 'ANDROID', 'WEB'],
    description:
      'A social trading platform that combines investment tools with social networking features, allowing users to follow top investors, share strategies, and trade stocks.',
    responsibilities: [
      'Developed web app using React, supporting real-time feeds and trading functions.',
      'Built the web platform with Next.js for server-side rendering and optimized performance.',
      'Refactored code and improved performance.',
      'Implemented new features following business requirements.',
    ],
    technologies: ['JavaScript', 'React Native', 'Next.js', 'MySQL'],
    category: PROJECT_FILTERS.REACT_NATIVE,
  },
  {
    id: 'proj-5',
    title: 'Oddle Eat',
    role: 'React Native Developer',
    company: 'Fetch Technology',
    platforms: ['IOS', 'ANDROID', 'WEB'],
    description:
      'Food delivery platform supporting 1,500+ restaurants — mobile and web ordering, real-time updates, and seamless user experience.',
    responsibilities: [
      'Developed new scalable features and UI modules.',
      'Integrated Google Maps and tracking system.',
      'Optimized API handling and loading performance.',
      'Worked in an Agile environment with an international team.',
      'Set up and maintained CI/CD workflow using Fastlane and Firebase.',
      'Participated in the release management process.',
    ],
    technologies: ['JavaScript', 'React Native', 'React', 'Node.js', 'MySQL', 'GraphQL'],
    category: PROJECT_FILTERS.REACT_NATIVE,
  },
  {
    id: 'proj-6',
    title: 'LineUp',
    role: 'React Native Developer',
    company: 'Fetch Technology',
    platforms: ['IOS', 'ANDROID'],
    description:
      'Team builder app with interactive drag-and-drop UI, Firebase integration, and a refactored codebase for better maintainability.',
    responsibilities: [
      'Built interactive UI with drag-and-drop features.',
      'Integrated Firebase services.',
      'Refactored codebase to improve maintainability.',
    ],
    technologies: ['React Native', 'Node.js', 'Firebase'],
    category: PROJECT_FILTERS.REACT_NATIVE,
  },
  {
    id: 'proj-7',
    title: 'xYoYo',
    role: 'React Native Developer',
    company: 'Freelance',
    platforms: ['IOS', 'ANDROID'],
    description:
      'Fuel and vehicle service platform — feature development and backend API integration.',
    responsibilities: [
      'Developed features following design and requirements.',
      'Integrated backend APIs.',
    ],
    technologies: ['React Native', 'Node.js', 'MongoDB'],
    category: PROJECT_FILTERS.REACT_NATIVE,
  },
  {
    id: 'proj-8',
    title: 'OkGo',
    role: 'React Native Developer',
    company: 'Freelance',
    platforms: ['IOS', 'ANDROID'],
    description: 'Event booking app — feature development and bug fixing across iOS and Android.',
    responsibilities: [
      'Developed features following design and requirements.',
      'Bug fixing across iOS and Android.',
    ],
    technologies: ['React Native', 'Xcode', 'Android Studio'],
    category: PROJECT_FILTERS.REACT_NATIVE,
  },
  {
    id: 'proj-9',
    title: 'Bluezone Vaccine Reminder',
    role: 'React Native Developer',
    company: 'Freelance',
    platforms: ['IOS', 'ANDROID'],
    description:
      'Legacy React Native app refactor — improved feature stability and user experience.',
    responsibilities: [
      'Refactored legacy code.',
      'Enhanced feature stability and user experience.',
    ],
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
