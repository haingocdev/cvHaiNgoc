import type { SkillCategory } from '@/types';

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Programming Languages',
    skills: ['Dart', 'JavaScript', 'Kotlin', 'Java', 'Swift'],
  },
  {
    id: 'mobile',
    title: 'Mobile Development',
    skills: ['Flutter', 'React Native', 'Android (Kotlin/Java)', 'iOS (Swift)'],
  },
  {
    id: 'web',
    title: 'Web Development',
    skills: ['React', 'Next.js', 'React Hooks', 'HTML/CSS'],
  },
  {
    id: 'state-management',
    title: 'State Management',
    skills: ['Bloc / Cubit', 'Provider', 'Riverpod', 'Redux (Thunk, Saga)', 'React Query'],
  },
  {
    id: 'backend',
    title: 'Backend & APIs',
    skills: ['Node.js', 'Express', 'Strapi', 'RESTful APIs', 'GraphQL'],
  },
  {
    id: 'databases',
    title: 'Databases',
    skills: ['Firebase (Realtime, Firestore)', 'MongoDB', 'MySQL'],
  },
  {
    id: 'tools',
    title: 'Tools & IDEs',
    skills: ['VS Code', 'Android Studio', 'Xcode'],
  },
  {
    id: 'practices',
    title: 'Testing, CI/CD & Practices',
    skills: [
      'Unit Testing',
      'Widget Testing',
      'CI/CD pipelines',
      'Fastlane',
      'App Store',
      'Google Play',
      'Agile / Scrum',
      'AI-assisted engineering',
    ],
  },
];

/** Skills shown on the Quick Summary page — edit this list freely. */
export const summarySkills = [
  'Flutter',
  'React Native',
  'Dart',
  'JavaScript',
  'React',
  'Bloc / Cubit',
  'Next.js',
  'Redux',
  'Firebase',
  'MySQL',
];
