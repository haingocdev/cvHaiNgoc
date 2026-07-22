export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(' ');
}

export function scrollToSection(sectionId: string): void {
  const element = document.getElementById(sectionId);
  if (!element) return;

  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export function scrollToTop(): void {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

export function formatHref(value: string, type: 'email' | 'phone' | 'url'): string {
  if (type === 'email') return `mailto:${value}`;
  if (type === 'phone') return `tel:${value.replace(/\s+/g, '')}`;
  return value;
}
