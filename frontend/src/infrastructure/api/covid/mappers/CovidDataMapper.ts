import { CovidStats } from '../../../../domain/models/CovidStats';
import { Stats } from '../dtos/CovidStatsDTO';

export const mapCovidData = (data: Stats): CovidStats => {
  const { date, cases, outcomes, testing } = data;

  return {
    date,
    cases: cases.total.value ?? 0,
    deaths: outcomes.death.total.value ?? 0,
    tests: testing.total.value ?? 0,
  };
};
