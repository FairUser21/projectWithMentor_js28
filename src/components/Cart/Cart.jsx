import {Container} from '@mui/system';
import React, {useEffect, useState} from 'react';
import {useProduct} from '../../contexts/ProductContextProvider';
import CartItem from './CartItem';

const Cart = () => {
   const [cartItems, setCartItems] = useState([
      {
         title: 'lycoris recoil',
         price: 987,
         img: 'https://static.zerochan.net/Lycoris.Recoil.full.3706694.jpg',
         type: 'action',
         id: 2,
      },
      {
         title: 'akame ga kill',
         price: 123,
         img: 'https://i.pinimg.com/originals/7b/ef/90/7bef90845b56b5c4d04db30fa196fd0c.jpg',
         type: 'fantasy',
         id: 3,
      },
      {
         title: 'monogatari',
         price: 111,
         img: 'https://images.alphacoders.com/244/244443.jpg',
         type: 'daily',
         id: 4,
      },
   ]);
   const {products, getProducts, fetchByParams} = useProduct();
   useEffect(() => {
      getProducts();
   }, []);

   return (
      <>
         <h1>My Cart</h1>
         <Container>
            {cartItems.map(cartItem => {
               {
                  return <CartItem item={cartItem} key={cartItem.id} />;
               }
            })}
         </Container>
      </>
   );
};

export default Cart;
