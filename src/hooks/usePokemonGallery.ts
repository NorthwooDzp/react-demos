import type { PokAIMon } from '../models';
import { useCallback, useEffect, useState } from 'react';

const API_URL: string = import.meta.env.VITE_BACKEND_URL || 'http://localhost:3001';

interface UsePokemonGalleryHook {
  data: PokAIMon[];
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}

export function usePokemonGallery(): UsePokemonGalleryHook {
  const [data, setData] = useState<PokAIMon[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const getPokemons: () => Promise<void> = useCallback(async (): Promise<void> => {
    setLoading(true);
    setError(null);
    try {
      const result: Response = await fetch(`${API_URL}/api/gallery`);
      if (!result.ok) {
        throw new Error('Failed to load gallery');
      }
      const obj: PokAIMon[] = await result.json();
      setData(obj);
    } catch (e) {
      setError(e instanceof Error ? e.message : String(e));
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getPokemons();
  }, [getPokemons]);

  return {
    data,
    loading,
    error,
    refetch: getPokemons,
  };
}
