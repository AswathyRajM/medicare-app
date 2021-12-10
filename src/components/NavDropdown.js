import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  boxContainer: {
    width: "auto",
    height: "auto",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottom: "1px solid #cfcfcf",
    paddingBottom: "1rem",
    paddingTop: "1rem",
  },
  nav: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "1rem",
    color: "#E69A3A",
    cursor: "pointer",
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
      <Box className={classes.boxContainer} sx={{ mx: 5 }}>
        <Box className={classes.nav}>
          <Typography>All Medicines</Typography>
          <KeyboardArrowDownIcon />
        </Box>
        {links.map((link) => {
          return (
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "1rem",
                cursor: "pointer",
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
