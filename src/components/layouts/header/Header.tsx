import React from "react";
import "./Header.css";
import SearchBar from "../../UI/SearchBar";
import logo from "./../../../assets/logo.png";
export default function Header() {
  return (
    <div className="header">
      <div className="img-container">
        <img src={logo} alt="" className="img-logo" />
      </div>
      <div className="searchbar-container">
        <SearchBar />
      </div>
    </div>
  );
}
