import { describe, expect, it } from 'vitest';
import { CovidStatsDTOBuilder } from '../../builders/CovidStatsDTOBuilder';
import { CovidStats } from '../../../../../domain/models/CovidStats';
import { mapCovidData } from '../CovidDataMapper';

describe('mapCovidData', () => {
  it('should correctly map Stats to CovidStats', () => {
    const inputData = new CovidStatsDTOBuilder()
      .setDate('2025-01-01')
      .setCases(100000)
      .setTesting(200000)
      .setDeaths(1500)
      .build();

    const expectedResult: CovidStats = {
      date: new Date('2025-01-01'),
      cases: 100000,
      deaths: 1500,
      tests: 200000,
    };

    const result = mapCovidData(inputData);

    expect(result).toEqual(expectedResult);
  });

  it('should return default values when values are undefined', () => {
    const inputData = new CovidStatsDTOBuilder()
      .setDate('2025-01-01')
      .setCases(0)
      .setTesting(0)
      .setDeaths(0)
      .build();

    const expectedResult: CovidStats = {
      date: new Date('2025-01-01'),
      cases: 0,
      deaths: 0,
      tests: 0,
    };

    const result = mapCovidData(inputData);

    expect(result).toEqual(expectedResult);
  });
});
