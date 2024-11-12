import React from 'react';

function Cart({ cart, removeFromCart }) {
  return (
    <div>
      <h2>Your Cart</h2>
      <ul>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cart.map((item, index) => (
            <li key={index}>
              {item.name} - ${item.price}
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </li>
          ))
        )}
      </ul>
      <h3>Total: ${cart.reduce((acc, item) => acc + item.price, 0)}</h3>
    </div>
  );
}

export default Cart;

