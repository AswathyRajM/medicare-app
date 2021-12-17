import axios from "axios";
import { FETCH_PRODUCTS, GET_CATEGORIES } from "../Constants/products";

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

export const fetchCategories = () => async (dispatch) => {
  try {
    const categories = await axios.get(apiURL + "/categories");
    dispatch({
      type: GET_CATEGORIES,
      payload: categories.data,
    });
  } catch (error) {
    console.log(error.message);
  }
};
