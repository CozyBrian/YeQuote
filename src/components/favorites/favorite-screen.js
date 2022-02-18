import React, { useContext } from "react";
import styled from "styled-components/native";
import { colors } from "../../constants";
import { FlatList } from "react-native";

import { SafeArea } from "../../utils/SafeArea";
import { MenuIcon, CopyIcon } from "../../utils/icons";
import { QuoteContext } from "../../context/quote-context";
import { useToast } from "react-native-fast-toast";
import { FavoriteCard } from "./favorite-card";

const Container = styled.View`
  flex: 1;
  background-color: ${colors.blue};
`;

const FavText = styled.Text`
  color: ${colors.text};
  font-size: 22px;
  font-weight: bold;
`;
// position: relative;
// right: 135px;

const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const EmptyView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const EmptyText = styled.Text`
  color: ${colors.text};
  font-size: 20px;
  font-weight: bold;
`;

export const FavoriteScreen = ({ navigation }) => {
  const { favorites, delFavorite, copyFav } = useContext(QuoteContext);

  const toast = useToast();

  const showToast = (i) => {
    toast.show("Copied", { icon: <CopyIcon />, duration: 800 });
    copyFav(i);
  };

  const isEmpty = () => {
    return favorites.length === 0;
  };

  return (
    <Container>
      <SafeArea>
        <Header>
          <MenuIcon onPress={() => navigation.toggleDrawer()} />
          <FavText>FAVORITES</FavText>
          <MenuIcon color={colors.blue} />
        </Header>
        {isEmpty() ? (
          <EmptyView>
            <EmptyText>Ops! its kinda empty here😬</EmptyText>
          </EmptyView>
        ) : (
          <FlatList
            data={favorites}
            keyExtractor={(item) => item}
            renderItem={({ item, index }) => (
              <FavoriteCard
                key={index}
                onPress={() => delFavorite(item)}
                text={item}
                t={() => showToast(index)}
              />
            )}
          />
        )}
      </SafeArea>
    </Container>
  );
};
