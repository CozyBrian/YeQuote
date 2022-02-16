import React, { createContext, useState, useEffect } from "react";

export const QuoteContext = createContext();

export const QuoteContextProvider = ({ children }) => {
  const [quote, setQuote] = useState(null);
  const [favorites, setFavorite] = useState([]);

  const copy = () => {
    console.log("copied");
  };

  const addFavorite = (quote) => {
    if (favorites.includes(quote)) {
      return;
    }
    setFavorite([...favorites, quote]);
    console.log(favorites);
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
    getQuote();
  }, []);

  return (
    <QuoteContext.Provider
      value={{ quote, copy, addFavorite, getQuote, favorites, delFavorite }}
    >
      {children}
    </QuoteContext.Provider>
  );
};
