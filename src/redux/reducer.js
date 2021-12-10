import { FETCH_PRODUCTS } from "./constants";
const initialState = {
  articles: [],
};

function rootReducer(state = initialState, action) {
  if (FETCH_PRODUCTS) {
    return {
      ...state,
      products: action.payload,
    };
  }
  return state;
}

export default rootReducer;
