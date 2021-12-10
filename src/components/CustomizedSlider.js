import * as React from "react";
import Slider from "@mui/material/Slider";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";
import {
  Card,
  CardContent,
  Collapse,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";

import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

const StyledTypography = styled(Typography)(`
  text-transform: uppercase;
  font-weight: bold !important;
`);

const StyledCardContent = styled(CardContent)(`
  padding: 0;
  &:last-child {
    padding-bottom: 0;
  }
  height: auto;
`);

const useStyles = makeStyles({
  texts: {
    fontWeight: 500,
  },
  textcontainer: {
    display: "flex",
    justifyContent: "space-between ",
  },
  nodeText: {
    textTransform: "uppercase",
    fontWeight: "bold",
    padding: ".8rem",
  },
  list: {
    padding: 0,
  },
});

const AirbnbSlider = styled(Slider)(({ theme }) => ({
  color: "#000",
  height: 3,
  padding: "13px 0",
  "& .MuiSlider-thumb": {
    height: 27,
    width: 27,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    "&:hover": {
      boxShadow: "0 0 0 8px rgba(58, 133, 137, 0.16)",
    },
    "& .airbnb-bar": {
      height: 9,
      width: 1,
      backgroundColor: "currentColor",
      marginLeft: 1,
      marginRight: 1,
    },
  },
  "& .MuiSlider-track": {
    height: 3,
  },
  "& .MuiSlider-rail": {
    color: theme.palette.mode === "dark" ? "#bfbfbf" : "#d8d8d8",
    opacity: theme.palette.mode === "dark" ? undefined : 1,
    height: 3,
  },
}));

export default function CustomizedSlider() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClick = (value) => () => {
    setOpen(!open);
  };
  return (
    <Card sx={{ width: "100%", padding: 0 }}>
      <StyledCardContent>
        <List
          sx={{
            width: "100%",
            maxWidth: 360,
            bgcolor: "background.paper",
            padding: 0,
            height: "100%",
          }}
          component="nav"
          aria-labelledby="nested-list-subheader"
        >
          <ListItemButton onClick={handleClick()}>
            <ListItemText
              disableTypography
              primary={
                <StyledTypography className={classes.nodeText}>
                  Price
                </StyledTypography>
              }
            />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>

          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ p: 3 }}>
              <Box className={classes.textcontainer}>
                <Typography className={classes.texts}>₹0</Typography>
                <Typography className={classes.texts}>₹10000</Typography>
              </Box>
              <AirbnbSlider
                getAriaLabel={(index) =>
                  index === 0 ? "Minimum price" : "Maximum price"
                }
                defaultValue={[0, 10000]}
              />
            </Box>
          </Collapse>
        </List>
      </StyledCardContent>
    </Card>
  );
}
