import React from "react";
import styled from "styled-components/native";
import { Foundation } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { Entypo, AntDesign, Ionicons } from "@expo/vector-icons";

const Icon1 = styled.View`
  margin: 20px;
`;
// position: absolute;
// top: 10px;
// right: 0px;
// margin: 20px;

const Icon2 = styled.View`
  padding-right: 10px;
  padding-vertical: 20px;
`;

// position: absolute;
// top: 10px;
// left: 0px;
// margin: 20px;

export const RefreshIcon = ({ onPress }) => {
  return (
    <Icon1>
      <TouchableOpacity onPress={onPress}>
        <Foundation name="refresh" size={30} color="white" />
      </TouchableOpacity>
    </Icon1>
  );
};

export const MenuIcon = ({ onPress, color = "white" }) => {
  return (
    <Icon1>
      <TouchableOpacity onPress={onPress}>
        <Entypo name="menu" size={30} color={color} />
      </TouchableOpacity>
    </Icon1>
  );
};

export const FavoriteIcon = ({ isFavourite, onPress }) => {
  return (
    <Icon2>
      <TouchableOpacity onPress={onPress}>
        <AntDesign
          name={isFavourite ? "heart" : "hearto"}
          size={24}
          color={isFavourite ? "red" : "white"}
        />
      </TouchableOpacity>
    </Icon2>
  );
};

export const CopyIcon = () => {
  return <Ionicons name="clipboard" size={18} color="white" />;
};

export const FavIcon = () => {
  return <AntDesign name={"heart"} size={18} color={"white"} />;
};
