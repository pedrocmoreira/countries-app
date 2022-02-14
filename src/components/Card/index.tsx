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
  }[];
}

export function Card({ array }: Props) {
  console.log("epa renderizou");
  return (
    <CardComponent.Wrapper>
      <CardComponent.FlagContainer source={{ uri: `${array[0].flags.png}` }} />
      <CardComponent.TextContainer>
        <CardComponent.Title>{array[0].name.common}</CardComponent.Title>
        <CardComponent.SubTitle>
          Population:{" "}
          <CardComponent.TextValues>
            {array[0].population}
          </CardComponent.TextValues>
        </CardComponent.SubTitle>
        <CardComponent.SubTitle>
          Region:{" "}
          <CardComponent.TextValues>{array[0].region}</CardComponent.TextValues>
        </CardComponent.SubTitle>
        <CardComponent.SubTitle>
          Capital:{" "}
          <CardComponent.TextValues>
            {array[0].capital}
          </CardComponent.TextValues>
        </CardComponent.SubTitle>
      </CardComponent.TextContainer>
    </CardComponent.Wrapper>
  );
}
