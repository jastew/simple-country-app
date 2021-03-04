import React, { useEffect, useState } from "react";
import { fetchData } from "./services/http";
import { Country } from "./common/models";
import Header from "./components/header";
import List from "./views/list";
import "./App.css";
import Layout from "./components/layout";
import { filterCountries } from "./utils";
import ErrorMessage from "./components/error-message";
import Conditional from "./components/conditional";
import Detail from "./views/detail";
import { Fetching } from "./components/fetching";

const App = () => {
  const [fetching, setFetching] = useState(true);
  const [error, setError] = useState(false);
  const [countries, setCountries] = useState<Country[]>([]);
  const [search, setSearch] = useState("");
  const [selectedCountry, setSelectedCountry] = useState<Country | undefined>();

  const borderCountries = selectedCountry
    ? countries.filter((country) =>
        selectedCountry.borders.includes(country.alpha3Code)
      )
    : undefined;

  const filteredCountries = search
    ? filterCountries(search, countries)
    : countries;

  useEffect(() => {
    setFetching(true);
    setError(false);
    fetchData<Country[]>("https://restcountries.eu/rest/v2/all")
      .then((data) => {
        setCountries(
          data.map((country) => ({
            alpha3Code: country.alpha3Code,
            population: country.population,
            capital: country.capital,
            region: country.region,
            borders: country.borders,
            currencies: country.currencies,
            flag: country.flag,
            name: country.name,
            languages: country.languages,
          }))
        );
        setFetching(false);
      })
      .catch(() => {
        setFetching(false);
        setError(true);
      });
  }, []);

  return (
    <Layout>
      <Layout.Header>
        <Header search={search} onChangeSearch={setSearch} />
      </Layout.Header>
      <Layout.Body>
        <Conditional condition={fetching}>
          <Fetching>Fetching Countries ...</Fetching>
        </Conditional>
        <Conditional condition={!fetching}>
          <ErrorMessage error={error} />
          <List
            countries={filteredCountries}
            onSelect={(country) => setSelectedCountry(country)}
          />
          <Conditional condition={typeof selectedCountry !== "undefined"}>
            <Detail
              borderCountries={borderCountries}
              country={selectedCountry as Country}
              onClickBack={() => setSelectedCountry(undefined)}
            />
          </Conditional>
        </Conditional>
      </Layout.Body>
    </Layout>
  );
};

export default App;
