import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ProductContainer from "./ProductsContainer";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import SideFilter from "./SideFilter";
import ProductForm from "./ProductForm";
import CustomizedSlider from "./CustomizedSlider";
import { fetchCategories } from "../redux/Actions/products";

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
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    dispatch(fetchCategories());
    if (categoriesData !== undefined) {
      setCategories(categoriesData);
    }
  }, [dispatch]);
  return (
    <Box className={classes.conatiner}>
      <Box className={classes.boxflex}>
        <Box className={classes.categoryContainer}>
          <Box className={classes.sidemenu}>
            <SideFilter List={categoriesData} />
          </Box>
          <Box className={classes.sidemenu}>
            <ProductForm Lists={categoriesData} />
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
