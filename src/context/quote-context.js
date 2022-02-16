import React, { createContext, useState, useEffect } from "react";

export const QuoteContext = createContext();

export const QuoteContextProvider = ({ children }) => {
  const [quote, setQuote] = useState(null);

  const copy = () => {
    console.log("copied");
  };
  const addFavorite = () => {
    console.log("added");
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
    <QuoteContext.Provider value={{ quote, copy, addFavorite, getQuote }}>
      {children}
    </QuoteContext.Provider>
  );
};
