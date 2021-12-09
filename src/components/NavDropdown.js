import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  boxContainer: {
    width: "100%",
    height: "auto",
    alignItems: "center",
    justifyContent: "center",
    borderBottom: "1px solid #cfcfcf",
    paddingBottom: "1rem",
    paddingTop: "1rem",
  },
  nav: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "1rem",
  },
  navlink: {
    textDecoration: "none",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

function NavDropdown() {
  const classes = useStyles();
  const links = [
    "COVID Test & Prevention",
    "Healthcare Products",
    "Featured",
    "Fitness & Suppliments",
    "Diabetes",
    "Personal Care",
    "Special Offers",
  ];
  return (
    <>
      <Box className={classes.boxContainer}>
        <Box className={classes.nav}>
          <NavLink
            style={{
              color: "#E69A3A",
            }}
            className={classes.navlink}
            to={"/home"}
            key={"home"}
          >
            <Typography>All Medicines</Typography>
            <KeyboardArrowDownIcon />
          </NavLink>
        </Box>
        {links.map((link) => {
          return (
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "1rem",
              }}
            >
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
