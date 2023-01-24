import {Button, CardMedia, Grid, Paper, Typography} from '@mui/material';
import {Box} from '@mui/system';
import React, {useState} from 'react';

const CartItem = ({item}) => {
   return (
      <Grid container spacing={5} alignItems="center">
         <Grid item>
            <Box
               component="img"
               sx={{
                  height: 50,
                  width: 50,
               }}
               src={item.img}
               alt={item.title}
            />
         </Grid>
         <Grid item>
            <Typography gutterBottom variant="p" component="div">
               {item.title}
            </Typography>
         </Grid>
         <Grid item>
            <Typography gutterBottom variant="p" component="div">
               {item.type}
            </Typography>
         </Grid>
         <Grid item>
            <Typography variant="p" color="text.secondary">
               Price: {item.price}
            </Typography>
         </Grid>
         <Grid item>
            <Typography variant="p" color="text.secondary">
               Quantity:
            </Typography>
         </Grid>
         <Grid item>
            <Button variant="outlined" size="small">
               Remove
            </Button>
         </Grid>
      </Grid>
   );
};

export default CartItem;
