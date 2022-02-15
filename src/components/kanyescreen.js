import React,{useState} from "react";
import { Quote } from "./kanye.api";
import styled from "styled-components/native";
import { Button } from "react-native";

const AppView = styled.View`
flex: 1;
align-items: center;
justify-content: center;
`;

const YeText = styled.Text`
font-size: 17px;
`;

export const YeApp = () => {
  const [quote, setQuote] = useState("");

  return (
    <AppView>
      <YeText>{quote}</YeText>
      <Button style={{bac}} onPress={() => {setQuote(Quote())}}>Ye</Button>
    </AppView>
  );
}