import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '@/utils';

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'outline';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-primary text-white shadow-[var(--shadow-glow)] hover:bg-primary-hover focus-visible:ring-primary',
  secondary:
    'bg-secondary text-white shadow-soft hover:brightness-110 focus-visible:ring-secondary',
  ghost: 'bg-transparent text-[var(--fg)] hover:bg-black/5 dark:hover:bg-white/5',
  outline:
    'border border-[var(--card-border)] bg-transparent text-[var(--fg)] hover:border-primary/40 hover:text-primary',
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'h-9 px-3.5 text-sm',
  md: 'h-11 px-5 text-sm',
  lg: 'h-12 px-6 text-base',
};

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  type = 'button',
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-all duration-200',
        'disabled:pointer-events-none disabled:opacity-50',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]',
        variantClasses[variant],
        sizeClasses[size],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
