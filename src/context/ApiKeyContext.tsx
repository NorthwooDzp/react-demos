import { createContext, useContext, useState, type ReactNode, type JSX, type Context } from 'react';

interface ApiKeyProviderProps {
  children: ReactNode;
}

type ApiKeyContextType = {
  apiKey: string | null;
  updateApiKey: (newKey: string) => void;
  clearApiKey: () => void;
};

const apiKeyStorageKey = 'GEMINI_API_KEY';

const ApiKeyContext: Context<ApiKeyContextType | null> = createContext<ApiKeyContextType | null>(null);

export function ApiKeyProvider({ children }: ApiKeyProviderProps): JSX.Element {
  const [apiKey, setApiKey] = useState<string | null>(() => localStorage.getItem(apiKeyStorageKey) || null);

  const updateApiKey = (newKey: string) => {
    setApiKey(newKey);
    if (newKey) {
      localStorage.setItem(apiKeyStorageKey, newKey);
    } else {
      localStorage.removeItem(apiKeyStorageKey);
    }
  };

  const clearApiKey = () => {
    setApiKey(null);
    localStorage.removeItem(apiKeyStorageKey);
  };

  return <ApiKeyContext.Provider value={{ apiKey, updateApiKey, clearApiKey }}>{children}</ApiKeyContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useApiKey(): ApiKeyContextType {
  const context: ApiKeyContextType | null = useContext(ApiKeyContext);
  if (!context) {
    throw new Error('useApiKey must be used within an ApiKeyProvider');
  }
  return context;
}
