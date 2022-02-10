import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { BorderlessButton } from "react-native-gesture-handler";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const Wrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  height: ${RFValue(90)}px;

  margin-top: ${getStatusBarHeight()}px;
  background-color: ${({ theme }) => theme.colors.lightTheme.container};
  padding-horizontal: 20px;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.03);
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.lightTheme.text}
  font-family: ${({ theme }) => theme.fonts.bold}
  font-size: ${RFValue(14)}px;
`;

export const ToggleButtonWrapper = styled(BorderlessButton)`
  flex-direction: row;
  align-items: center;
`;

export const ToggleButtonText = styled.Text`
  margin-left: 8px;
`;
