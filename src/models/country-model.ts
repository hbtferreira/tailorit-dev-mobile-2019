export class CountryModel {
  id: number;
  name: string;
  capital: string;
  continent: string;
  isFavorite: boolean;

  constructor(
    id?: number,
    name?: string,
    capital?: string,
    continent?: string,
    isFavorite?: boolean
  ) { }
}
