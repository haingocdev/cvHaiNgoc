import { useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { MainLayout } from '@/layouts/MainLayout';
import { HomePage } from '@/pages/HomePage';
import { SummaryPage } from '@/pages/SummaryPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { LoadingScreen } from '@/components/ui';
import { ThemeProvider } from '@/hooks';
import { ROUTES } from '@/constants';

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <ThemeProvider>
      <BrowserRouter basename={import.meta.env.BASE_URL.replace(/\/$/, '') || '/'}>
        {loading ? <LoadingScreen onComplete={() => setLoading(false)} /> : null}
        <Routes>
          <Route
            path={ROUTES.HOME}
            element={
              <MainLayout>
                <HomePage />
              </MainLayout>
            }
          />
          <Route
            path={ROUTES.SUMMARY}
            element={
              <MainLayout>
                <SummaryPage />
              </MainLayout>
            }
          />
          <Route path="/404" element={<NotFoundPage />} />
          <Route path={ROUTES.NOT_FOUND} element={<Navigate to="/404" replace />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
