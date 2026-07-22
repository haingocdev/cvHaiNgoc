import type { ReactNode } from 'react';
import { cn } from '@/utils';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: 'div' | 'section' | 'main' | 'footer' | 'header';
  id?: string;
}

export function Container({ children, className, as: Tag = 'div', id }: ContainerProps) {
  return (
    <Tag id={id} className={cn('mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8', className)}>
      {children}
    </Tag>
  );
}
