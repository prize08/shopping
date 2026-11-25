
import React, { useState } from "react";

import products from "../data/products";
import ProductCard from "../components/ProductCard";
import ProductFilter from "../components/ProductFilter";
import SearchBar from "../components/SearchBar";
import ProductDetails from "./ProductDetails";

import "./Products.css";

function Products() {
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("All");
    const [sort, setSort] = useState("default");
    const [selectedProduct, setSelectedProduct] = useState(null);

    const filteredProducts = products
        .filter((product) =>
            product.name.toLowerCase().includes(search.toLowerCase())
        )
        .filter((product) =>
            category === "All" || product.category === category
        )
        .sort((a, b) => {
            if (sort === "low") return a.price - b.price;
            if (sort === "high") return b.price - a.price;
            if (sort === "rating") return b.rating - a.rating;
            return 0;
        });

    if (selectedProduct) {
        return (
            <ProductDetails
                product={selectedProduct}
                onBack={() => setSelectedProduct(null)}
            />
        );
    }

    return (
        <section className="products-section" id="products">

            <div className="products-heading">
                <span className="section-tag">OUR COLLECTION</span>
                <h1>Explore Our Products</h1>
                <p>
                    Discover premium fashion pieces curated just for you.
                </p>
            </div>

            <SearchBar
                search={search}
                setSearch={setSearch}
            />

            <ProductFilter
                category={category}
                setCategory={setCategory}
                sort={sort}
                setSort={setSort}
            />

            <div className="product-count">
                Showing {filteredProducts.length} products
            </div>

            <div className="products-grid">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            onViewDetails={setSelectedProduct}
                        />
                    ))
                ) : (
                    <p className="no-products">
                        No products found. Try another search!
                    </p>
                )}
            </div>

        </section>
    );
}

export default Products;