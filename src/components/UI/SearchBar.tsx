import React from "react";
import "./SearchBar.css"
import { FaSearch } from "react-icons/fa";
export default function SearchBar() {
  return (
    <div>
      <div className="search-box-wrapper">
      <FaSearch className="search-icon" />

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
