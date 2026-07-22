import { motion } from 'framer-motion';

interface LoadingScreenProps {
  onComplete?: () => void;
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[var(--bg)]"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 1.1, duration: 0.45, ease: 'easeInOut' }}
      onAnimationComplete={onComplete}
      aria-hidden="true"
    >
      <div className="flex flex-col items-center gap-5">
        <motion.div
          className="relative h-16 w-16"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary via-secondary to-accent opacity-90" />
          <div className="absolute inset-[3px] flex items-center justify-center rounded-[13px] bg-[var(--bg)]">
            <span className="text-lg font-bold tracking-tight text-primary">DH</span>
          </div>
        </motion.div>
        <motion.p
          className="text-sm font-medium text-[var(--fg-muted)]"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Loading portfolio…
        </motion.p>
        <div className="h-1 w-40 overflow-hidden rounded-full bg-[var(--bg-muted)]">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 1, ease: 'easeInOut' }}
          />
        </div>
      </div>
    </motion.div>
  );
}
