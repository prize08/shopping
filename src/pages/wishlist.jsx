import { useWishlist } from "../context/WishlistContext";
import WishlistItem from "../components/WishlistItem";

function Wishlist() {
  // Access wishlist data
  const { wishlist } = useWishlist();

  return (
    <div className="wishlist-page">
      <h1>My Wishlist ❤️</h1>

      {/* Check whether wishlist is empty */}
      {wishlist.length === 0 ? (
        <h2>Your wishlist is empty!</h2>
      ) : (
        <div className="wishlist-products">
          {/* Display all favourite products */}
          {wishlist.map((item) => (
            <WishlistItem key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Wishlist;
