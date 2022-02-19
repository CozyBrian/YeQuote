import React, { useEffect } from "react";
import { Platform } from "react-native";
import { AppNavigation } from "./src/navigation/app-navigation";
import { QuoteContextProvider } from "./src/context/quote-context";
import { ToastProvider } from "react-native-fast-toast";
import * as NavigationBar from "expo-navigation-bar";

export default function App() {
  useEffect(() => {
    if (Platform.OS === "android") {
      e();
    }
  }, []);

  const e = async () => {
    try {
      await NavigationBar.setBackgroundColorAsync("#005e8fff");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <QuoteContextProvider>
        <ToastProvider>
          <AppNavigation />
        </ToastProvider>
      </QuoteContextProvider>
    </>
  );
}
