function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <span className="collection">
          New Collection 2026
        </span>

        <h1>
          Discover <br />
          Style That <br />
          Defines You
        </h1>

        <p>
          Elevate your wardrobe with our curated
          collection of premium fashion.
          Exclusive designs, unmatched quality.
        </p>

        <div className="hero-buttons">
          <button className="shop-btn">Shop Now →</button>
          <button className="lookbook-btn">▷ View Lookbook</button>
        </div>

        <div className="features">
          <span>♧ Free Shipping</span>
          <span>↻ Easy Returns</span>
          <span>◷ 24/7 Support</span>
        </div>
      </div>

      <div className="hero-visual">
        <div className="fashion-card card-one">
          <span>✦</span>
          <h2>NEW</h2>
          <p>COLLECTION</p>
        </div>

        <div className="fashion-card card-two">
          <span>✧</span>
          <h2>LUXE</h2>
          <p>STYLE YOUR WAY</p>
        </div>

        <div className="rating-card">⭐ 4.9 Rating</div>
        <div className="trending-card">🔥 Trending</div>
        <div className="discount-card">-40% OFF</div>
      </div>
    </section>
  );
}

export default Hero;