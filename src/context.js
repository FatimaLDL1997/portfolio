import React, { useContext } from "react";
import { useState } from "react";
const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [data, setData] = useState("hello");
  const [cartItems, setCartItems] = useState([]);

  return (
    <AppContext.Provider value={{ data, cartItems, setCartItems }}>
      {children}
    </AppContext.Provider>
  );
};

// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};
