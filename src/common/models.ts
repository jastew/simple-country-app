export interface Country {
  name: string;
  alpha3Code: string;
  flag: string;
  population: number;
  capital: string;
  region: string;
  borders: string[];
  currencies: Currency[];
  languages: Language[];
}

export interface Currency {
  code: string;
  name: string;
  symbol: string;
}

export interface Language {
  name: string;
}

export interface Region {
  [key: string]: Country[];
}
