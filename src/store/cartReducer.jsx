import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
const initialState = [{ cartList: [] }, { totalPrice: 0 }];
// const productList = useSelector((state) => state.products);

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state[1].totalPrice += action.payload.price;
      state[0].cartList.push(action.payload);

      console.log(action.payload);
    },

    removeItem: (state, action) => {
      state[1].totalPrice -=
        state[0].cartList[action.payload.productIndex].price;
      state[0].cartList.splice(action.payload.productIndex, 1);
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
