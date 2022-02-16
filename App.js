import { StatusBar } from "expo-status-bar";
import React from "react";
import { AppNavigation } from "./src/navigation/app-navigation";
import { QuoteContextProvider } from "./src/context/quote-context";

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <QuoteContextProvider>
        <AppNavigation />
      </QuoteContextProvider>
    </>
  );
}
