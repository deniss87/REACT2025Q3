import { memo, useEffect, useState } from 'react';
import type { CountryData, EmissionYearData } from '../types/types';

interface Props {
  countryName: string;
  country: CountryData;
  year: number;
  prevEntry: EmissionYearData | null;
}

const numericFields: (keyof EmissionYearData)[] = [
  'population',
  'co2',
  'co2_per_capita',
];

function CountryRow({ countryName, country, year, prevEntry }: Props) {
  const [highlightFields, setHighlightFields] = useState<
    (keyof EmissionYearData)[]
  >([]);

  const entry = country.data.find((d) => d.year === year);

  useEffect(() => {
    if (!entry || !prevEntry) return;

    const changed: (keyof EmissionYearData)[] = numericFields.filter(
      (field) => prevEntry[field] !== entry[field]
    );

    if (changed.length > 0) {
      setHighlightFields(changed);
      const timer = setTimeout(() => setHighlightFields([]), 1000);
      return () => clearTimeout(timer);
    }
  }, [entry, prevEntry]);

  if (!entry) {
    return (
      <tr>
        <td colSpan={5} className="border px-4 py-2 text-center">
          {countryName} ({country.iso_code}): No data for {year}
        </td>
      </tr>
    );
  }

  const getCellClass = (field: keyof EmissionYearData) =>
    highlightFields.includes(field)
      ? 'bg-yellow-200 transition-colors duration-700'
      : '';

  return (
    <tr>
      <td className="border px-4 py-2">{countryName}</td>
      <td className="border px-4 py-2">{country.iso_code}</td>
      <td className={`border px-4 py-2 ${getCellClass('population')}`}>
        {entry.population?.toLocaleString() ?? 'N/A'}
      </td>
      <td className={`border px-4 py-2 ${getCellClass('co2')}`}>
        {entry.co2?.toFixed(2) ?? 'N/A'}
      </td>
      <td className={`border px-4 py-2 ${getCellClass('co2_per_capita')}`}>
        {entry.co2_per_capita?.toFixed(2) ?? 'N/A'}
      </td>
    </tr>
  );
}

export default memo(CountryRow);
