import React from "react";
import * as CardComponent from "./styles";

interface Props {
  array: {
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
  };
}

export function Card({ array }: Props) {
  return (
    <CardComponent.Wrapper>
      <CardComponent.FlagContainer source={{ uri: `${array?.flags?.png}` }} />
      <CardComponent.TextContainer>
        <CardComponent.Title>{array?.name?.common}</CardComponent.Title>
        <CardComponent.SubTitle>
          Population:{" "}
          <CardComponent.TextValues>
            {array?.population}
          </CardComponent.TextValues>
        </CardComponent.SubTitle>
        <CardComponent.SubTitle>
          Region:{" "}
          <CardComponent.TextValues>{array?.region}</CardComponent.TextValues>
        </CardComponent.SubTitle>
        <CardComponent.SubTitle>
          Capital:{" "}
          <CardComponent.TextValues>{array?.capital}</CardComponent.TextValues>
        </CardComponent.SubTitle>
      </CardComponent.TextContainer>
    </CardComponent.Wrapper>
  );
}
