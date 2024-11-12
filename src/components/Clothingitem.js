import React from 'react';

function ClothingItem({ item, addToCart }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px', width: '200px' }}>
      <h3>{item.name}</h3>
      <img src={item.image} alt={item.name} style={{ width: '100%', height: 'auto' }} />
      <p>Size: {item.size}</p>
      <p>Gender: {item.gender}</p>
      <p>Price: ${item.price}</p>
      <p>{item.stock > 0 ? `${item.stock} in stock` : 'Out of Stock'}</p>
      <button
        onClick={() => addToCart(item)}
        disabled={item.stock <= 0}
      >
        {item.stock > 0 ? 'Add to Cart' : 'Unavailable'}
      </button>
    </div>
  );
}

export default ClothingItem;

