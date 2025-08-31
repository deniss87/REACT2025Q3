import { memo, useEffect, useState } from 'react';
import type { CountryData } from '../types/types';

interface Props {
  name: string;
  country: CountryData;
  year: number;
  selectedFields: string[];
}

function CountryCard({ name, country, year, selectedFields }: Props) {
  const [highlight, setHighlight] = useState(false);

  const entry = country.data.find((d) => d.year === year);

  useEffect(() => {
    setHighlight(true);
    const timer = setTimeout(() => setHighlight(false), 1000);
    return () => clearTimeout(timer);
  }, [year]);

  if (!entry) {
    return (
      <div className="bg-white shadow-md rounded-2xl p-4 border">
        <h2 className="text-xl font-bold mb-2">
          {name} ({country.iso_code})
        </h2>
        <p>No data for {year}</p>
      </div>
    );
  }

  return (
    <div
      className={`bg-white shadow-md rounded-2xl p-4 border transition ${
        highlight ? 'bg-yellow-100' : 'bg-white'
      }`}
    >
      <h2 className="text-xl font-bold mb-2">
        {name} ({country.iso_code})
      </h2>
      <p>
        <span className="font-semibold">Year:</span> {entry.year}
      </p>
      <p>
        <span className="font-semibold">Population:</span>{' '}
        {entry.population != null ? entry.population.toLocaleString() : 'N/A'}
      </p>
      <p>
        <span className="font-semibold">CO₂:</span>{' '}
        {entry.co2 != null ? entry.co2.toFixed(2) + ' Mt' : 'N/A'} Mt
      </p>
      <p>
        <span className="font-semibold">CO₂ per capita:</span>{' '}
        {entry.co2_per_capita != null ? entry.co2_per_capita.toFixed(2) : 'N/A'}
      </p>

      {selectedFields.map((field) => (
        <p key={field}>
          <span className="font-semibold">{field}:</span>{' '}
          {String(entry[field as keyof typeof entry])}
        </p>
      ))}
    </div>
  );
}

export default memo(CountryCard);
