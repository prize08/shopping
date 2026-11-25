
const products = [
  {
    id: 1,
    name: "Classic White Shirt",
    category: "Men's Fashion",
    price: 1299,
    oldPrice: 1599,
    rating: "4.8",
    icon: "👕",
    tag: "Best Seller",
  },
  {
    id: 2,
    name: "Elegant Summer Dress",
    category: "Women's Fashion",
    price: 1899,
    oldPrice: 2299,
    rating: "4.9",
    icon: "👗",
    tag: "Trending",
  },
  {
    id: 3,
    name: "Casual Sneakers",
    category: "Footwear",
    price: 2499,
    oldPrice: 2999,
    rating: "4.7",
    icon: "👟",
    tag: "Popular",
  },
  {
    id: 4,
    name: "Premium Handbag",
    category: "Accessories",
    price: 1599,
    oldPrice: 1999,
    rating: "4.8",
    icon: "👜",
    tag: "New Arrival",
  },
];

function FeaturedProducts() {
  return (
    <section className="featured-section">
      <div className="section-heading">
        <p className="section-label">HANDPICKED FOR YOU</p>
        <h2>Featured Products</h2>
        <p>Discover our most loved picks of the season.</p>
      </div>

      <div className="products-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <div className="product-visual">
              <span className="product-tag">{product.tag}</span>
              <span className="product-emoji">{product.icon}</span>
              <button className="wishlist-btn" aria-label="Add to wishlist">
                ♡
              </button>
            </div>

            <div className="product-details">
              <p className="product-category">{product.category}</p>
              <h3>{product.name}</h3>
              <p className="product-rating">★ {product.rating}</p>

              <div className="product-price">
                <strong>₹{product.price.toLocaleString("en-IN")}</strong>
                <del>₹{product.oldPrice.toLocaleString("en-IN")}</del>
              </div>

              <button className="add-cart-btn">View Product</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturedProducts;
