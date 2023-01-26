import {
  Button,
  CardMedia,
  Grid,
  Input,
  Paper,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useCart } from "../../contexts/CartContextProvider";

const CartItem = ({ item }) => {
  const { changeProductCount, deleteCartProduct } = useCart();
  return (
    <Grid container spacing={5} alignItems="center">
      <Grid item>
        <Box
          component="img"
          sx={{
            height: 50,
            width: 50,
          }}
          src={item.Item.img}
          alt={item.Item.title}
        />
      </Grid>
      <Grid item>
        <Typography gutterBottom variant="p" component="div">
          {item.Item.title}
        </Typography>
      </Grid>
      <Grid item>
        <Typography gutterBottom variant="p" component="div">
          {item.Item.type}
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="p" color="text.secondary">
          Price: {item.Item.price}
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="p" color="text.secondary">
          Quantity:
          <Input
            type="number"
            min={1}
            max={100}
            value={item.count}
            onChange={(e) => {
              changeProductCount(e.target.value, item.Item.id);
            }}
          ></Input>
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="p" color="text.secondary">
          Price: {item.subPrice}
        </Typography>
      </Grid>
      <Grid item>
        <Button
          variant="outlined"
          size="small"
          onClick={() => deleteCartProduct(item.Item.id)}
        >
          Remove
        </Button>
      </Grid>
    </Grid>
  );
};

export default CartItem;
