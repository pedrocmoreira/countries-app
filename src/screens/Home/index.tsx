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

  async function fetchData() {
    setLoading(true);
    try {
      const response = await api.get("v2/lang/es");

      const data = {
        name: {
          common: response.data[0].name,
        },
        population: response.data[0].population,
        region: response.data[0].region,
        capital: response.data[0].capital,
        flag: response.data[0].flag,
        flags: {
          png: response.data[0].flags.png,
          svg: response.data[0].flags.svg,
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
        <FilterC value={showFilterOptions} setValue={setShowFilterOptions} />

        {countries && <Card array={countries} />}
      </HomeScreen.Content>
    </HomeScreen.Wrapper>
  );
}
