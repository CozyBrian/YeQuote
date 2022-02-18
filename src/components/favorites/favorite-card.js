import React from "react";
import styled from "styled-components/native";
import { Pressable } from "react-native";
import { FavoriteIcon } from "../../utils/icons";
import { colors } from "../../constants";

const FavoritesCard = styled.View`
  flex-direction: row;
  background-color: ${colors.darkblue};
  justify-content: space-between;
  align-items: center;
  border-radius: 14px;
  margin: 6px;
`;

const FavText = styled.Text`
  color: ${colors.text};
  font-family: Nunito_400Regular;
  font-size: 18px;
  margin-left: 10px;
`;

const FavTextView = styled.View`
  flex: 1;
`;

export const FavoriteCard = ({ text = "Hello", onPress, t }) => {
  return (
    <FavoritesCard>
      <FavTextView>
        <Pressable onPress={t}>
          <FavText numberOfLines={1}>{text}</FavText>
        </Pressable>
      </FavTextView>
      <FavoriteIcon onPress={onPress} />
    </FavoritesCard>
  );
};
