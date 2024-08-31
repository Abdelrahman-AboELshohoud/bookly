import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
    inCart: JSON.parse(localStorage.getItem("cart")) || [],
    favourites: [],
    inProcess: [],
    Bought: [],
  },
  reducers: {
    addToCart: (state, action) => {
      state.inCart = [...state.inCart, { id: action.payload, quantity: 1 }];
      localStorage.setItem("cart", JSON.stringify(state.inCart));
    },
    increaseInCart: (state, action) => {
      const bookId = action.payload;
      let book = state.inCart.find((child) => child.id === bookId);
      book.quantity++;
      console.log(book.quantity);
      localStorage.setItem("cart", JSON.stringify(state.inCart));
    },
    removeFromCart: (state, action) => {
      const bookId = action.payload;
      state.inCart = state.inCart.filter((e) => e.id !== bookId);
      localStorage.setItem("cart", JSON.stringify(state.inCart));
    },
    decreaseFromCart: (state, action) => {
      const bookId = action.payload;
      let book = state.inCart.find((child) => child.id === bookId);
      console.log(book, "i");
      book.quantity--;
      localStorage.setItem("cart", JSON.stringify(state.inCart));
    },
  },
});

export const { addToCart, removeFromCart, increaseInCart, decreaseFromCart } =
  userSlice.actions;

export default userSlice.reducer;
