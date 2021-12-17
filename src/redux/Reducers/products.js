import { FETCH_PRODUCTS, GET_CATEGORIES } from "../Constants/products";
const initialState = {
  products: [],
  categories: [],
};

function rootReducer(state = initialState, action) {
  let actionType = action.type;

  switch (actionType) {
    case GET_CATEGORIES: {
      return {
        ...state,
        categories: action.payload,
      };
    }

    case FETCH_PRODUCTS: {
      return {
        ...state,
        products: action.payload,
      };
    }

    // case GET_CATEGORIES: {
    // }
    // case GET_CATEGORIES: {
    // }
    // case GET_CATEGORIES: {
    // }
    default:
      return state;
  }
}

export default rootReducer;
