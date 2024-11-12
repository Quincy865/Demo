import React from 'react';
import { Link } from 'react-router-dom';

function Navbar({ setSearchQuery, setSizeFilter, setPriceFilter, setGenderFilter, cart }) {
  const totalItems = cart.length;
  const totalPrice = cart.reduce((acc, item) => acc + item.price, 0).toFixed(2);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSizeFilterChange = (e) => {
    setSizeFilter(e.target.value);
  };

  const handlePriceFilterChange = (e) => {
    setPriceFilter([Number(e.target.value), 200]); // Adjust this as necessary
  };

  const handleGenderFilterChange = (e) => {
    setGenderFilter(e.target.value);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h2>TreadThrends</h2>
      </div>
      <div className="navbar-center">
        <input
          type="text"
          placeholder="Search clothes..."
          onChange={handleSearchChange}
          className="search-input"
        />
      </div>
      <div className="navbar-right">
        <div className="filters">
          <label>Size:</label>
          <select onChange={handleSizeFilterChange}>
            <option value="">All</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
          </select>

          <label>Price:</label>
          <select onChange={handlePriceFilterChange}>
            <option value="5">Under $5</option>
            <option value="10">Under $10</option>
            <option value="15">Under $15</option>
            <option value="20">Over $20</option>
            <option value="50">Over $50</option>
        
          </select>

          <label>Gender:</label>
          <select onChange={handleGenderFilterChange}>
            <option value="">All</option>
            <option value="Men">Men</option>
            <option value="Women">Women</option>
            <option value="Unisex">Unisex</option>
          </select>
        </div>

        {/* Link to Cart Page */}
        <Link to="/cart">
          <div className="cart-icon">
            <span>🛒</span>
            <div className="cart-info">
              <span className="cart-count">{totalItems}</span>
              <span className="cart-price">${totalPrice}</span>
            </div>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
