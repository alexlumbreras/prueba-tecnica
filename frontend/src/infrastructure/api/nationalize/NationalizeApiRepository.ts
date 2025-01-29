import axios from 'axios';
import { NationalizeDTO } from './dtos/NationalizeDTO';
import { Nationalize } from '../../../domain/models/Nationalize';
import { mapNationalizeDTOToDomain } from './mappers/GenderizeMapper';

const PORT = 3200;
const BASE_URL = `http://localhost:${PORT}`;

export const fetchNationalizeApiData = async (
  name: string
): Promise<Nationalize> => {
  const { data } = await axios.get<NationalizeDTO>(
    `${BASE_URL}/api/nationalize/${name}`
  );

  return mapNationalizeDTOToDomain(data);
};
