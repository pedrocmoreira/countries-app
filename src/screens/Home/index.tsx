import React, { useEffect, useState } from "react";
import { Card } from "../../components/Card";
import { FilterC } from "../../components/Filter";

import { Header } from "../../components/Header";
import { Search } from "../../components/Search";
import { api } from "../../service/api";

import * as HomeScreen from "./styles";

interface ICardForCountries {
  name: {
    common: string;
  };
  population: number;
  region: string;
  capital: string;
  flag: string;
  flags: {
    png: string;
    svg: string;
  };
}

export function Home() {
  const [showFilterOptions, setShowFilterOptions] = useState(false);
  const [countries, setCountries] = useState<ICardForCountries[]>([]);

  const [loading, setLoading] = useState(false);

  function handleCloseFilter() {
    setShowFilterOptions(false);
  }

  async function fetchData() {
    setLoading(true);
    try {
      const response = await api.get("v2/lang/pt");

      console.log(response.data);
      const data = {
        name: {
          common: response.data.name,
        },
        population: response.data.population,
        region: response.data.region,
        capital: response.data.capital,
        flag: response.data.flag,
        flags: {
          png: response.data.flags.png,
          svg: response.data.flags.svg,
        },
      };

      setCountries([data]);
    } catch (error: any) {
      console.error(error.message);
      throw new Error(error.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, [showFilterOptions == false]);

  return (
    <HomeScreen.Wrapper>
      <Header />
      <HomeScreen.Content>
        <Search />
        <FilterC value={showFilterOptions} setValue={handleCloseFilter} />

        {countries.map((country) => {
          return <Card key={country.name.common} array={country} />;
        })}
      </HomeScreen.Content>
    </HomeScreen.Wrapper>
  );
}
