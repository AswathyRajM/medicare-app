import React from "react";
import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import ChevronLeftOutlinedIcon from "@mui/icons-material/ChevronLeftOutlined";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  iconConatiner: {
    display: "flex",
    flexDirection: "row",
  },
  flexContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

function Products() {
  const classes = useStyles();
  return (
    <Container className={classes.flexContainer}>
      <Box>
        <Typography>Shop by Category</Typography>
        <Box className={classes.iconConatiner}>
          <ChevronLeftOutlinedIcon />
          <ChevronRightOutlinedIcon />
        </Box>
      </Box>
    </Container>
  );
}

export default Products;
