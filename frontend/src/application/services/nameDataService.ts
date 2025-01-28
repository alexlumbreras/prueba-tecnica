import { Country } from '../../domain/models/Nationalize';
import { fetchAgifyApiData } from '../../infrastructure/api/agify/AgifyApiRepository';
import { fetchGenderizeApiData } from '../../infrastructure/api/genderize/GenderizeApiRepository';
import { fetchNationalizeApiData } from '../../infrastructure/api/nationalize/NationalizeApiRepository';

export interface NameData {
  gender: string;
  genderProbability: number;
  nationalities: Country[];
  age: string;
}

export const getNameData = async (name: string): Promise<NameData> => {
  const [genderResponse, nationalitiesResponse, ageResponse] =
    await Promise.all([
      fetchGenderizeApiData(name),
      fetchNationalizeApiData(name),
      fetchAgifyApiData(name),
    ]);

  return {
    gender: genderResponse.gender,
    genderProbability: genderResponse.probability,
    nationalities: nationalitiesResponse.countries.map(
      ({ country, probability }) => ({
        country,
        probability,
      })
    ),
    age: ageResponse.age,
  };
};
