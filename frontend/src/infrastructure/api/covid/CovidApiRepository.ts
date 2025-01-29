import axios from 'axios';
import { mapCovidData } from './mappers/CovidDataMapper';
import { CovidStatsDTO } from './dtos/CovidStatsDTO';

const PORT = 3200;
const BASE_URL = `http://localhost:${PORT}`;

export const fetchCovidApiData = async () => {
  const { data } = await axios.get<CovidStatsDTO>(
    `${BASE_URL}/api/covid/historical`
  );
  const apiData = data.data;

  return apiData.map(mapCovidData);
};
