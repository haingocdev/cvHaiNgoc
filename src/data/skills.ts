import type { SkillCategory } from '@/types';

export const skillCategories: SkillCategory[] = [
  {
    id: 'mobile',
    title: 'Mobile Development',
    skills: [
      { name: 'Flutter', level: 92 },
      { name: 'React Native', level: 90 },
      { name: 'Android (Kotlin/Java)', level: 80 },
      { name: 'iOS (Swift)', level: 75 },
    ],
  },
  {
    id: 'languages',
    title: 'Programming Languages',
    skills: [
      { name: 'Dart', level: 92 },
      { name: 'JavaScript', level: 90 },
      { name: 'Kotlin', level: 78 },
      { name: 'Java', level: 75 },
      { name: 'Swift', level: 72 },
    ],
  },
  {
    id: 'state-management',
    title: 'State Management',
    skills: [
      { name: 'Bloc / Cubit', level: 90 },
      { name: 'Provider', level: 88 },
      { name: 'Riverpod', level: 85 },
      { name: 'Redux (Thunk, Saga)', level: 86 },
      { name: 'React Query', level: 84 },
    ],
  },
  {
    id: 'backend',
    title: 'Backend & Databases',
    skills: [
      { name: 'Node.js / Express', level: 82 },
      { name: 'Strapi', level: 75 },
      { name: 'Firebase', level: 88 },
      { name: 'MongoDB', level: 80 },
      { name: 'MySQL', level: 82 },
      { name: 'GraphQL', level: 78 },
    ],
  },
  {
    id: 'tools',
    title: 'Tools & Practices',
    skills: [
      { name: 'VS Code', level: 92 },
      { name: 'Android Studio', level: 88 },
      { name: 'Xcode', level: 85 },
      { name: 'CI/CD & Fastlane', level: 82 },
      { name: 'Unit / Widget Testing', level: 80 },
      { name: 'Agile / Scrum', level: 88 },
    ],
  },
];
