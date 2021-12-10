import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import ProductItem from "./ProductItem";
import Pagination from "@mui/material/Pagination";
import { Typography } from "@mui/material";
import PaginationItem from "@mui/material/PaginationItem";
import { makeStyles } from "@mui/styles";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../redux/action";

const useStyles = makeStyles({
  next: {
    textDecoration: "underline",
    fontWeight: 500,
    flex: 1,
    padding: "2rem",
  },
  pagination: {
    display: "flex",
    justifyContent: "center",
    position: "relative",
    padding: "4rem",
  },
  selected: {},
});

const Next = () => {
  let classes = useStyles();

  return (
    <Typography sx={{ flexGrow: 1 }} className={classes.next}>
      NEXT
    </Typography>
  );
};

export default function ProductsGrid() {
  const dispatch = useDispatch();
  const [products, setProducts] = React.useState([]);
  const productData = useSelector((state) => state.products);
  let classes = useStyles();

  React.useEffect(() => {
    dispatch(fetchProducts());

    if (productData !== undefined)
      if (productData.length > 0 && products.length <= 0) {
        let data1 = [...productData];
        setProducts(data1.slice(0, 16));
      }
  }, [dispatch, productData]);

  const handleChange = (event, value) => {
    if (value === 3) return;
    let startIndex = value * 16 - 16;
    let endValue = startIndex + 16;
    var endIndex = 0;

    if (productData !== undefined)
      if (productData.length > 0) {
        endValue > 21 ? (endIndex = productData.length) : (endIndex = endValue);
        let data = [...productData];
        let p = data.slice(startIndex, endIndex);
        setProducts([...p]);
      }
  };
  return (
    <>
      {products.length > 0 ? (
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 16 }}
          >
            {products.map((product, index) => (
              <Grid item xs={2} sm={4} md={4} key={index}>
                <ProductItem item={product} />
              </Grid>
            ))}
          </Grid>
          <Box className={classes.pagination}>
            <Pagination
              sx={{
                position: "relative",
                width: "auto",
                backgroundColor: "white",
              }}
              count={3}
              shape="rounded"
              hidePrevButton
              onChange={handleChange}
              renderItem={(item) => (
                <PaginationItem
                  sx={{
                    backgroundColor: "white",
                  }}
                  components={{ next: Next }}
                  {...item}
                  classes={{ selected: classes.selected }}
                />
              )}
            />
          </Box>
        </Box>
      ) : (
        <Box sx={{ flexGrow: 1, textAlign: "center" }}>
          <h3>Loading..</h3>
        </Box>
      )}
    </>
  );
}
