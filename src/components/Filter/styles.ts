import { MaterialIcons } from "@expo/vector-icons";
import { BorderlessButton, RectButton } from "react-native-gesture-handler";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

interface IFilterOptionsProps {
  showOptions: boolean;
}

export const Wrapper = styled.View`
  width: ${RFPercentage(26)}px;
  height: ${RFValue(50)}px;

  justify-content: center;
  background-color: ${({ theme }) => theme.colors.lightTheme.elements};

  margin-bottom: 18px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.06);
  border-radius: 6px;
`;

export const ButtonWrapper = styled(RectButton)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 18px;

  border-radius: 6px;
`;

export const ButtonText = styled.Text`
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.lightTheme.text};
`;

export const Icon = styled(MaterialIcons)``;

export const Text = styled.Text`
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.lightTheme.text};

  padding: 5px 20px;
`;

export const FilterOptions = styled.View<IFilterOptionsProps>`
  display: ${({ showOptions }) => (!showOptions ? "none" : "flex")};
  width: ${RFPercentage(26)}px;

  background-color: ${({ theme }) => theme.colors.lightTheme.elements};

  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.06);
  border-radius: 6px;
  padding: 10px 0;

  position: absolute;
  top: 135px;

  z-index: 1;
`;
