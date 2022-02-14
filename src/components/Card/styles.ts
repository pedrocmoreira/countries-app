import { Image } from "react-native";
import FastImage from "react-native-fast-image";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Wrapper = styled.View`
  background-color: ${({ theme }) => theme.colors.lightTheme.elements};
`;

export const FlagContainer = styled(Image)`
  width: 100%;
  height: 180px;
`;

export const TextContainer = styled.View`
  padding: 24px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
`;

export const SubTitle = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
`;

export const TextValues = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;
