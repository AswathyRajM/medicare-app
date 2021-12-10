import React from "react";
import { Typography } from "@mui/material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { Box } from "@mui/system";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  color: {
    display: "flex",
    color: "#797979",
    textTransform: "uppercase",
    height: "100%",
  },
  headingText: {
    textTransform: "uppercase",
    fontWeight: 600,
    padding: "1rem 0",
    fontSize: "1.5rem ",
  },
  heading: {
    height: "auto",
    display: "flex",
    alignItems: "center",
  },
  banner: {
    width: "100%",
    height: "auto",
    marginTop: "1rem",
    backgroundColor: "#f0f0f0",
    position: "relative",
    zIndex: 1,
  },
  textConatiner: {
    padding: "2rem",
    paddingLeft: "5rem",
    display: "flex",
    flexDirection: "column",
  },
  bannerText: {
    fontWeight: 700,
    zIndex: 999,
    fontSize: "2rem",
    paddingBottom: "1rem",
  },
  bannerSubText: {
    color: "#797979",
    fontWeight: 400,
    fontSize: "1.2rem",
  },
});

function Products() {
  const classes = useStyles();
  return (
    <Box>
      <Box className={classes.color}>
        <HomeOutlinedIcon />
        <Typography pl={3}>Covid</Typography>
      </Box>
      <Box
        className={classes.heading}
        sx={{
          height: "4rem",
        }}
      >
        <Typography variant="h" className={classes.headingText}>
          Covid test & prevention
        </Typography>
      </Box>
      <Box className={classes.banner}>
        <Box className={classes.textConatiner}>
          <Typography
            className={classes.bannerText}
            variant="h"
            sx={{
              letterSpacing: ".1rem",
            }}
          >
            Save Flat 50% extra on
          </Typography>
          <Typography
            className={classes.bannerText}
            variant="h"
            sx={{
              letterSpacing: ".1rem",
            }}
          >
            Medicines and enjoy free delivery
          </Typography>
          <Typography
            className={classes.bannerSubText}
            variant="h"
            sx={{
              letterSpacing: ".2rem",
            }}
          >
            For the whole month of December
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Products;
