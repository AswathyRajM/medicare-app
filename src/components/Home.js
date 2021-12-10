import React from "react";
import ProductContainer from "../components/ProductsContainer";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import SideFilter from "../components/SideFilter";
import ProductForm from "../components/ProductForm";
import CustomizedSlider from "../components/CustomizedSlider";

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

function Home() {
  const classes = useStyles();
  const Category = [
    {
      title: "Masks",
      subCategory: ["abc", "cdf"],
    },
    {
      title: "Masks1",
      subCategory: ["abc1", "cdf1"],
    },
    {
      title: "Masks2",
      subCategory: ["abc2", "cdf2"],
    },
    {
      title: "Masks3",
      subCategory: ["abc3", "cdf3"],
    },
    {
      title: "Masks4",
      subCategory: ["abc4", "cdf4"],
    },
    {
      title: "Masks5",
      subCategory: ["abc5", "cdf5"],
    },
  ];

  const Brands = [
    {
      title: "Fruits",
      subCategory: ["Orange", "Apple", "Mango"],
    },
    {
      title: "Fruits1",
      subCategory: ["Orange1", "Apple1", "Mango1"],
    },
    {
      title: "Fruits2",
      subCategory: ["Orange2", "Apple2", "Mango2"],
    },
    {
      title: "Fruits3",
      subCategory: ["Orange3", "Apple3", "Mango3"],
    },
    {
      title: "Fruits4",
      subCategory: ["Orange4", "Apple4", "Mango4"],
    },
  ];
  return (
    <Box className={classes.conatiner}>
      <Box className={classes.boxflex}>
        <Box className={classes.categoryContainer}>
          <Box className={classes.sidemenu}>
            <SideFilter title={"Category"} Lists={Category} />
          </Box>
          <Box className={classes.sidemenu}>
            <SideFilter title={"Brands"} Lists={Brands} />
          </Box>
          <Box className={classes.sidemenu}>
            <ProductForm title={"Product Form"} Lists={Brands} />
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

export default Home;
