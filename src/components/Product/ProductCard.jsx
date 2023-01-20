import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useProduct } from "../../contexts/ProductContextProvider";

const ProductCard = ({ item }) => {
  const { deleteProduct } = useProduct();
  const navigate = useNavigate();
  return (
    <Card sx={{ ml: 5 }}>
      <CardMedia
        component="img"
        height="140"
        width="200"
        image={item.img}
        alt={item.title}
      />

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.title}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {item.type}
        </Typography>
        <Typography gutterBottom variant="body2" component="div">
          {item.price}
        </Typography>
      </CardContent>

      <CardActions>
        <Button size="small" onClick={() => deleteProduct(item.id)}>
          Delete
        </Button>
        <Button size="small" onClick={() => navigate(`/edit/${item.id}`)}>
          Edit
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
