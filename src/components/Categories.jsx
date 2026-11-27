const categories = [
  { id: 1, name: "Men", subtitle: "Explore men's fashion", icon: "👔", color: "men" },
  { id: 2, name: "Women", subtitle: "Discover your style", icon: "👗", color: "women" },
  { id: 3, name: "Footwear", subtitle: "Step into comfort", icon: "👟", color: "footwear" },
  { id: 4, name: "Accessories", subtitle: "Complete your look", icon: "👜", color: "accessories" },
];

function Categories() {
  return (
    <section className="categories-section">
      <div className="section-heading">
        <p className="section-label">EXPLORE OUR COLLECTION</p>
        <h2>Shop by Categories</h2>
        <p>Find everything you need to define your style.</p>
      </div>

      <div className="categories-grid">
        {categories.map((category) => (
          <div className={`category-card ${category.color}`} key={category.id}>
            <span className="category-icon">{category.icon}</span>
            <div className="category-info">
              <h3>{category.name}</h3>
              <p>{category.subtitle}</p>
              <span className="category-link">Explore →</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Categories;
