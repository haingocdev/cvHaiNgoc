import { Mail, Phone } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from '@/components/icons';
import type { SocialLink } from '@/types';
import { cn } from '@/utils';

const iconMap = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  email: Mail,
  phone: Phone,
} as const;

interface SocialLinksProps {
  links: SocialLink[];
  className?: string;
  iconClassName?: string;
}

export function SocialLinks({ links, className, iconClassName }: SocialLinksProps) {
  return (
    <ul className={cn('flex items-center gap-2', className)}>
      {links.map((link) => {
        const Icon = iconMap[link.icon];
        return (
          <li key={link.id}>
            <a
              href={link.href}
              target={link.icon === 'email' || link.icon === 'phone' ? undefined : '_blank'}
              rel={link.icon === 'email' || link.icon === 'phone' ? undefined : 'noreferrer noopener'}
              aria-label={link.label}
              className={cn(
                'inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--card-border)]',
                'bg-[var(--bg-muted)] text-[var(--fg)] transition-colors',
                'hover:border-primary/50 hover:text-primary',
                iconClassName,
              )}
            >
              <Icon className="h-4 w-4" />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
