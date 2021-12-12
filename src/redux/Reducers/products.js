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
      const modifiedProducts = action.payload.map((product) => {
        let id = product.id % 4;
        if (product.category !== "electronics") {
          if (id === 1 || id === 0) product.brand = "Wrangler";
          else if (id === 2) product.brand = "Levi’s";
          else if (id === 3) product.brand = "Provogue";
        } else {
          if (id === 1 || id === 0) product.brand = "Acer";
          else if (id === 2) product.brand = "Sandisk";
          else if (id === 3) product.brand = "MI";
        }
        return {
          ...product,
        };
      });
      return {
        ...state,
        products: modifiedProducts,
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
