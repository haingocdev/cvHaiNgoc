import type { HTMLAttributes, ReactNode } from 'react';
import { cn } from '@/utils';

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
}

export function Badge({ children, className, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-lg border border-[var(--card-border)]',
        'bg-[var(--bg-muted)] px-2.5 py-1 text-xs font-semibold text-[var(--fg)]',
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
