import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { Container, ThemeToggle } from '@/components/ui';
import { navItems, personalInfo } from '@/data/personal';
import { useActiveSection, useMediaQuery } from '@/hooks';
import { ROUTES } from '@/constants';
import { cn, scrollToSection } from '@/utils';

export function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === ROUTES.HOME;
  const isSummary = location.pathname === ROUTES.SUMMARY;
  const activeSection = useActiveSection();
  const isDesktop = useMediaQuery('(min-width: 1024px)');
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const open = !isDesktop && menuOpen;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const handleSectionNavigate = (href: string) => {
    const id = href.replace('#', '');
    if (!isHome) {
      void navigate({ pathname: ROUTES.HOME, hash: id });
      setMenuOpen(false);
      return;
    }
    scrollToSection(id);
    setMenuOpen(false);
  };

  const linkClass = (active: boolean) =>
    cn(
      'rounded-lg px-3 py-2 text-sm font-medium transition-colors',
      active ? 'bg-primary/10 text-primary' : 'text-[var(--fg)]/80 hover:text-[var(--fg)]',
    );

  const mobileLinkClass = (active: boolean) =>
    cn(
      'rounded-xl px-4 py-3 text-sm font-medium transition-colors',
      active
        ? 'bg-primary/10 text-primary'
        : 'text-[var(--fg)]/85 hover:bg-[var(--bg-muted)] hover:text-[var(--fg)]',
    );

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled || open
          ? 'glass border-b border-[var(--card-border)] shadow-soft'
          : 'bg-transparent',
      )}
    >
      <Container className="flex h-16 items-center justify-between lg:h-[4.5rem]">
        <Link
          to={ROUTES.HOME}
          className="flex items-center gap-2.5"
          aria-label="Go to home"
          onClick={() => setMenuOpen(false)}
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-secondary text-sm font-bold text-white">
            DH
          </span>
          <span className="hidden text-sm font-semibold tracking-tight sm:inline">
            {personalInfo.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          <Link
            to={ROUTES.SUMMARY}
            className={linkClass(isSummary)}
            aria-current={isSummary ? 'page' : undefined}
          >
            Summary
          </Link>
          {isHome ? (
            navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(event) => {
                    event.preventDefault();
                    handleSectionNavigate(item.href);
                  }}
                  className={linkClass(isActive)}
                  aria-current={isActive ? 'true' : undefined}
                >
                  {item.label}
                </a>
              );
            })
          ) : (
            <Link to={ROUTES.HOME} className={linkClass(isHome)}>
              Full portfolio
            </Link>
          )}
        </nav>

        <div className="flex items-center gap-1">
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl text-[var(--fg)] lg:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {open ? (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-[var(--card-border)] lg:hidden"
            aria-label="Mobile"
          >
            <Container className="flex flex-col gap-1 py-4">
              <Link
                to={ROUTES.SUMMARY}
                className={mobileLinkClass(isSummary)}
                onClick={() => setMenuOpen(false)}
              >
                Summary
              </Link>
              {isHome ? (
                navItems.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <a
                      key={item.id}
                      href={item.href}
                      onClick={(event) => {
                        event.preventDefault();
                        handleSectionNavigate(item.href);
                      }}
                      className={mobileLinkClass(isActive)}
                    >
                      {item.label}
                    </a>
                  );
                })
              ) : (
                <>
                  <Link
                    to={ROUTES.HOME}
                    className={mobileLinkClass(false)}
                    onClick={() => setMenuOpen(false)}
                  >
                    Full portfolio
                  </Link>
                  <Link
                    to={ROUTES.SUMMARY}
                    className={mobileLinkClass(false)}
                    onClick={() => setMenuOpen(false)}
                  >
                    Contact
                  </Link>
                </>
              )}
            </Container>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
