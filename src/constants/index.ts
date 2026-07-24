export const STORAGE_KEYS = {
  THEME: 'portfolio-theme',
} as const;

export const THEME_MODES = {
  LIGHT: 'light',
  DARK: 'dark',
} as const;

export const SECTION_IDS = {
  HERO: 'hero',
  ABOUT: 'about',
  SKILLS: 'skills',
  EXPERIENCE: 'experience',
  PROJECTS: 'projects',
  EDUCATION: 'education',
} as const;

export const ROUTES = {
  HOME: '/',
  SUMMARY: '/summary',
  NOT_FOUND: '*',
} as const;

export const PROJECT_FILTERS = {
  ALL: 'all',
  FLUTTER: 'flutter',
  REACT_NATIVE: 'react-native',
  REACT: 'react',
} as const;

export const ANIMATION = {
  DURATION: 0.5,
  STAGGER: 0.08,
  EASE: [0.22, 1, 0.36, 1] as const,
};

export const BREAKPOINTS = {
  SM: 640,
  MD: 768,
  LG: 1024,
  XL: 1280,
} as const;
