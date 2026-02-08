import React from "react";
import "./SearchBar.css"
export default function SearchBar() {
  return (
    <div>
      <div className="search-box-wrapper">
        <i className="fas fa-search search-icon"></i>

        <input
          type="text"
          id="quick-search"
          className="search-input"
          placeholder="Tìm kiếm nhanh..."
        />
      </div>
    </div>
  );
}
