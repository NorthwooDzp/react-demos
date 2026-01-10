import { Route, Routes } from 'react-router-dom';
import { ApiKeyProvider } from './context/ApiKeyContext.tsx';
import Header from './components/Header.tsx';
import { lazy, Suspense } from 'react';
import Spinner from './components/Spinner.tsx';

const GeneratorPage = lazy(() => import('./pages/GeneratorPage.tsx'));
const GalleryPage = lazy(() => import('./pages/GalleryPage.tsx'));
const App = () => {
  return (
    <ApiKeyProvider>
      <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900 transition-colors">
        <Header />
        <main className="flex-1 container mx-auto p-4 lg:p-8">
          <Suspense fallback={<Spinner label="Page is loading..." />}>
            <Routes>
              <Route path="/" element={<GeneratorPage />} />
              <Route path="/gallery" element={<GalleryPage />} />
            </Routes>
          </Suspense>
        </main>
      </div>
    </ApiKeyProvider>
  );
};

export default App;
