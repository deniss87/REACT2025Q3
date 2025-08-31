import { useMemo } from 'react';
import { getCO2Resource } from '../utils/co2Resource';
import CountryCard from './CountryCard';
import type { SortOption } from '../types/types';
import { getFilteredData } from '../utils/filterCountries';

interface Props {
  year: number;
  selectedFields: string[];
  region: string;
  searchQuery: string;
  sortOption: SortOption;
}

export default function CountryList({
  year,
  selectedFields,
  region,
  searchQuery,
  sortOption,
}: Props) {
  const co2Resource = getCO2Resource();
  const data = co2Resource.read();

  const filteredData = useMemo(
    () => getFilteredData(data, year, region, searchQuery, sortOption),
    [data, year, region, searchQuery, sortOption]
  );

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      {filteredData.map(([countryName, country]) => (
        <CountryCard
          key={`${country.iso_code || countryName}-${year}`}
          name={countryName}
          country={country}
          year={year}
          selectedFields={selectedFields}
        />
      ))}
    </div>
  );
}
