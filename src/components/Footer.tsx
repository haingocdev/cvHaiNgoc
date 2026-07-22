import { Container } from '@/components/ui';
import { SocialLinks } from '@/components/SocialLinks';
import { personalInfo } from '@/data/personal';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--card-border)] bg-[var(--bg-muted)]/60">
      <Container className="flex flex-col items-center justify-between gap-6 py-10 sm:flex-row">
        <div className="text-center sm:text-left">
          <p className="text-sm font-semibold text-[var(--fg)]">{personalInfo.name}</p>
          <p className="mt-1 text-sm text-[var(--fg-muted)]">
            © {year} {personalInfo.name}. All rights reserved.
          </p>
        </div>
        <SocialLinks links={personalInfo.socials} />
      </Container>
    </footer>
  );
}
