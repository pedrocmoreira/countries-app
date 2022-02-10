import { Feather, Ionicons } from "@expo/vector-icons";
import React from "react";
import { StatusBar } from "react-native";
import { useTheme } from "styled-components";
import * as HeaderComponent from "./styles";

export function Header() {
  const theme = useTheme();

  return (
    <HeaderComponent.Wrapper>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={theme.colors.lightTheme.elements}
        translucent
      />

      <HeaderComponent.Title>Where in the world?</HeaderComponent.Title>

      <HeaderComponent.ToggleButtonWrapper>
        <Ionicons size={20} name="moon-outline" />
        <HeaderComponent.ToggleButtonText>
          Dark Mode
        </HeaderComponent.ToggleButtonText>
      </HeaderComponent.ToggleButtonWrapper>
    </HeaderComponent.Wrapper>
  );
}
