import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem } from "../store/cartReducer";
import Header from "./Header";

function CartComponent() {
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.cart);
  console.log(cartState[0]);
  function handleRemoveFromCartlist(index) {
    dispatch(removeItem({ productIndex: index }));
  }
  return (
    <div>
      <Header />
      {cartState[0].cartList.map((item, index) => (
        <div key={index} style={{ display: "flex", alignItems: "center" }}>
          <p>{item.name}</p>
          <button onClick={() => handleRemoveFromCartlist(index)}>del</button>
        </div>
      ))}
      <div>{cartState[1].totalPrice}</div>
    </div>
  );
}
export default CartComponent;
