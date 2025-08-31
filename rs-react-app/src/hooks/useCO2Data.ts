import { useEffect, useState } from 'react';
import type { CO2Data } from '../types/types';

export const useCO2Data = (url: string) => {
  const [data, setData] = useState<CO2Data | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error('Failed to load data');
        return res.json();
      })
      .then((json: CO2Data) => {
        setData(json);
        setLoading(false);
      })
      .catch((err: Error) => {
        setError(err.message);
        setLoading(false);
      });
  }, [url]);

  return { data, loading, error };
};
