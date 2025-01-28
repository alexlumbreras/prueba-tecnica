import axios from 'axios';
import { Genderize } from '../../../domain/models/Genderize';
import { GenderizeDTO } from './dtos/GenderizeDTO';

const PORT = 3200;
const BASE_URL = `http://localhost:${PORT}`;

export const fetchCovidApiData = async (name: string): Promise<Genderize> => {
  const { data } = await axios.get<GenderizeDTO>(
    `${BASE_URL}/api/genderize/${name}`
  );
  const { gender, probability } = data;

  return {
    gender,
    probability,
  };
};
