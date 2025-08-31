import { useMemo } from 'react';
import { getCO2Resource } from '../utils/co2Resource';
import CountryRow from './CountryRow';
import { REGION_MAP } from '../utils/regionMap';
import type { EmissionYearData, SortOption } from '../types/types';

interface Props {
  year: number;
  region: string;
  sortOption: SortOption;
}

export default function CountryList({ year, region, sortOption }: Props) {
  const co2Resource = getCO2Resource();
  const data = co2Resource.read();

  const prevEntriesRef = useMemo(() => {
    const map: Record<string, EmissionYearData | null> = {};
    Object.entries(data).forEach(([name, country]) => {
      map[name] = country.data.find((d) => d.year === year - 1) ?? null;
    });
    return map;
  }, [data, year]);

  const filteredData = useMemo(() => {
    return Object.entries(data)
      .filter(([, country]) =>
        region === 'All' ? true : REGION_MAP[country.iso_code] === region
      )
      .sort(([aName, aCountry], [bName, bCountry]) => {
        switch (sortOption) {
          case 'name_asc':
            return aName.localeCompare(bName);
          case 'name_desc':
            return bName.localeCompare(aName);
          case 'population_asc':
            return (
              (aCountry.data.find((d) => d.year === year)?.population ?? 0) -
              (bCountry.data.find((d) => d.year === year)?.population ?? 0)
            );
          case 'population_desc':
            return (
              (bCountry.data.find((d) => d.year === year)?.population ?? 0) -
              (aCountry.data.find((d) => d.year === year)?.population ?? 0)
            );
        }
      });
  }, [data, region, sortOption, year]);

  return (
    <table className="w-full border-collapse border">
      <thead>
        <tr className="bg-gray-200">
          <th className="border px-4 py-2">Country</th>
          <th className="border px-4 py-2">ISO</th>
          <th className="border px-4 py-2">Population</th>
          <th className="border px-4 py-2">CO₂ (Mt)</th>
          <th className="border px-4 py-2">CO₂ per Capita</th>
        </tr>
      </thead>
      <tbody>
        {filteredData.map(([name, country]) => (
          <CountryRow
            key={country.iso_code}
            countryName={name}
            country={country}
            year={year}
            prevEntry={prevEntriesRef[name]}
          />
        ))}
      </tbody>
    </table>
  );
}
