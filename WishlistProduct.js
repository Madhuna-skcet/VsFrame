import React, { useState } from 'react';
import './W.css';

// Sample data with product images
const sampleWishlistItems = [
  {
    id: 1,
    productName: 'Stylish Sunglasses',
    rating: 4.5,
    price: 1200,
    brand: 'BrandX',
    imageUrl: 'https://i.pinimg.com/564x/93/2b/25/932b253072f297913d977242e1489d30.jpg'
  },
  {
    id: 2,
    productName: 'Classic Eyewear',
    rating: 4.0,
    price: 1500,
    brand: 'BrandY',
    imageUrl: 'https://i.pinimg.com/564x/1a/29/3f/1a293f24e6f431f4aab530786f8c7369.jpg'
  }
];

// WishlistProduct Component
const WishlistProduct = () => {
  const [wishlistItems, setWishlistItems] = useState(sampleWishlistItems);

  const handleAddToBag = (itemId) => {
    // Logic to add item to bag and remove from wishlist
    console.log(`Item ${itemId} added to bag`);
    setWishlistItems(wishlistItems.filter(item => item.id !== itemId));
  };

  return (
    <div className="wishlist-container">
      {wishlistItems.length === 0 ? (
        <div className="empty-wishlist">
          <img src="https://eyesome.netlify.app/static/media/empty-wish.5af0d55ffd0f31b86c32.gif" alt="Empty Wishlist" className="empty-image" />
          <h2>Nothing to Show!</h2>
          <p>Unlock Your Shopping Desires: Fill Your Empty Wishlist</p>
        </div>
      ) : (
        <div className="wishlist-items">
          {wishlistItems.map(item => (
            <div key={item.id} className="wishlist-item">
              <img src={item.imageUrl} alt={item.productName} className="product-image" />
              <div className="item-details">
                <h3 className="product-name">{item.productName}</h3>
                <div className="rating">Rating: {item.rating} ⭐</div>
                <div className="price">₹{item.price}</div>
                <div className="brand">Brand: {item.brand}</div>
                <button className="add-to-bag" onClick={() => handleAddToBag(item.id)}>Add to Bag</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WishlistProduct;
