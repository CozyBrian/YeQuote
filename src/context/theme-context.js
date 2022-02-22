import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

const lightTheme = {
  Primary: "#2E8BC0",
  Secondary: "#005e8f",
  light: "#6abbf3",
  Text: "#000000",
  Drawer: "#F3F5F9",
  HomeBG: "#2E8BC0",
  Iconl: "#F3F5F9",
  Icond: "#000000",
  Status: "dark",
};

const darkTheme = {
  Primary: "#05263b",
  Secondary: "#000016",
  light: "#344e65",
  Text: "#E8EEF1",
  Drawer: "#121212",
  HomeBG: "#05263b",
  Iconl: "#000000",
  Icond: "#F3F5F9",
  Status: "light",
};

export const ThemeProviderr = ({ children }) => {
  const [themeM, setThemeM] = useState(false);

  const theme = () => {
    return themeM ? darkTheme : lightTheme;
  };

  return (
    <ThemeContext.Provider value={{ themeM, setThemeM, theme }}>
      {children}
    </ThemeContext.Provider>
  );
};
