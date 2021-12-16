import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../redux/Actions/products";
import AllProducts from "../components/AllProducts";

function Home() {
  const dispatch = useDispatch();
  const productData = useSelector((state) => state.products);
  const [products, setProducts] = React.useState([]);
  React.useEffect(() => {
    dispatch(fetchProducts());
    if (productData !== undefined) setProducts(productData);
  }, [dispatch, productData]);
  return <AllProducts products={products} />;
}

export default Home;
