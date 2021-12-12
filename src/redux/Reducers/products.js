import {
  FETCH_PRODUCTS,
  GET_CATEGORIES,
  GET_BRANDS,
} from "../Constants/products";
const initialState = {
  products: [],
  categories: [],
  brands: ["Wrangler", "Levi’s", "Provogue", "Acer", "Sandisk", "MI"],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CATEGORIES: {
      return {
        ...state,
        categories: action.payload,
      };
    }

    case GET_BRANDS: {
      return {
        ...state,
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
