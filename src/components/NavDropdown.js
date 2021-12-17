import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const links = [
  {
    title: "All Products",
    nav: "all-products",
  },
  {
    title: "Women's Cloths",
    nav: "womens-cloths",
  },
  {
    title: "Men's Cloths",
    nav: "mens-cloths",
  },
  {
    title: "Electronics",
    nav: "electronics",
  },
  {
    title: "Jewellery",
    nav: "jewellery",
  },
  {
    title: "Bags",
    nav: "bags",
  },
];

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
    transition: "color .2s ease",
    "&:hover": {
      color: "#E69A3A",
    },
  },
});

function NavDropdown() {
  const classes = useStyles();
  return (
    <>
      <Box
        className={classes.boxContainer}
        sx={{ mx: 6.5, display: { md: "flex", xs: "none" } }}
      >
        {links.map((link, i) => {
          return (
            <Box className={classes.nav} key={i}>
              <NavLink
                style={({ isActive }) => {
                  return {
                    color: isActive ? "#E69A3A" : "inherit",
                    textDecoration: "none",
                  };
                }}
                to={`/${link.nav}`}
              >
                <Typography>{link.title}</Typography>
              </NavLink>
            </Box>
          );
        })}
        <Outlet />
      </Box>
    </>
  );
}

export default NavDropdown;
