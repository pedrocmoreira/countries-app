import React from "react";
import theme from "../../styles/theme";
import * as SearchComponent from "./styles";

export function Search() {
  return (
    <SearchComponent.Wrapper>
      <SearchComponent.Ionics
        name="search"
        size={24}
        color={theme.colors.lightTheme.input}
      />
      <SearchComponent.Input placeholder="Search for a country..." />
    </SearchComponent.Wrapper>
  );
}
