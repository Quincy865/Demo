import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Removed Link import
import Navbar from './components/Navbar';
import ClothingItem from './components/Clothingitem';
import CartPage from './components/CartPage';
import '/Users/qsnotfound/Development/code/phase-3/treadthrends/src/Navbar.css'

function App() {
  const [clothes, setClothes] = useState([]);
  const [cart, setCart] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [sizeFilter, setSizeFilter] = useState('');
  const [priceFilter, setPriceFilter] = useState([0, 100]); // Price range [min, max]
  const [genderFilter, setGenderFilter] = useState('');

  // Fetch clothes data from json-server
  useEffect(() => {
    fetch('http://localhost:3001/clothes')
      .then((response) => response.json())
      .then((data) => setClothes(data))
      .catch((error) => console.error("Error fetching clothes: ", error));
  }, []);

  const addToCart = (item) => {
    if (item.stock > 0) {
      // Update the item stock in the clothes state
      const updatedClothes = clothes.map((clothingItem) =>
        clothingItem.id === item.id
          ? { ...clothingItem, stock: clothingItem.stock - 1 }
          : clothingItem
      );
      setClothes(updatedClothes);  // Update the clothes state with the new stock value
  
      // Add the item to the cart
      setCart([...cart, item]);
    }
  };
  

  // Remove item from cart
  const removeFromCart = (itemId) => {
    setCart(cart.filter((item) => item.id !== itemId));
  };

  // Filter clothes based on filters and search query
  const filteredClothes = clothes.filter((item) => {
    const matchesSearchQuery = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSize = sizeFilter ? item.size === sizeFilter : true;
    const matchesGender = genderFilter ? item.gender === genderFilter : true;
    const matchesPrice = item.price >= priceFilter[0] && item.price <= priceFilter[1];

    return matchesSearchQuery && matchesSize && matchesGender && matchesPrice;
  });

  return (
    <Router>
      <div>
        {/* Navbar */}
        <Navbar
          setSearchQuery={setSearchQuery}
          setSizeFilter={setSizeFilter}
          setPriceFilter={setPriceFilter}
          setGenderFilter={setGenderFilter}
          cart={cart}
        />

        {/* Routes */}
        <Routes>
          {/* Home Page - Clothing Items */}
          <Route
            path="/"
            element={
              <div>
                <h2>Clothing Collection</h2>
                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                  {filteredClothes.length > 0 ? (
                    filteredClothes.map((item) => (
                      <ClothingItem key={item.id} item={item} addToCart={addToCart} />
                    ))
                  ) : (
                    <p>No items match your filter criteria.</p>
                  )}
                </div>
              </div>
            }
          />
          {/* Cart Page */}
          <Route
            path="/cart"
            element={<CartPage cart={cart} removeFromCart={removeFromCart} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
