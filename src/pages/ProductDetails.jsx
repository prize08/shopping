
import React from "react";

function ProductDetails({ product, onBack }) {
    if (!product) return null;

    return (
        <div className="product-details">
            <button className="back-button" onClick={onBack}>
                ← Back to Products
            </button>

            <div className="details-container">
                <img
                    src={product.image}
                    alt={product.name}
                />

                <div className="details-content">
                    <span>{product.category}</span>

                    <h1>{product.name}</h1>

                    <h3>⭐ {product.rating} / 5</h3>

                    <h2>
                        ₹{product.price.toLocaleString("en-IN")}
                    </h2>

                    <p>{product.description}</p>

                    <button className="details-button">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProductDetails;