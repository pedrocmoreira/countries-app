import React from "react";
import { Text } from "react-native";
import * as CardComponent from "./styles";

interface Props {
  data: {
    name: string;
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

export function Card({ data }: Props) {
  return (
    <CardComponent.Wrapper>
      <Text>{data.name}</Text>
    </CardComponent.Wrapper>
  );
}
