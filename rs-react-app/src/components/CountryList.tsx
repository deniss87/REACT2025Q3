import { useMemo } from 'react';
import { co2Resource } from '../utils/co2Resource';
import CountryCard from './CountryCard';
import { REGION_MAP } from '../utils/regionMap';
import type { SortOption } from '../types/types';

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
  const data = co2Resource.read();

  const filteredData = useMemo(() => {
    return Object.entries(data)
      .filter(([countryName, country]) => {
        if (region !== 'All' && REGION_MAP[country.iso_code] !== region)
          return false;
        if (
          searchQuery &&
          !countryName.toLowerCase().includes(searchQuery.toLowerCase())
        )
          return false;
        return true;
      })
      .sort(([aName, aCountry], [bName, bCountry]) => {
        switch (sortOption) {
          case 'name_asc':
            return aName.localeCompare(bName);
          case 'name_desc':
            return bName.localeCompare(aName);
          case 'population_asc': {
            const aPop =
              aCountry.data.find((d) => d.year === year)?.population ?? 0;
            const bPop =
              bCountry.data.find((d) => d.year === year)?.population ?? 0;
            return aPop - bPop;
          }
          case 'population_desc': {
            const aPop =
              aCountry.data.find((d) => d.year === year)?.population ?? 0;
            const bPop =
              bCountry.data.find((d) => d.year === year)?.population ?? 0;
            return bPop - aPop;
          }
        }
      });
  }, [data, region, searchQuery, sortOption, year]);
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      {filteredData.map(([countryName, country]) => (
        <CountryCard
          key={country.iso_code}
          name={countryName}
          country={country}
          year={year}
          selectedFields={selectedFields}
        />
      ))}
    </div>
  );
}
