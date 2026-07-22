import type { HTMLAttributes, ReactNode } from 'react';
import { cn } from '@/utils';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  hover?: boolean;
}

export function Card({ children, className, hover = false, ...props }: CardProps) {
  return (
    <div
      className={cn(
        'glass rounded-2xl p-6 shadow-soft transition-all duration-300',
        hover && 'hover:-translate-y-1 hover:shadow-[var(--shadow-glow)]',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
