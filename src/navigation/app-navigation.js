import * as React from "react";
import { Button, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import {
  createDrawerNavigator,
  DrawerItemList,
} from "@react-navigation/drawer";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import { ThemeProvider } from "styled-components";
import { ThemeContext } from "../context/theme-context";
import { NavigationContainer } from "@react-navigation/native";
import { SafeArea1 } from "../utils/SafeArea";
import { MenuIcon } from "../utils/icons";
import { YeApp } from "../components/main-screen";
import { FavoriteScreen } from "../components/favorites/favorite-screen";
import { SettingsScreen } from "../components/settings/settings-screen";

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

const Drawer = createDrawerNavigator();

export const AppNavigation = () => {
  const { themeM, setThemeM, theme } = React.useContext(ThemeContext);

  const Ptheme = {
    ...DefaultTheme,
    colors: {
      primary: theme().Primary,
      accent: theme().light,
      background: theme().Drawer,
      surface: theme().Drawer,
      text: theme().Text,
      onSurface: theme().Text,
      disabled: theme().Drawer,
      placeholder: theme().Drawer,
      backdrop: theme().Drawer,
      notification: theme().light,
    },
  };

  return (
    <>
      <StatusBar style={theme().Status} />
      <ThemeProvider theme={theme}>
        <PaperProvider theme={Ptheme}>
          <NavigationContainer>
            <Drawer.Navigator
              screenOptions={{
                headerShown: false,
                swipeEnabled: false,
                drawerStyle: { width: 220 },
                drawerInactiveTintColor: theme().Text,
                // drawerActiveTintColor: theme().Secondary,
                // drawerActiveBackgroundColor: theme().light,
              }}
              drawerContent={(props) => {
                return (
                  <>
                    <SafeArea1>
                      <MenuIcon
                        color={theme().Icond}
                        onPress={() => props.navigation.toggleDrawer()}
                      />
                      <View>
                        <DrawerItemList {...props} />
                      </View>
                    </SafeArea1>
                  </>
                );
              }}
            >
              <Drawer.Screen name="Home" component={YeApp} />
              <Drawer.Screen name="Favorites" component={FavoriteScreen} />
              <Drawer.Screen name="settings" component={SettingsScreen} />
            </Drawer.Navigator>
          </NavigationContainer>
        </PaperProvider>
      </ThemeProvider>
    </>
  );
};
