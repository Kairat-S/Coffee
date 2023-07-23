import React, { useReducer, useContext } from "react";
import magazineReducer from "./MagazineReducer";
import magazineContext from "./MagazineContext";
import {
  ADD_PRODUCT,
  DECREASE_COUNT,
  INCREASE_COUNT,
  REMOVE_PRODUCT,
} from "../Types";

const MagazineState = ({ children }) => {
  // const [state, dispatch] = useContext(magazineContext);
  const initialState = {
    products: [
      { name: "Coffee Brazil1", price: 2000, country: "Brazil", id: 10 },
      { name: "Coffee Brazil2", price: 3000, country: "Brazil", id: 20 },
      { name: "Coffee Brazil3", price: 4000, country: "Brazil", id: 30 },
    ],
    count: 1000000,
  };
  const [magazine_state, magazine_dispatch] = useReducer(
    magazineReducer,
    initialState
  );

  return (
    <magazineContext.Provider value={[magazine_state, magazine_dispatch]}>
      {children}
    </magazineContext.Provider>
  );
};
export default MagazineState;
