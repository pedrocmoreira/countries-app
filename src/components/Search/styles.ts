import styled from "styled-components/native";
import { Feather, Ionicons } from "@expo/vector-icons";

export const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.lightTheme.container}
    
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.06);
  border-radius: 6px;
`;

export const Ionics = styled(Ionicons)`
  margin: 15px 17px;
`;

export const Input = styled.TextInput`
  flex: 1;
  height: 100%;

  color=${({ theme }) => theme.colors.lightTheme.background}
`;
