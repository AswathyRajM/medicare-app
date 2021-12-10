import { Grid, Stack, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import React from "react";
import { styled } from "@mui/system";
import AppImage from "../images/appdownload.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import PaymentIcon from "@mui/icons-material/Payment";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";

const useStyles = makeStyles({
  root: {
    margin: "1rem 5rem",
  },
  box: {
    textAlign: "left",
    display: "flex",
    flexDirection: "row",
    alignItems: "stretch",
    justifyContent: "space-between",
    height: "fit-content",
  },
  image: {
    width: "auto",
  },
  icons: {
    display: "flex",
    flexWrap: "wrap",
    padding: ".7rem",
  },
  appContainer: {
    maxWidth: "12rem",
    display: "flex",
    justifyContent: "space-between",
  },
  heading: {
    fontWeight: 500,
    padding: "1.5rem",
  },
});

const StyledTypography = styled(Typography)(`
font-weight: 500;
font-size: 1.25rem;
margin-bottom: 2rem;
`);

function Footer() {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box
        sx={{
          display: "grid",
          gridAutoFlow: "row",
          gridTemplateColumns: "repeat(5, 1fr)",
          gridTemplateRows: "repeat(2, 50px)",
          gap: 1,
          textAlign: "left",
          marginBottom: "7rem",
        }}
      >
        <Stack>
          <StyledTypography>Know us</StyledTypography>
          <Typography mb={1}>Order Status</Typography>
          <Typography mb={1}>Shipping and Delivery</Typography>
          <Typography mb={1}>Returns</Typography>
          <Typography mb={1}> Payment Options</Typography>
          <Typography mb={1}>Contact Us</Typography>
        </Stack>
        <Stack>
          <StyledTypography>Information</StyledTypography>
          <Typography mb={1}>Gifts Cards</Typography>
          <Typography mb={1}>Find a Safe</Typography>
          <Typography mb={1}>Newsletter</Typography>
          <Typography mb={1}>Become a Member</Typography>
          <Typography mb={1}>Site Feedback </Typography>
        </Stack>
        <Stack>
          <StyledTypography>Links</StyledTypography>
          <Typography mb={1}>Company Overviews</Typography>
          <Typography mb={1}>Made in USA</Typography>
          <Typography mb={1}>Careers</Typography>
          <Typography mb={1}>Idea Submission</Typography>
          <Typography mb={1}>Student Discount</Typography>
        </Stack>
        <Stack>
          <StyledTypography>CONTACT</StyledTypography>
          <Typography mb={1}>contact@medicare.com</Typography>
          <Typography mb={1}>Hotline +1234567890</Typography>
        </Stack>
        <Stack className={classes.appContainer}>
          <Box className={classes.image}>
            <img
              style={{ objectFit: "contain", width: "12rem" }}
              src={AppImage}
              alt="app-download"
            />
          </Box>
          <Box className={classes.icons}>
            <FacebookIcon sx={{ paddingRight: "2rem" }} />
            <TwitterIcon sx={{ paddingRight: "2rem" }} />
            <LinkedInIcon sx={{ paddingRight: "2rem" }} />
            <InstagramIcon sx={{ paddingRight: "2rem" }} />
            <YouTubeIcon sx={{ paddingRight: "2rem" }} />
          </Box>
        </Stack>
      </Box>
      <Stack sx={{ padding: "4rem" }}>
        <Grid container spacing={10}>
          <Grid item xs={12}>
            <Typography
              style={{
                fontWeight: 500,
                textAlign: "center",
              }}
              variant="h5"
            >
              Why should you choose us?
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Box>
              <LocalShippingIcon
                fontSize="large"
                style={{
                  transform: "scale(1.5)",
                  color: "#242424",
                }}
              />
              <Typography
                className={classes.heading}
                sx={{ fontSize: "1.2rem" }}
              >
                Free Shipping
              </Typography>
              <Typography>
                Esse cillum non culpa do deserunt quis nostrud enim eu
                adipisicing. In deserunt minim minim deserunt aute dolore.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box>
              <PaymentIcon
                fontSize="large"
                style={{
                  transform: "scale(1.5)",
                  color: "#242424",
                }}
              />
              <Typography
                className={classes.heading}
                sx={{ fontSize: "1.2rem" }}
              >
                Easy Payments
              </Typography>
              <Typography>
                Esse cillum non culpa do deserunt quis nostrud enim eu
                adipisicing. In deserunt minim minim deserunt aute dolore.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box>
              <AccountBalanceWalletIcon
                fontSize="large"
                style={{
                  transform: "scale(1.5)",
                  color: "#242424",
                }}
              />
              <Typography
                className={classes.heading}
                sx={{ fontSize: "1.2rem" }}
              >
                Affordable
              </Typography>
              <Typography>
                Esse cillum non culpa do deserunt quis nostrud enim eu
                adipisicing. In deserunt minim minim deserunt aute dolore.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            @2019
          </Grid>
        </Grid>
      </Stack>
    </Box>
  );
}

export default Footer;
