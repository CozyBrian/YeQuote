import React from "react";
import styled from "styled-components/native";
import { Foundation } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native";
import { Entypo } from '@expo/vector-icons';

const Icon1 = styled.View`
  position: absolute;
  top: 10px;
  right: 0px;
  margin: 20px;
`;

const Icon2 = styled.View`
  position: absolute;
  top: 10px;
  left: 0px;
  margin: 20px;
`;

export const RefreshIcon = ({onPress}) => {
  return (
  <Icon1>
    <TouchableOpacity onPress={onPress}>
      <Foundation name="refresh" size={30} color="white" />
    </TouchableOpacity>
  </Icon1>
 )
}

export const MenuIcon = ({onPress}) => {
  return (
  <Icon2>
    <TouchableOpacity onPress={onPress}>
      <Entypo name="menu" size={30} color="white" /> 
    </TouchableOpacity>
  </Icon2>
 )
}