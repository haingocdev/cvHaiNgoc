import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { scrollToTop } from '@/utils';

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          className="fixed bottom-6 right-6 z-50"
          initial={{ opacity: 0, scale: 0.8, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 12 }}
        >
          <Button
            variant="primary"
            size="sm"
            onClick={scrollToTop}
            aria-label="Back to top"
            className="h-11 w-11 rounded-full px-0 shadow-soft"
          >
            <ArrowUp className="h-4 w-4" />
          </Button>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
