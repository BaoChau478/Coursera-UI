import "./Header.css";
import SearchBar from "../../ui/SearchBar";
import logo from "../../../assets/logo.png";
import { FaShoppingCart, FaHistory } from "react-icons/fa";

export default function Header() {
  return (
    <div className="header">
      <div className="img-container">
        <img src={logo} alt="" className="img-logo" />
      </div>
      <div className="searchbar-container">
        <SearchBar />
      </div>
      <div className="header-actions">
        <button type="button" className="header-btn-login">
          Đăng nhập
        </button>
        <button type="button" className="header-icon-btn" aria-label="Lịch sử giao dịch">
          <FaHistory className="header-icon" />
        </button>
        <button type="button" className="header-icon-btn" aria-label="Giỏ hàng">
          <FaShoppingCart className="header-icon" />
        </button>
      </div>
    </div>
  );
}
