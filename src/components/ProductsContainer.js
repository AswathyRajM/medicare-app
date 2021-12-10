import React from "react";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import ChevronLeftOutlinedIcon from "@mui/icons-material/ChevronLeftOutlined";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import { makeStyles } from "@mui/styles";

import Products from "./Products";
import ProductsBanner from "./ProductsBanner";

const useStyles = makeStyles({
  iconConatiner: {
    display: "flex",
    flexDirection: "row",
    marginRight: "1rem",
  },
  flexContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    margin: "2rem 0",
  },
});

function ProductsContainer() {
  const classes = useStyles();

  return (
    <>
      <ProductsBanner />
      <Box>
        <Box className={classes.flexContainer}>
          <Typography sx={{ fontSize: "1rem", fontWeight: 500 }} variant="h">
            Shop by Category
          </Typography>
          <Box className={classes.iconConatiner}>
            <ChevronLeftOutlinedIcon
              size="large"
              style={{
                transform: "scale(1.5)",
                color: "#9e9e9e",
                marginTop: ".2rem",
              }}
            />
            <ChevronRightOutlinedIcon
              size="large"
              style={{
                transform: "scale(1.5)",
                cursor: "pointer",
              }}
            />
          </Box>
        </Box>
      </Box>
      <Products />
    </>
  );
}

export default ProductsContainer;
