import { useScrollProgress } from '@/hooks';

export function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <div
      className="fixed inset-x-0 top-0 z-[60] h-1 bg-transparent"
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(progress)}
      aria-label="Reading progress"
    >
      <div
        className="h-full origin-left bg-gradient-to-r from-primary via-secondary to-accent transition-[width] duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
