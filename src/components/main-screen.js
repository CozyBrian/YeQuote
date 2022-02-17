import React, { useContext, useRef } from "react";
import { colors } from "../constants";
import styled from "styled-components/native";
import { MenuIcon, RefreshIcon, CopyIcon, FavIcon } from "../utils/icons";
import { SafeArea } from "../utils/SafeArea";
import { useFonts, Roboto_400Regular } from "@expo-google-fonts/roboto";
import { QuoteContext } from "../context/quote-context";
import { useToast } from "react-native-fast-toast";
import { Pressable } from "react-native";

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

  const copyToast = useToast();
  const addToast = useToast();

  const CopyText = () => {
    copyToast.show("Copied", { icon: <CopyIcon />, duration: 800 });
    copy();
  };

  const favToast = () => {
    addToast.show("Added", { icon: <FavIcon />, duration: 800 });
    addFavorite(quote);
  };

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
            <Pressable
              onPress={() => CopyText()}
              onLongPress={() => favToast(quote)}
            >
              {fontLoaded ? <YeText>{quote}</YeText> : null}
            </Pressable>
          </QuoteView>
        </AppView>
      </SafeArea>
    </Container>
  );
};
