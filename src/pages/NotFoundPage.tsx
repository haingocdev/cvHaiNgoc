import { SEO } from '@/components/SEO';
import { Button, Container } from '@/components/ui';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';
import { ROUTES } from '@/constants';

export function NotFoundPage() {
  return (
    <div className="flex min-h-screen items-center">
      <SEO
        title="Page Not Found | Dang Ngoc Hai"
        description="The page you are looking for does not exist."
      />
      <Container className="py-24 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">404</p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">Page not found</h1>
        <p className="mx-auto mt-4 max-w-md text-[var(--fg-muted)]">
          The page you’re looking for doesn’t exist or has been moved.
        </p>
        <Link to={ROUTES.HOME} className="mt-8 inline-flex">
          <Button>
            <Home className="h-4 w-4" />
            Back to Home
          </Button>
        </Link>
      </Container>
    </div>
  );
}
