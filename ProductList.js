// ProductList.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProductList.css';
import { useCart } from '../Context/CartContext';
import { useWishlist } from '../Pages/WishlistContext';

const ProductList = [
  { id: 1, image: 'https://m.media-amazon.com/images/I/41A0jZlgu5L._AC_UY1100_.jpg', name: 'Ray-Ban Wayfarer', price: 500, originalPrice: 600, rating: 4.5, category: 'Sunglasses' },
  { id: 2, image: 'https://rukminim2.flixcart.com/image/850/1000/xif0q/frame/j/d/i/52-na-gold-black-356-poshh-eyewear-original-imagmg6sf2mvmwdu.jpeg?q=90&crop=false', name: 'Oakley Holbrook', price: 600, originalPrice: 700, rating: 4.2, category: 'Sunglasses' },
  { id: 3, image: 'https://m.media-amazon.com/images/I/61S6aWpXeOL._AC_UY1100_.jpg', name: 'Warby Parker Beacon', price: 700, originalPrice: 800, rating: 4.7, category: 'Eyeglasses' },
  { id: 4, image: 'https://m.media-amazon.com/images/I/61r8fRpWoFL._AC_UY1100_.jpg', name: 'Persol PO0714', price: 800, originalPrice: 900, rating: 4.6, category: 'Eyeglasses' },
  { id: 5, image: 'https://m.media-amazon.com/images/I/71reDYxe6BL._AC_SL1500_.jpg', name: 'Gucci GG0061S', price: 900, originalPrice: 1000, rating: 4.8, category: 'Sunglasses' },
  { id: 6, image: 'https://m.media-amazon.com/images/I/71reDYxe6BL._AC_SL1500_.jpg', name: 'Prada PR 16MV', price: 1000, originalPrice: 1200, rating: 4.4, category: 'Eyeglasses' },
  { id: 7, image: 'https://m.media-amazon.com/images/I/71reDYxe6BL._AC_SL1500_.jpg', name: 'Maui Jim Red Sands', price: 1100, originalPrice: 1300, rating: 4.9, category: 'Sunglasses' },
];

const Cart = () => {
  const navigate = useNavigate();
  const { dispatch: cartDispatch } = useCart();
  const { dispatch: wishlistDispatch } = useWishlist();

  const handleProductClick = (id) => {
    navigate(`/product/${id}`);
  };

  const handleAddToCart = (item) => {
    cartDispatch({ type: 'ADD_TO_CART', payload: { ...item, quantity: 1 } });
  };

  const handleAddToWishlist = (item) => {
    wishlistDispatch({ type: 'ADD_TO_WISHLIST', payload: item });
  };

  return (
    <div className="cart-grid">
      {ProductList.map(item => (
        <div key={item.id} className="cart-box">
          <img src={item.image} alt={item.name} className="cart-image" onClick={() => handleProductClick(item.id)} />
          <div className="cart-details">
            <h3 className="cart-name">{item.name}</h3>
            <div className="cart-rating">
              <span className="cart-rating-star">&#9733;</span> {item.rating}
            </div>
            <p className="cart-price">₹{item.price}</p>
            <p className="cart-original-price">₹{item.originalPrice}</p>
            <p className="cart-category">{item.category}</p>
            <div className="cart-buttons">
              <button className="add-to-cart-button" onClick={() => handleAddToCart(item)}>
                <i className="fas fa-plus"></i> Add to Cart
              </button>
              <button className="wishlist-button" onClick={() => handleAddToWishlist(item)}>
                <i className="fas fa-heart"></i> Wishlist
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
