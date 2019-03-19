import { Country } from './country';
export class Region {
  regionId: number;
  countryId: number;
  regionNameEn: string;
  regionNameKk: string;
  regionNameRu: string;
  regionName: {
    en: string;
    kk: string;
    ru: string;
  };
  country: Country;
}
