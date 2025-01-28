import axios from 'axios';
import { AgifyDTO } from './dtos/AgifyDTO';
import { Agify } from '../../../domain/models/Agify';

const PORT = 3200;
const BASE_URL = `http://localhost:${PORT}`;

export const fetchAgifyApiData = async (name: string): Promise<Agify> => {
  const { data } = await axios.get<AgifyDTO>(`${BASE_URL}/api/agify/${name}`);
  const { age } = data;

  return {
    age,
  };
};
