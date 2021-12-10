import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import ProductItem from "./ProductItem";
import Pagination from "@mui/material/Pagination";
import { Typography } from "@mui/material";
import PaginationItem from "@mui/material/PaginationItem";
import { makeStyles } from "@mui/styles";

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
  let classes = useStyles();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 16 }}
      >
        {Array.from(Array(16)).map((_, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <ProductItem />
          </Grid>
        ))}
      </Grid>
      <Box className={classes.pagination}>
        <Pagination
          // variant="outlined"
          sx={{ position: "relative", width: "auto", backgroundColor: "white" }}
          count={3}
          shape="rounded"
          hidePrevButton
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
  );
}
