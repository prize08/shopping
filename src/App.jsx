import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Module3Test from "./pages/module3Test";
import Cart from "./pages/cart";
import Wishlist from "./pages/wishlist";

import { CartProvider } from "./context/CartContext";
import { WishlistProvider } from "./context/WishlistContext";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <WishlistProvider>
          <Navbar />

          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/module3-test" element={<Module3Test />} />
          </Routes>
        </WishlistProvider>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
