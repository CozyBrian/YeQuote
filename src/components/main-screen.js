import React, { useState, useEffect, useContext } from "react";
import { colors } from "../constants";
import styled from "styled-components/native";
import { MenuIcon, RefreshIcon } from "../utils/icons";
import { useFonts, Roboto_400Regular } from "@expo-google-fonts/roboto";
import { QuoteContext } from "../context/quote-context";
import { Pressable } from "react-native";

const AppView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${colors.blue};
`;

const YeText = styled.Text`
  color: ${colors.text};
  font-size: 20px;
  font-family: Roboto_400Regular;
`;

const QuoteView = styled.View`
  padding: 16px;
`;

export const YeApp = ({ navigation }) => {
  const { quote, copy, addFavorite, getQuote } = useContext(QuoteContext);

  const [fontLoaded] = useFonts({ Roboto_400Regular });

  return (
    <AppView>
      <MenuIcon onPress={() => navigation.toggleDrawer()} />
      <RefreshIcon onPress={() => getQuote()} />
      <Pressable onPress={() => copy()} onLongPress={() => addFavorite()}>
        <QuoteView>{fontLoaded ? <YeText>{quote}</YeText> : null}</QuoteView>
      </Pressable>
    </AppView>
  );
};
