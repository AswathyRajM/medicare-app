import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Grow from "@mui/material/Grow";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Rating } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { styled } from "@mui/material/styles";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const useStyles = makeStyles({
  title: {
    fontWeight: "600",
  },
  rating: {
    width: "fit-content",
    backgroundColor: "#5CA239",
    color: "#fff",
    padding: "0 .2rem",
    fontSize: ".8rem",
  },
  flexbox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "nowrap",
    padding: "0",
    margin: "0",
  },
  text: {
    color: "#919191",
  },
  offerBox: {
    display: "flex",
    alignItems: "flex-start",
  },
  price: {
    color: "#E69A3A",
    fontWeight: 700,
  },
  image: {
    overflow: "hidden",
    height: "50%",
    display: "flex",
    justifyContent: "center",
  },
  offer: {
    backgroundColor: "#E44A21",
    color: "#fff",
    fontSize: ".8rem",
    height: "1.2rem",
    width: "4rem",
    position: "absolute",
    left: "0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    objectFit: "contain",
    height: "5rem",
  },
});

const ColorButton = styled(Button)(({ theme }) => ({
  color: "#fff",
  backgroundColor: "#E69A3A",
  height: "2rem",
  "&:hover": {
    backgroundColor: "#f2b463",
  },
}));

export default function ProductItem({ item }) {
  const [checked, setChecked] = React.useState(false);

  const classes = useStyles();
  const title = item.title.split(" ").slice(0, 3).join(" ");

  const product = {
    id: item.id,
    title: title,
    description: "500ml liquid bottle",
    price: item.price,
    rating: { rate: item.rating.rate, count: item.rating.count },
    img: item.image,
  };

  React.useEffect(() => {
    setChecked(true);
  }, []);

  return (
    <Box>
      <Grow
        in={checked}
        style={{ transformOrigin: "0 0 0" }}
        {...(checked ? { timeout: product.id * 150 } : {})}
      >
        <Card
          variant="outlined"
          sx={{ borderRadius: "10px", position: "relative" }}
        >
          <CardContent>
            <div className={classes.offer}>
              <label>50% Off</label>
            </div>
            <Box className={classes.image} pb={1}>
              <img className={classes.img} src={product.img} alt="product" />
            </Box>
            <Typography className={classes.title} pb={1}>
              {product.title}
            </Typography>
            <Typography
              className={classes.text}
              sx={{ fontSize: ".8rem" }}
              pb={1}
            >
              {product.description}
            </Typography>
            <Box className={classes.flexbox} pb={1}>
              <Rating
                name="read-only"
                value={product.rating.rate}
                readOnly
                size="small"
              />
              <div className={classes.rating}> {product.rating.rate}</div>
              <Typography className={classes.text} sx={{ fontSize: ".8rem" }}>
                {product.rating.count} Ratigs
              </Typography>
            </Box>
            <Box className={classes.offerBox} pb={1}>
              <Typography className={classes.text} sx={{ fontSize: ".8rem" }}>
                MRP
                <span
                  style={{ textDecoration: "line-through", paddingLeft: "5px" }}
                >
                  ₹{product.price}
                </span>
              </Typography>
              <Typography
                sx={{
                  fontSize: ".8rem",
                  color: "#5CA239",
                  pl: 1,
                }}
              >
                26% off
              </Typography>
            </Box>
            <Box className={classes.flexbox}>
              <Typography className={classes.price} variant="h">
                ₹{product.price}
              </Typography>
              <ColorButton
                variant="contained"
                startIcon={<ShoppingCartOutlinedIcon />}
              >
                Add
              </ColorButton>
            </Box>
          </CardContent>
        </Card>
      </Grow>
    </Box>
  );
}
