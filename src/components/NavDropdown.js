import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  boxContainer: {
    width: "auto  ",
    height: "auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    borderBottom: "1px solid #cfcfcf",
    paddingBottom: "1rem",
    paddingTop: "1rem",
  },
  nav: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "1rem",
    cursor: "pointer",
  },
});

function NavDropdown() {
  const classes = useStyles();
  const links = [
    "Women's Cloths",
    "Men's Cloths",
    "Electronics",
    "Jewellery",
    "Bags",
  ];
  return (
    <>
      <Box
        className={classes.boxContainer}
        sx={{ mx: 6.5, display: { md: "flex", xs: "none" } }}
      >
        {links.map((link, i) => {
          if (i === 0) {
            return (
              <Box className={classes.nav} sx={{ color: "#E69A3A" }} key={i}>
                <Typography>All Products</Typography>
                <KeyboardArrowDownIcon />
              </Box>
            );
          }
          return (
            <Box className={classes.nav} key={i}>
              <Typography>{link}</Typography>
              <KeyboardArrowDownIcon />
            </Box>
          );
        })}
      </Box>
    </>
  );
}

export default NavDropdown;
