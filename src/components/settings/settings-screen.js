import React, { useState } from "react";
import { colors } from "../../constants";
import { SafeArea1 } from "../../utils/SafeArea";
import styled from "styled-components/native";
import { MenuIcon } from "../../utils/icons";
import { List, Switch, RadioButton } from "react-native-paper";

const Container = styled.View`
  flex: 1;
  background-color: ${colors.blue};
`;

const ListView = styled.View`
  flex: 1;
`;

const SettingsView = styled.View`
  flex: 1;
`;

const Footer = styled.View`
  align-items: center;
`;

const HeaderText = styled.Text`
  color: ${colors.black};
  font-size: 22px;
  font-weight: bold;
`;

const Text = styled.Text`
  color: ${colors.black};
  font-size: 10px;
`;

const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const SettingsScreen = ({ navigation }) => {
  const [isDarkmode, setIsDarkmode] = useState(false);

  const onToggleSwitch = () => setIsDarkmode(!isDarkmode);
  const [value, setValue] = React.useState("first");

  return (
    <Container>
      <SafeArea1>
        <Header>
          <MenuIcon
            color={colors.black}
            onPress={() => navigation.toggleDrawer()}
          />
          <HeaderText>SETTINGS</HeaderText>
          <MenuIcon color={colors.white} />
        </Header>
        <SettingsView>
          <ListView>
            <List.Section>
              <List.Subheader>General</List.Subheader>
              <List.Item title="About" />
            </List.Section>
            <List.Section>
              <List.Subheader>Theme</List.Subheader>
              <List.Item
                title="Dark Mode"
                right={() => (
                  <Switch value={isDarkmode} onValueChange={onToggleSwitch} />
                )}
              />
              <List.Accordion
                title="Change Background Color"
                style={{ backgroundColor: colors.white }}
              >
                <RadioButton.Group
                  onValueChange={(value) => setValue(value)}
                  value={value}
                >
                  <RadioButton.Item label="First item" value="first" />
                  <RadioButton.Item label="Second item" value="second" />
                </RadioButton.Group>
              </List.Accordion>
            </List.Section>
            <List.Section>
              <List.Subheader>Cache</List.Subheader>
              <List.Item title="Clear cache" />
            </List.Section>
          </ListView>
          <Footer>
            <Text>YeQuote v1.1.0</Text>
            <Text>Made by Brian Newton</Text>
          </Footer>
        </SettingsView>
      </SafeArea1>
    </Container>
  );
};
