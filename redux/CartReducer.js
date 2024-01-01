import { createSlice } from "@reduxjs/toolkit";

// Redux Toolkit se 'createSlice' function import kiya gaya hai.

export const CartReducer = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  // Redux slice create kiya gaya hai jiska naam "cart" hai, aur initial state mein ek khali array hai.

  reducers: {
    addToCart: (state, action) => {
      const itemPresent = state.cart.find(
        (item) => item.id === action.payload.id
      );
      // addToCart reducer mein dekha jata hai ki kya add kia gaya item pehle se cart mein hai ya nahi.

      if (itemPresent) {
        itemPresent.quantity++;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
      // Agar item cart mein already hai, toh uski quantity badha di jaati hai, warna naya item cart mein add kiya jata hai.
    },

    removeFromCart: (state, action) => {
      const removeItem = state.cart.filter(
        (item) => item.id == !action.payload.id
      );
      state.cart = removeItem;
      // removeFromCart reducer se specified item ko cart se remove kiya jata hai.
    },

    incrementQuantity: (state, action) => {
      const itemPresent = state.cart.find(
        (item) => item.id === action.payload.id
      );
      itemPresent.quantity++;
      // IncrementQuantity reducer se cart mein ek specific item ki quantity ko badha diya jata hai.
    },

    decrementQuantity: (state, action) => {
      const itemPresent = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (itemPresent.quantity === 1) {
        const removeItem = state.cart.filter(
          (item) => item.id == !action.payload.id
        );
        state.cart = removeItem;
      } else {
        itemPresent.quantity--;
      }
      // DecrementQuantity reducer se cart mein ek specific item ki quantity ko kam kiya jata hai.
    },

    cleanCart: (state, action) => {
      state.cart = [];
      // CleanCart reducer se cart ko saaf kar diya jata hai, yani sara cart empty ho jata hai.
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  decrementQuantity,
  incrementQuantity,
  cleanCart,
} = CartReducer.actions;
export default CartReducer.reducer;
