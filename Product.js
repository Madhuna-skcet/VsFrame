import React from 'react';
import { useParams } from 'react-router-dom';
import './Product.css';

const ProductList = [
  { id: 1, image: 'https://m.media-amazon.com/images/I/41A0jZlgu5L._AC_UY1100_.jpg', name: 'Ray-Ban Wayfarer', price: 500, originalPrice: 600, rating: 4.5, category: 'Sunglasses' },
  { id: 2, image: 'https://rukminim2.flixcart.com/image/850/1000/xif0q/frame/j/d/i/52-na-gold-black-356-poshh-eyewear-original-imagmg6sf2mvmwdu.jpeg?q=90&crop=false', name: 'Oakley Holbrook', price: 600, originalPrice: 700, rating: 4.2, category: 'Sunglasses' },
  { id: 3, image: 'https://m.media-amazon.com/images/I/61S6aWpXeOL._AC_UY1100_.jpg', name: 'Warby Parker Beacon', price: 700, originalPrice: 800, rating: 4.7, category: 'Eyeglasses' },
  { id: 4, image: 'https://m.media-amazon.com/images/I/61r8fRpWoFL._AC_UY1100_.jpg', name: 'Persol PO0714', price: 800, originalPrice: 900, rating: 4.6, category: 'Eyeglasses' },
  { id: 5, image: 'https://m.media-amazon.com/images/I/71reDYxe6BL._AC_SL1500_.jpg', name: 'Gucci GG0061S', price: 900, originalPrice: 1000, rating: 4.8, category: 'Sunglasses' },
  { id: 6, image: 'https://m.media-amazon.com/images/I/71reDYxe6BL._AC_SL1500_.jpg', name: 'Prada PR 16MV', price: 1000, originalPrice: 1200, rating: 4.4, category: 'Eyeglasses' },
  { id: 7, image: 'https://m.media-amazon.com/images/I/71reDYxe6BL._AC_SL1500_.jpg', name: 'Maui Jim Red Sands', price: 1100, originalPrice: 1300, rating: 4.9, category: 'Sunglasses' },// other products
  // other products
];

const Product = () => {
  const { id } = useParams();
  const product = ProductList.find(p => p.id === parseInt(id, 10));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="product-wrapper">
      <div className="product-content">
        <div className="product-image-container">
          <img src={product.image} alt={product.name} className="product-image" />
        </div>
        <div className="product-details-container">
          <h1 className="product-name">{product.name}</h1>
          <div className="product-rating">
            <span className="rating-star">&#9733;</span> {product.rating}
          </div>
          <p className="product-description">{product.description}</p>
          <div className="product-info">
            <p><strong>Category:</strong> {product.category}</p>
          </div>
          <div className="product-price">
            <p className="price">₹{product.price}</p>
            <p className="original-price">₹{product.originalPrice}</p>
          </div>
          <div className="product-buttons">
            <button className="add-to-cart-button">
              <i className="fas fa-shopping-cart"></i> Add to Cart
            </button>
            <button className="wishlist-button">
              <i className="fas fa-heart"></i> Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
