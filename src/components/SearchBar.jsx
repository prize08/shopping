
import React from "react";

function SearchBar({ search, setSearch }) {
    return (
        <div className="product-search">
            <span>⌕</span>
            <input
                type="text"
                placeholder="Search your favourite products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
        </div>
    );
}

export default SearchBar;