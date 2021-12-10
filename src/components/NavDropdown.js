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
      <Box className={classes.boxContainer} sx={{ mx: 6.5 }}>
        {links.map((link, i) => {
          if (i === 0) {
            return (
              <Box className={classes.nav} sx={{ color: "#E69A3A" }}>
                <Typography>All Medicines</Typography>
                <KeyboardArrowDownIcon />
              </Box>
            );
          }
          return (
            <Box className={classes.nav}>
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
