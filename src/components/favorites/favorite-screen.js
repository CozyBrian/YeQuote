import React, { useContext, useRef } from "react";
import styled from "styled-components/native";
import { colors } from "../../constants";
import { FlatList, View } from "react-native";
import { SafeArea } from "../../utils/SafeArea";
import { MenuIcon, CopyIcon } from "../../utils/icons";
import { QuoteContext } from "../../context/quote-context";
import Toast from "react-native-fast-toast";
import { FavoriteCard } from "./favorite-card";

const Container = styled.View`
  flex: 1;
  background-color: ${colors.blue};
`;

export const FavoriteScreen = ({ navigation }) => {
  const { favorites, delFavorite } = useContext(QuoteContext);

  const toast = useRef(null);

  const showToast = () => {
    toast.current.show("Copied", { icon: <CopyIcon />, duration: 600 });
  };

  return (
    <Container>
      <SafeArea>
        <MenuIcon onPress={() => navigation.toggleDrawer()} />
        <FlatList
          data={favorites}
          keyExtractor={(item) => item}
          renderItem={({ item, index }) => (
            <FavoriteCard
              key={index}
              onPress={() => delFavorite(item)}
              text={item}
              t={() => showToast()}
            />
          )}
        />
        <Toast ref={toast} />
      </SafeArea>
    </Container>
  );
};
