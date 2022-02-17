import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Clipboard from "expo-clipboard";

export const QuoteContext = createContext();

export const QuoteContextProvider = ({ children }) => {
  const [quote, setQuote] = useState("");
  const [favorites, setFavorite] = useState([]);
  const [loaded, setLoaded] = useState(false);

  const copy = () => {
    Clipboard.setString(quote);
  };

  const copyFav = (i) => {
    Clipboard.setString(favorites[i]);
  };

  const addFavorite = (quote) => {
    if (favorites.includes(quote)) {
      return;
    }
    setFavorite([...favorites, quote]);
  };

  const delFavorite = (quote) => {
    const newFavourites = favorites.filter((x) => x !== quote);
    setFavorite(newFavourites);
  };

  const getQuote = () => {
    fetch("https://api.kanye.rest/")
      .then((response) => response.json())
      .then((data) => {
        setQuote(null);
        setQuote(data.quote);
      });
  };

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    if (loaded) {
      saveData(favorites);
    }
  }, [favorites]);

  const saveData = async (value) => {
    try {
      const dataString = JSON.stringify(value);
      await AsyncStorage.setItem("@Favorites", dataString);
    } catch (e) {
      console.log("could'nt Save");
    }
  };

  const loadData = async () => {
    try {
      const dataString = await AsyncStorage.getItem("@Favorites");
      if (dataString !== "null") {
        setFavorite(JSON.parse(dataString));
      }
    } catch (e) {
      console.log("could'nt Load", e);
    }
    setLoaded(true);
  };

  useEffect(() => {
    getQuote();
  }, []);

  return (
    <QuoteContext.Provider
      value={{
        quote,
        copy,
        copyFav,
        addFavorite,
        getQuote,
        favorites,
        delFavorite,
      }}
    >
      {children}
    </QuoteContext.Provider>
  );
};
