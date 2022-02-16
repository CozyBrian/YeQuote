import React, { useContext } from "react";
import { colors } from "../constants";
import styled from "styled-components/native";
import { MenuIcon, RefreshIcon } from "../utils/icons";
import { SafeArea } from "../utils/SafeArea";
import { useFonts, Roboto_400Regular } from "@expo-google-fonts/roboto";
import { QuoteContext } from "../context/quote-context";
import { Pressable, View } from "react-native";

const Container = styled.View`
  flex: 1;
  background-color: ${colors.blue};
`;

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
  margin-top: -70px
  padding: 16px;
`;

const IconView = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const YeApp = ({ navigation }) => {
  const { quote, copy, addFavorite, getQuote } = useContext(QuoteContext);

  const [fontLoaded] = useFonts({ Roboto_400Regular });

  return (
    <Container>
      <SafeArea>
        <IconView>
          <MenuIcon onPress={() => navigation.toggleDrawer()} />
          <RefreshIcon onPress={() => getQuote()} />
        </IconView>
        <AppView>
          <QuoteView>
            <Pressable onPress={() => copy()} onLongPress={() => addFavorite()}>
              {fontLoaded ? <YeText>{quote}</YeText> : null}
            </Pressable>
          </QuoteView>
        </AppView>
      </SafeArea>
    </Container>
  );
};
