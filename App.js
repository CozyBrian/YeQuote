import React from "react";
import { StatusBar } from "expo-status-bar";
import { AppNavigation } from "./src/navigation/app-navigation";
import { QuoteContextProvider } from "./src/context/quote-context";
import { ToastProvider } from "react-native-fast-toast";

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <QuoteContextProvider>
        <ToastProvider>
          <AppNavigation />
        </ToastProvider>
      </QuoteContextProvider>
    </>
  );
}
