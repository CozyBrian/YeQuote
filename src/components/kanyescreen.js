import React,{useState, useEffect} from "react";
import { colors } from "../constants";
import styled from "styled-components/native";
import { Foundation } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native";

const AppView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${colors.blue};
`;

const YeText = styled.Text`
  color: ${colors.text};
  font-size: 20px;
  font-weight: 600;
`;

const QuoteView = styled.View`
  padding: 16px;
`;


const Icon = styled.View`
position: absolute;
top: 10px;
right: 0px;
margin: 20px;
`;


export const YeApp = () => {
  const [quote, setQuote] = useState(null);
  const getQuote = () => {
    fetch("https://api.kanye.rest/")
      .then(response => response.json())
      .then(data => {
        setQuote(null)
        setQuote(data.quote)
      });
  }

  useEffect(() => {
    getQuote()
  }, [])

  return (
    <AppView>
      <Icon>
        <TouchableOpacity onPress={() => getQuote()}>
          <Foundation name="refresh" size={24} color="white" />
        </TouchableOpacity>
      </Icon>
      <QuoteView>
        <YeText>{quote}</YeText>
      </QuoteView>
    </AppView>
  );
}