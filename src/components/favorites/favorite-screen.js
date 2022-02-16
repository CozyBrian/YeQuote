import React, { useContext } from "react";
import styled from "styled-components/native";
import { SafeArea } from "../../utils/SafeArea";
import { MenuIcon } from "../../utils/icons";
import { QuoteContext } from "../../context/quote-context";
import { FavoriteCard } from "./favorite-card";

export const FavoriteScreen = ({ navigation }) => {
  const { favorites } = useContext(QuoteContext);

  const tests =
    "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.";

  return (
    <SafeArea>
      <MenuIcon onPress={() => navigation.toggleDrawer()} />
      <FavoriteCard text={tests} />
    </SafeArea>
  );
};
