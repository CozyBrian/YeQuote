import styled from "styled-components";
import { StatusBar } from "react-native";
import { colors } from "../constants";

export const SafeArea = styled.SafeAreaView`
  flex: 1;
  background-color: ${colors.blue}
    ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

export const SafeArea1 = styled.SafeAreaView`
  flex: 1;
  background-color: ${colors.white}
    ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;
