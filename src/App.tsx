import { Route, Routes } from 'react-router-dom';
import { ApiKeyProvider } from './context/ApiKeyContext.tsx';
import Header from './components/Header.tsx';
import GeneratorPage from './pages/GeneratorPage.tsx';
import GalleryPage from './pages/GalleryPage.tsx';

const App = () => {
  return (
    <ApiKeyProvider>
      <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900 transition-colors">
        <Header />
        <main className="flex-1 container mx-auto p-4 lg:p-8">
          <Routes>
            <Route path="/" element={<GeneratorPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
          </Routes>
        </main>
      </div>
    </ApiKeyProvider>
  );
};

export default App;
