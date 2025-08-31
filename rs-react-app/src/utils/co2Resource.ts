import { createResource } from './createResource';
import type { CO2Data } from '../types/types';

function fetchCO2Data() {
  return fetch('/co2data_small2.json').then((res) => {
    if (!res.ok) throw new Error('Failed to load CO₂ data');
    return res.json() as Promise<CO2Data>;
  });
}

export const co2Resource = createResource(fetchCO2Data());
