import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useProduct } from "../../contexts/ProductContextProvider";

const AddProduct = () => {
  const { addProduct } = useProduct();

  const [product, setProduct] = useState({
    title: "",
    price: 0,
    img: "https://media.istockphoto.com/id/1357365823/vector/default-image-icon-vector-missing-picture-page-for-website-design-or-mobile-app-no-photo.jpg?s=612x612&w=0&k=20&c=PM_optEhHBTZkuJQLlCjLz-v3zzxp-1mpNQZsdjrbns=",
    type: "",
  });

  const handleChange = (e) => {
    if (e.target.name === "price") {
      let obj = { ...product, [e.target.name]: Number(e.target.value) };
      setProduct(obj);
    } else {
      let obj = { ...product, [e.target.name]: e.target.value };
      setProduct(obj);
    }
  };

  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <Typography>Add Product Panel</Typography>
      <TextField
        id="outlined-basic"
        variant="outlined"
        name="title"
        label="Title"
        onChange={handleChange}
      ></TextField>

      <TextField
        id="outlined-basic"
        variant="outlined"
        name="img"
        label="Img"
        onChange={handleChange}
      ></TextField>

      <TextField
        id="outlined-basic"
        variant="outlined"
        name="price"
        label="Price"
        onChange={handleChange}
      ></TextField>

      <TextField
        id="outlined-basic"
        variant="outlined"
        name="type"
        label="Type"
        onChange={handleChange}
      ></TextField>

      <Button
        variant="outlined"
        onClick={() => {
          addProduct(product);
        }}
      >
        AddProduct
      </Button>
    </Box>
  );
};

export default AddProduct;
