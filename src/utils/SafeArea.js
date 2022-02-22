import styled from "styled-components";
import { StatusBar } from "react-native";

export const SafeArea = styled.SafeAreaView`
  flex: 1;
  background-color: ${(props) => props.theme.Primary}
    ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

export const SafeArea1 = styled.SafeAreaView`
  flex: 1;
  background-color: ${(props) => props.theme.Drawer}
    ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;
