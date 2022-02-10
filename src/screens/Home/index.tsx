import React, { useEffect, useState } from "react";
import { Card } from "../../components/Card";
import { Filter } from "../../components/Filter";

import { Header } from "../../components/Header";
import { Search } from "../../components/Search";
import { api_v3 } from "../../service/api";

import * as HomeScreen from "./styles";

interface ICardForCountries {
  name: {
    common: string;
  };
  population: number;
  region: string;
  capital: string[];
}

export function Home() {
  const [showFilterOptions, setShowFilterOptions] = useState(false);
  const [countries, setCountries] = useState<ICardForCountries[]>([]);

  async function fetchData() {
    try {
      const response = await api_v3.get(`name/brasil`);
      console.log(response.data);
    } catch (error: any) {
      console.error(error.message);
      throw new Error(error.message);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <HomeScreen.Wrapper>
      <Header />
      <HomeScreen.Content>
        <Search />
        <Filter value={showFilterOptions} setValue={setShowFilterOptions} />
        {countries.map((country) => {
          <Card key={country.name.common} data={country} />;
        })}
      </HomeScreen.Content>
    </HomeScreen.Wrapper>
  );
}
