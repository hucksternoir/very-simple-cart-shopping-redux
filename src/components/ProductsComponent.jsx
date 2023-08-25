import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromStock } from "../store/productsReducer";
import { addItem } from "../store/cartReducer";
import Header from "./Header";

function ProductsComponent() {
  const productList = useSelector((state) => state.products);
  const totalPrice = useSelector((state) => state.cart[0]);
  const dispatch = useDispatch();

  function handleRemoveFromStock(product, index) {
    dispatch(removeFromStock({ index: index }));
    dispatch(addItem(product));
    // console.log(totalPrice);
  }

  // const cartList = useSelector((state) => state.cart);
  // console.log(cartList);

  // function addItemToCart(price) {
  //   dispatch(addItem());
  //   cartList.total += price;
  //   // console.log(cartList.total);
  // }
  // productList.map((product, index) => {
  //   // console.log(product);
  // });

  return (
    <div>
      <Header />
      {productList.map((product, index) => (
        <div key={index}>
          <p>name: {product.name}</p>
          <p>price: {product.price}</p>
          <p> quantity: {product.quantity}</p>
          <p>id: {product.id}</p>
          <button onClick={() => handleRemoveFromStock(product, index)}>
            buy
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductsComponent;
