import { Nationalize } from '../../../../domain/models/Nationalize';
import { NationalizeDTO } from '../dtos/NationalizeDTO';

export const mapNationalizeDTOToDomain = (
  dto: NationalizeDTO
): Nationalize => ({
  countries: dto.country.map((country) => ({
    country: country.country_id,
    probability: country.probability,
  })),
});
