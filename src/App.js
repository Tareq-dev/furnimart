import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
import Home from "./pages/Home/Home";
import ProductList from "./pages/ProductList/ProductList";
import AdminDashboard from "./pages/AdminDashboard/AdminDashboard";
import Customers from "./pages/AdminDashboard/Customers";
import OrderList from "./pages/AdminDashboard/OrderList";
import ManageProducts from "./pages/AdminDashboard/ManageProducts";
import Admin from "./pages/AdminDashboard/Admin";
import AddProduct from "./components/AddProduct";
import useProducts from "./hooks/useProducts";
import Login from "./pages/Login/Login";
import RequireAuth from "./pages/Login/RequireAuth";

function App() {
  const [cart, setCart] = useState([]);

  // fetch products
  const [products] = useProducts([]);
  // Add to cart logic

  const addToCard = (product) => {
    const exist = cart.find((x) => x._id === product._id);

    if (exist) {
      setCart(
        cart.map((x) =>
          x._id === product._id ? { ...exist, quantity: exist.quantity + 1 } : x
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  // Remove item from cart logic
  const onRemoveCart = (product) => {
    const exist = cart.find((x) => x._id === product._id);
    if (exist.quantity === 1) {
      setCart(cart.filter((x) => x._id !== product._id));
    } else {
      setCart(
        cart.map((x) =>
          x._id === product._id ? { ...exist, quantity: exist.quantity - 1 } : x
        )
      );
    }
  };
  // Subtotal of cart

  const itemsPrice = cart.reduce((a, c) => a + c.quantity * c.price, 0);

  return (
    <div className="md:px-14 overflow-hidden">
      <Navbar cart={cart} />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              itemsPrice={itemsPrice}
              addToCard={addToCard}
              cart={cart}
              onRemoveCart={onRemoveCart}
            />
          }
        />
        <Route
          path="/products"
          element={
            <ProductList
              itemsPrice={itemsPrice}
              addToCard={addToCard}
              cart={cart}
              onRemoveCart={onRemoveCart}
            />
          }
        />
        <Route path="/login" element={<Login />} />
        <Route
          path="/cart"
          element={
            <Cart
              itemsPrice={itemsPrice}
              addToCard={addToCard}
              cart={cart}
              onRemoveCart={onRemoveCart}
            />
          }
        />
        <Route
          path="/admin/manage-product/add-product"
          element={<AddProduct />}
        />
        <Route
          path="/admin"
          element={
            <RequireAuth>
              <AdminDashboard />
            </RequireAuth>
          }
        >
          <Route index element={<Admin />}></Route>
          <Route path="customers" element={<Customers />}></Route>
          <Route path="order" element={<OrderList />}></Route>
          <Route path="manage-product" element={<ManageProducts />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
