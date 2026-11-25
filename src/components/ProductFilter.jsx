
import React from "react";

function ProductFilter({
    category,
    setCategory,
    sort,
    setSort
}) {
    const categories = [
        "All",
        "Men",
        "Women",
        "Shoes",
        "Bags",
        "Accessories"
    ];

    return (
        <div className="product-filter">
            <div className="category-buttons">
                {categories.map((item) => (
                    <button
                        key={item}
                        className={
                            category === item ? "active-filter" : ""
                        }
                        onClick={() => setCategory(item)}
                    >
                        {item}
                    </button>
                ))}
            </div>

            <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
            >
                <option value="default">Sort By</option>
                <option value="low">Price: Low to High</option>
                <option value="high">Price: High to Low</option>
                <option value="rating">Top Rated</option>
            </select>
        </div>
    );
}

export default ProductFilter;