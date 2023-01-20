import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useEffect } from "react";
import { useProduct } from "../../contexts/ProductContextProvider";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const { products, getProducts } = useProduct();

  useEffect(() => {
    getProducts();
  }, []);
  
  console.log(products);
  return (
    <Container>
      <Box>
        <Grid container spacing={3}>
          <Grid
            item
            sx={{ justifyContent: "center", display: "flex", flexWrap: "wrap" }}
            md={9}
          >
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                minHeight: "40vh",
                mb: "3.5vh",
              }}
            >
              {products ? (
                products.map((item) => (
                  <ProductCard item={item} key={item.id} />
                ))
              ) : (
                <h2>Loading...</h2>
              )}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default ProductList;
