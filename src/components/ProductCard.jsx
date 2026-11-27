
import React from "react";

function ProductCard({ product, onViewDetails }) {
    return (
        <div className="product-card">
            <div className="product-image-container">
                <img
                    src={product.image}
                    alt={product.name}
                    className="product-image"
                />
                <span className="product-category">
                    {product.category}
                </span>
            </div>

            <div className="product-info">
                <div className="product-rating">
                    ⭐ {product.rating}
                </div>

                <h3>{product.name}</h3>

                <p className="product-price">
                    ₹{product.price.toLocaleString("en-IN")}
                </p>

                <button
                    className="details-button"
                    onClick={() => onViewDetails(product)}
                >
                    View Details →
                </button>
            </div>
        </div>
    );
}

export default ProductCard;