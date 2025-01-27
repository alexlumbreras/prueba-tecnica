import { CovidStats } from '../../domain/models/CovidStats';
import { fetchCovidApiData } from '../../infrastructure/api/covid/CovidApiRepository';

export const getCovidStats = async (): Promise<CovidStats[]> => {
  const covidStats = await fetchCovidApiData();

  return covidStats;
};
