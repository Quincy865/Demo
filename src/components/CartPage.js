import React from 'react';

function CartPage({ cart, removeFromCart }) {
  // Calculate the total price of items in the cart
  const totalPrice = cart.reduce((acc, item) => acc + item.price, 0).toFixed(2);

  return (
    <div className="cart-page">
      <h2>Your Shopping Cart</h2>

      {cart.length > 0 ? (
        <div>
          <ul>
            {cart.map((item) => (
              <li key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} style={{ width: 50 }} />
                <div>
                  <h4>{item.name}</h4>
                  <p>${item.price}</p>
                  <button onClick={() => removeFromCart(item.id)}>Remove</button>
                </div>
              </li>
            ))}
          </ul>

          <div className="cart-total">
            <h3>Total: ${totalPrice}</h3>
          </div>
        </div>
      ) : (
        <p>Your cart is empty!</p>
      )}
    </div>
  );
}

export default CartPage;
