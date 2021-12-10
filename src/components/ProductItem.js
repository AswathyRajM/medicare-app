import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Rating } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  rating: {
    width: "fit-content",
    backgroundColor: "#5CA239",
    color: "#fff",
    padding: "0 .2rem",
    fontSize: ".8rem",
  },
  ratingSection: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    flexWrap: "nowrap",
    padding: "0",
    margin: "0",
  },
  text: {
    color: "#919191",
  },
});

export default function OutlinedCard() {
  const classes = useStyles();
  const product = {
    id: 123,
    title: "Purell Hand Sanitiser",
    description: "500ml liquid bottle",
    price: 230,
    rating: { rate: 3.9, count: 120 },
  };
  return (
    <Box>
      <Card variant="outlined" sx={{ borderRadius: "10px" }}>
        <CardContent>
          <Typography>{product.title}</Typography>
          <Typography className={classes.text} sx={{ fontSize: ".8rem" }}>
            {product.description}
          </Typography>
          <Box className={classes.ratingSection}>
            <Rating
              name="read-only"
              value={product.rating.rate}
              readOnly
              size="small"
              sx={{ transform: "scale(.9)" }}
            />
            <div className={classes.rating}> {product.rating.rate}</div>
            <Typography className={classes.text} sx={{ fontSize: ".8rem" }}>
              {product.rating.count} Ratigs
            </Typography>
          </Box>
        </CardContent>
        <CardActions></CardActions>
      </Card>
    </Box>
  );
}
