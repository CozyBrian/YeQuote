import React, { useState, useEffect } from "react";
import { colors } from "../constants";
import styled from "styled-components/native";
import { MenuIcon, RefreshIcon } from "../utils/icons";
import { useFonts, Roboto_400Regular } from "@expo-google-fonts/roboto";

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
  const [quote, setQuote] = useState(null);

  const [fontLoaded] = useFonts({ Roboto_400Regular });

  const getQuote = () => {
    fetch("https://api.kanye.rest/")
      .then((response) => response.json())
      .then((data) => {
        setQuote(null);
        setQuote(data.quote);
      });
  };

  useEffect(() => {
    getQuote();
  }, []);

  return (
    <AppView>
      <MenuIcon onPress={() => navigation.toggleDrawer()} />
      <RefreshIcon onPress={() => getQuote()} />
      <QuoteView>{fontLoaded ? <YeText>{quote}</YeText> : null}</QuoteView>
    </AppView>
  );
};
