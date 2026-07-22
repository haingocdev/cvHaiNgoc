export type ThemeMode = 'light' | 'dark';

export type SectionId =
  | 'hero'
  | 'about'
  | 'skills'
  | 'experience'
  | 'projects'
  | 'certificates'
  | 'education'
  | 'contact';

export interface NavItem {
  id: SectionId;
  label: string;
  href: string;
}

export interface SocialLink {
  id: string;
  label: string;
  href: string;
  icon: 'github' | 'linkedin' | 'email' | 'phone';
}

export interface PersonalInfo {
  name: string;
  role: string;
  avatar: string;
  introduction: string;
  yearsOfExperience: number;
  about: string;
  careerObjective: string;
  email: string;
  phone: string;
  location: string;
  cvUrl: string;
  socials: SocialLink[];
}

export interface SkillItem {
  name: string;
  level: number;
}

export interface SkillCategory {
  id: string;
  title: string;
  skills: SkillItem[];
}

export interface ExperienceItem {
  id: string;
  company: string;
  position: string;
  duration: string;
  description: string;
  technologies: string[];
}

export type ProjectCategory = 'all' | 'flutter' | 'react-native' | 'react';

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: Exclude<ProjectCategory, 'all'>;
  githubUrl?: string;
  demoUrl?: string;
}

export interface CertificateItem {
  id: string;
  name: string;
  year: string;
  image: string;
  issuer: string;
}

export interface EducationItem {
  id: string;
  school: string;
  degree: string;
  duration: string;
  description: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface SeoMeta {
  title: string;
  description: string;
  image?: string;
  url?: string;
}
