import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartComponent from "./components/CartComponent";
import ProductsComponent from "./components/ProductsComponent";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/cart" element={<CartComponent />} />
        <Route path="/" element={<ProductsComponent />} />
      </Routes>
    </BrowserRouter>
  );
}
