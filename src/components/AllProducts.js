import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ProductContainer from "./ProductsContainer";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import SideFilter from "./SideFilter";
import Brands from "./Brands";
import CustomizedSlider from "./CustomizedSlider";
import { fetchCategories, getBrands } from "../redux/Actions/products";

const useStyles = makeStyles({
  conatiner: {
    width: "auto%",
    height: "auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  boxflex: {
    width: "100%",
    margin: "1rem 4rem",
    display: "flex",
    justifyContent: "space-around",
    height: "100%",
  },
  categoryContainer: {
    height: "100%",
    borderBottom: "none",
    margin: "1rem 0",
    width: "35%",
  },
  poductContainer: {
    flexGrow: 1,
    width: "100%",
    height: "100%",
    margin: "1rem",
    textAlign: "left",
    marginLeft: "3rem",
  },
  sidemenu: {
    height: "100%",
    width: "100%",
    marginBottom: "2rem",
    border: "1px solid #cfcfcf",
    borderBottom: "none",
  },
});

function AllProducts() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const categoriesData = useSelector((state) => state.categories);
  const brandsData = useSelector((state) => state.brands);
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  let count = 0;

  useEffect(() => {
    if (categoriesData.length < 1) dispatch(fetchCategories());
    else setCategories(categoriesData);

    if (brandsData.length < 1) dispatch(getBrands());
    else setBrands(brandsData);
  }, [dispatch, categoriesData, brandsData]);

  return (
    <Box className={classes.conatiner}>
      <Box className={classes.boxflex}>
        <Box className={classes.categoryContainer}>
          <Box className={classes.sidemenu}>
            <SideFilter List={categories} />
          </Box>
          <Box className={classes.sidemenu}>
            <Brands brands={brands} />
          </Box>
          <Box className={classes.sidemenu}>
            <CustomizedSlider />
          </Box>
        </Box>
        <Box className={classes.poductContainer}>
          <ProductContainer />
        </Box>
      </Box>
    </Box>
  );
}

export default AllProducts;
