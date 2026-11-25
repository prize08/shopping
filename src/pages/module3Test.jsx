import sampleProducts from "../data/SampleProducts.js";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";

function Module3Test() {
  const { addToCart } = useCart();
  const { addToWishlist } = useWishlist();

  return (
    <div>
      <h1>Module 3 Testing Page</h1>

      <h2>Sample Products</h2>
      <div>
        <Link to="/cart">Go to Cart 🛒</Link>
        <br />
        <Link to="/wishlist">Go to Wishlist ❤️</Link>
      </div>

      {sampleProducts.map((product) => (
        <div key={product.id}>
          <img src={product.image} alt={product.name} width="120" />

          <h3>{product.name}</h3>

          <p>Price: ₹{product.price}</p>

          <button
            onClick={() => {
              addToCart(product);
              alert(product.name + " added to cart!");
            }}
          >
            Add to Cart
          </button>

          <button onClick={() => addToWishlist(product)}>
            Add to Wishlist ❤️
          </button>
        </div>
      ))}
    </div>
  );
}

export default Module3Test;
