import {
  ADD_PRODUCT,
  REMOVE_PRODUCT,
  INCREASE_COUNT,
  DECREASE_COUNT,
} from "../Types";

const magazineReducer = (state, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      const productIndexInOUT = state.products.findIndex((item) => {
        return item.id === action.payload.id;
      });
      if (productIndexInOUT === -1) {
        return {
          ...state,
          products: [
            {
              name: action.payload.name,
              country: action.payload.country,
              price: action.payload.price,
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
      return {
        ...state,
        products: [
          ...state.products.filter((item) => item.id !== action.payload),
        ],
      };

    case INCREASE_COUNT:
      return { ...state, count: state.count + action.payload };

    case DECREASE_COUNT:
      return { ...state, count: state.count - action.payload };
  }
};

export default magazineReducer;
