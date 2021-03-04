import { Country } from "../common/models";

export const formatNumber = (number: number) => number.toLocaleString();

export const filterCountries = (search: string, countries: Country[]) => {
  const searchLower = search.toLowerCase();
  return countries.filter(
    (country) =>
      country.name.toLowerCase().includes(searchLower) ||
      country.alpha3Code.toLowerCase().includes(searchLower)
  );
};
