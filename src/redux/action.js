import axios from "axios";
import { FETCH_PRODUCTS } from "./constants";

const apiURL = "http://fakestoreapi.com/products";

export const fetchProducts = () => async (dispatch) => {
  try {
    const products = await axios.get(apiURL);
    dispatch({
      type: FETCH_PRODUCTS,
      payload: products.data,
    });
  } catch (error) {
    console.log(error.message);
  }
};
