import {
  ADD_PRODUCT,
  REMOVE_PRODUCT,
  INCREASE_COUNT,
  DECREASE_COUNT,
} from "../Types";

const magazineReducer = (state, action) => {
  const productIndexInOUT = state.products.findIndex((item) => {
    return item.id === action.payload.id;
  });
  switch (action.type) {
    case ADD_PRODUCT:
      if (productIndexInOUT === -1) {
        return {
          ...state,
          products: [
            {
              name: action.payload.name,
              price: action.payload.price,
              country: action.payload.country,
              id: action.payload.id,
              quantity: 1,
            },
            ...state.products,
          ],
        };
      } else {
        return {
          ...state,
          products: [
            ...state.products.slice(0, productIndexInOUT),
            {
              ...state.products[productIndexInOUT],
              quantity: state.products[productIndexInOUT].quantity + 1,
            },
            ...state.products.slice(productIndexInOUT + 1),
          ],
        };
      }

    case REMOVE_PRODUCT:
      const productIndexQuantity = state.products[productIndexInOUT].quantity;
      // console.log(productIndexQuantity, "  ", action.payload.id);
      if (productIndexQuantity < 2) {
        return {
          ...state,
          products: [
            ...state.products.filter((item) => item.id !== action.payload.id),
          ],
        };
      } else {
        return {
          ...state,
          products: [
            ...state.products.slice(0, productIndexInOUT),
            {
              ...state.products[productIndexInOUT],
              quantity: state.products[productIndexInOUT].quantity - 1,
            },
            ...state.products.slice(productIndexInOUT + 1),
          ],
        };
      }

    case INCREASE_COUNT:
      return { ...state, count: state.count + action.payload };

    case DECREASE_COUNT:
      return { ...state, count: state.count - action.payload };
  }
};

export default magazineReducer;
