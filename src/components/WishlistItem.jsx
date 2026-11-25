import { useWishlist } from "../context/WishlistContext";
import { useCart } from "../context/CartContext";

function WishlistItem({ item }) {
  const { removeFromWishlist } = useWishlist();

  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(item);
    removeFromWishlist(item.id);
  };

  return (
    <div className="wishlist-item">
      {/* Product Image */}
      <img src={item.image} alt={item.name} width="120" />

      {/* Product Details */}
      <div>
        <h3>{item.name}</h3>

        <p>Price: ₹{item.price}</p>

        {/* Add to Cart */}
        <button onClick={handleAddToCart}>Add to Cart</button>

        {/* Remove from Wishlist */}
        <button onClick={() => removeFromWishlist(item.id)}>Remove</button>
      </div>
    </div>
  );
}

export default WishlistItem;
