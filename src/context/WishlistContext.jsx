import { createContext, useContext, useState } from "react";

// 1. Create Wishlist Context
const WishlistContext = createContext();

// 2. Create Wishlist Provider
export const WishlistProvider = ({ children }) => {
  // 3. Store wishlist products
  const [wishlist, setWishlist] = useState([]);

  // 4. Add product to wishlist
  const addToWishlist = (product) => {
    setWishlist((prevWishlist) => {
      const alreadyExists = prevWishlist.some((item) => item.id === product.id);

      if (alreadyExists) {
        return prevWishlist;
      }

      return [...prevWishlist, product];
    });
  };

  // 5. Remove product from wishlist
  const removeFromWishlist = (id) => {
    setWishlist((prevWishlist) =>
      prevWishlist.filter((item) => item.id !== id),
    );
  };

  // 6. Check whether product is in wishlist
  const isInWishlist = (id) => {
    return wishlist.some((item) => item.id === id);
  };

  // 7. Share wishlist data and functions
  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        addToWishlist,
        removeFromWishlist,
        isInWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

// 8. Custom hook
export const useWishlist = () => useContext(WishlistContext);
