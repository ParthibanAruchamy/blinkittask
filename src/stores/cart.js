// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   value: localStorage.getItem("CART") ? JSON.parse(localStorage.getItem("CART")) : [],
// };

// const cartSlice = createSlice({
//   name: "carts",
//   initialState,
//   reducers: {
//     setCart: (state, action) => {
//       state.value = action.payload;
//     },
//   },
// });

// export const { setCart } = cartSlice.actions;
// export default cartSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      console.log('state, action', state, action);
      const itemInCart = state.cart.find((item) => item?.id === action?.payload?.id);
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    incrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item?.id === action?.payload?.id);
      item.quantity++;
    },
    decrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item?.id === action?.payload?.id);
      if (item.quantity === 1) {
        const removeItem = state.cart.filter((item) => item.id !== action?.payload?.id);
        state.cart = removeItem;
      } else {
        item.quantity--;
      }
    },
    removeItem: (state, action) => {
      const removeItem = state.cart.filter((item) => item?.id !== action?.payload?.id);
      state.cart = removeItem;
    },
    clearCart: (state, action) => {
      state.cart = action?.payload;
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const { addToCart, incrementQuantity, decrementQuantity, removeItem, clearCart, } = cartSlice.actions;