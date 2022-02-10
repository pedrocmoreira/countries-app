import React from "react";
import { StatusBar } from "react-native";
import { Header } from "../../components/Header";
import { Search } from "../../components/Search";
import * as HomeScreen from "./styles";

export function Home() {
  return (
    <HomeScreen.Wrapper>
      <Header />
      <Search />
    </HomeScreen.Wrapper>
  );
}
