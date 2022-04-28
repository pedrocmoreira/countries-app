import React, { memo, useState } from "react";

import * as FilterComponent from "./styles";

interface Props {
  value: boolean;
  setValue: () => void;
}

const options = [
  {
    option: "Africa",
  },
  {
    option: "Ameria",
  },
  {
    option: "Asia",
  },
  {
    option: "Europe",
  },
  {
    option: "Oceania",
  },
];

export function Filter({ value, setValue }: Props) {
  return (
    <>
      <FilterComponent.Wrapper>
        <FilterComponent.ButtonWrapper onPress={() => setValue()}>
          <FilterComponent.ButtonText>
            Filter by region
          </FilterComponent.ButtonText>
          <FilterComponent.Icon
            name="keyboard-arrow-down"
            size={15}
            color="black"
          />
        </FilterComponent.ButtonWrapper>
      </FilterComponent.Wrapper>
      <FilterComponent.FilterOptions showOptions={value}>
        {options.map((value, index) => (
          <FilterComponent.Button>
          <FilterComponent.Text key={index}>
            {value.option}
          </FilterComponent.Text>
        </FilterComponent.Button>
        ))}
      </FilterComponent.FilterOptions>
    </>
  );
}

export const FilterC = memo(Filter, (prevProps, nextProps) => {
  return Object.is(prevProps.value, nextProps.value);
});
