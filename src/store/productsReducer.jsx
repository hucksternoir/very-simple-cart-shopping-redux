import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { name: "notebook", quantity: 5, price: 10, id: 1 },
  { name: "tv", quantity: 7, price: 5, id: 2 },
];
const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    removeFromStock: (state, action) => {
      // console.log(action.payload);
      const { index } = action.payload;
      // console.log(index);
      if (state[index].quantity >= 1) {
        state[index].quantity -= 1;
      } else {
        console.log("fora de estoque");
      }
    },
  },
});

export const { removeFromStock } = productsSlice.actions;
export default productsSlice.reducer;
