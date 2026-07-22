import { useState } from 'react';
import { cn } from '@/utils';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
}

export function LazyImage({ src, alt, className, width, height }: LazyImageProps) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div className={cn('relative overflow-hidden bg-[var(--bg-muted)]', className)}>
      {!loaded && !error ? (
        <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      ) : null}
      {!error ? (
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading="lazy"
          decoding="async"
          onLoad={() => setLoaded(true)}
          onError={() => setError(true)}
          className={cn(
            'h-full w-full object-cover transition-opacity duration-500',
            loaded ? 'opacity-100' : 'opacity-0',
          )}
        />
      ) : (
        <div className="flex h-full min-h-40 w-full items-center justify-center text-sm text-[var(--fg-muted)]">
          Image unavailable
        </div>
      )}
    </div>
  );
}
