import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";

import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import {
  Button,
  createTheme,
  Divider,
  FormControl,
  Select,
  ThemeProvider,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { MenuItem } from "@mui/material";
import PersonOutlineSharpIcon from "@mui/icons-material/PersonOutlineSharp";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

const useStyles = makeStyles({
  select: {
    height: "120%",
    "&:before": {
      borderBottom: "none",
    },
    "&:after": {
      borderBottom: "none",
    },
    "&:hover:not(.Mui-disabled):not(.Mui-focused):not(.Mui-error):before": {
      borderBottom: "none",
    },
  },
  appbar: {
    padding: 12,
    backgroundColor: "#E69A3A",
  },
  item: {
    width: "60%",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
});

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 1),
  marginRight: theme.spacing(2),
  marginLeft: 0,
  display: "flex",
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(6),
    width: "auto",
  },
}));

const LocationIconWrappwer = styled("div")(({ theme }) => ({
  padding: theme.spacing(1, 1, 1, 2),
  height: "auto",
  width: "fit-content",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  pointerEvents: "none",
  height: "auto",
  display: "inline-flex",
  paddingRight: theme.spacing(2),
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "black",
  "& .MuiInputBase-input": {
    padding: theme.spacing(0, 1, 0, 1),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "40ch",
    },
  },
}));

export default function PrimarySearchAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const classes = useStyles();

  const handleCartMenuopen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
      PaperProps={{
        style: {
          width: 270,
        },
      }}
    >
      <MenuItem
        onClick={handleMenuClose}
        style={{ justifyContent: "space-between", paddingBottom: 20 }}
      >
        <Typography style={{ fontSize: "1.2rem" }}>
          14 Items in your cart
        </Typography>
        <IconButton size="small" aria-label="Login" color="inherit">
          <CloseOutlinedIcon />
        </IconButton>
      </MenuItem>
      <MenuItem
        onClick={handleMenuClose}
        style={{ justifyContent: "space-between" }}
      >
        <Typography className={classes.item}> Item 1</Typography>
        <Typography style={{ paddingRight: 7 }}>12</Typography>
      </MenuItem>
      <MenuItem
        onClick={handleMenuClose}
        style={{ justifyContent: "space-between", textOverflow: "ellipsis" }}
      >
        <Typography className={classes.item}> Item 1</Typography>
        <Typography style={{ paddingRight: 7 }}>12</Typography>
      </MenuItem>
      <MenuItem
        onClick={handleMenuClose}
        style={{ justifyContent: "space-between", textOverflow: "ellipsis" }}
      >
        <Typography className={classes.item}>
          Item 1Item 1Item 1Item 1Item 1Item 1Item 1
        </Typography>
        <Typography style={{ paddingRight: 7 }}>12</Typography>
      </MenuItem>
      <MenuItem
        onClick={handleMenuClose}
        style={{ justifyContent: "space-between" }}
      >
        <Button
          fullWidth
          variant="contained"
          style={{ marginTop: 20, backgroundColor: "#E69A3A" }}
        >
          Checkout
        </Button>
      </MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton
          size="large"
          aria-label="Login"
          color="inherit"
        ></IconButton>
        <p>Login</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="Signup"
          color="inherit"
        ></IconButton>
        <p>Sign Up</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="account"
          color="inherit"
        ></IconButton>
        <p>Account</p>
      </MenuItem>
      <MenuItem onClick={handleCartMenuopen}>
        <IconButton
          size="large"
          aria-label="cart"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Cart</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        style={{
          padding: 12,
          backgroundColor: "#E69A3A",
        }}
      >
        <Toolbar sx={{ mx: 8 }}>
          <Typography
            variant="h4"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            Medicare
          </Typography>
          <Search>
            <LocationIconWrappwer>
              <LocationOnOutlinedIcon color="disabled" />
            </LocationIconWrappwer>
            <FormControl variant="standard">
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={10}
                // onChange={handleChange}
                className={classes.select}
              >
                <MenuItem value={10}>Ernakulam</MenuItem>
                <MenuItem value={20}>Ernakulam1</MenuItem>
                <MenuItem value={30}>Ernakulam2</MenuItem>
              </Select>
            </FormControl>
            <StyledInputBase
              placeholder="Search For Products, Brands & Categories"
              inputProps={{ "aria-label": "search" }}
            />
            <SearchIconWrapper>
              <SearchIcon color="disabled" sx={{ my: "auto" }} />
            </SearchIconWrapper>
          </Search>

          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton
              aria-label="Login"
              color="inherit"
              style={{ fontSize: "1rem" }}
            >
              Login
            </IconButton>
            <Divider
              orientation="vertical"
              flexItem
              color="white"
              sx={{ height: "1rem", my: "auto", mx: 1 }}
            />
            <IconButton
              size="small"
              aria-label="signup"
              color="inherit"
              style={{ fontSize: "1rem" }}
            >
              Sign Up
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <PersonOutlineSharpIcon />
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="cart"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleCartMenuopen}
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
                <ShoppingCartOutlinedIcon />
              </Badge>
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
