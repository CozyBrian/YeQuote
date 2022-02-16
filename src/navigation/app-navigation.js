import * as React from "react";
import { Button, View } from "react-native";
import {
  createDrawerNavigator,
  DrawerItemList,
} from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { SafeArea1 } from "../utils/SafeArea";
import { MenuIcon } from "../utils/icons";
import { YeApp } from "../components/main-screen";

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

const Drawer = createDrawerNavigator();

export const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          headerShown: false,
          swipeEnabled: false,
          drawerStyle: { width: 220 },
        }}
        drawerContent={(props) => {
          return (
            <>
              <SafeArea1>
                <MenuIcon
                  color="black"
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
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
