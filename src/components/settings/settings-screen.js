import React, { useContext } from "react";
import { SafeArea1 } from "../../utils/SafeArea";
import styled from "styled-components/native";
import { MenuIcon } from "../../utils/icons";
import { ThemeContext } from "../../context/theme-context";
import { List, Switch } from "react-native-paper";

const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.Drawer};
`;

const ListView = styled.View`
  flex: 1;
`;

const SettingsView = styled.View`
  flex: 1;
`;

const Footer = styled.View`
  align-items: center;
  padding-bottom: 4px;
`;

const HeaderText = styled.Text`
  color: ${(props) => props.theme.Text};
  font-size: 22px;
  font-weight: bold;
`;

const Text = styled.Text`
  color: ${(props) => props.theme.Text};
  font-size: 10px;
`;

const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const SettingsScreen = ({ navigation }) => {
  const { themeM, setThemeM, theme } = useContext(ThemeContext);

  const onToggleSwitch = () => setThemeM(!themeM);

  return (
    <Container>
      <SafeArea1>
        <Header>
          <MenuIcon
            color={theme().Icond}
            onPress={() => navigation.toggleDrawer()}
          />
          <HeaderText>SETTINGS</HeaderText>
          <MenuIcon color={theme().Drawer} />
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
                  <Switch value={themeM} onValueChange={onToggleSwitch} />
                )}
              />
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
