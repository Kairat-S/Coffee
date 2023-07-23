import {
  ADD_PRODUCT,
  REMOVE_PRODUCT,
  INCREASE_COUNT,
  DECREASE_COUNT,
} from "../Types";

const magazineReducer = (state, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        products: [
          {
            name: action.payload.name,
            country: action.payload.country,
            price: action.payload.price,
            id: state.products.length + 1,
          },
          ...state.products,
        ],
      };

    case REMOVE_PRODUCT:
      return {
        ...state,
        product: [
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
