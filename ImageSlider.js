import React, { useState, useEffect } from 'react';
import './ImageSlider.css';

const images = [
  'https://static1.lenskart.com/media/desktop/img/Dec22/1-Dec/Homepage-Banner-web.gif',
  'https://static5.lenskart.com/media/uploads/weblptt.jpg',
  'https://static5.lenskart.com/media/uploads/HooperPlay-UpdatedWebBanner.jpg',
  'https://static1.lenskart.com/media/desktop/img/republic/chic-metal/web.jpg'
];

const ImageSlider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedGender, setSelectedGender] = useState('All');
  const [priceRange, setPriceRange] = useState([0, 5000]);
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [selectedRating, setSelectedRating] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const scrollLeft = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const scrollRight = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const clearFilters = () => {
    setSelectedGender('All');
    setPriceRange([0, 5000]);
    setSelectedCategory([]);
    setSelectedRating(null);
  };

  return (
    <div>
      <div className="header-section">
        <h1 className='Perfect'>Discover Your Perfect Glasses!</h1>
        <div className="filter-sort">
          <select className="sort-dropdown">
            <option value="priceLowHigh">Sort By Price</option>
            <option value="priceLowHigh">Low to High</option>
            <option value="priceHighLow">High to Low</option>
          </select>
          <button className="filter-button" onClick={toggleSidebar}>
             Filters
          </button>
        </div>
      </div>
      <div className="divider"></div>
      <div className="image-slider">
        <img
          src={images[currentImageIndex]}
          alt="Slide"
          className="slider-image"
        />
        <button className="arrow left-arrow" onClick={scrollLeft}>
          <span className="arrow-icon">&#9664;</span>
        </button>
        <button className="arrow right-arrow" onClick={scrollRight}>
          <span className="arrow-icon">&#9654;</span>
        </button>
      </div>
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <h2>Filter Products</h2>
          <button className="close-button" onClick={toggleSidebar}>&times;</button>
        </div>
        <button className="clear-button" onClick={clearFilters}>Clear</button>
        <div className="filter-option">
          <h3>Gender</h3>
          <button className={`filter-btn ${selectedGender === 'All' ? 'selected' : ''}`} onClick={() => setSelectedGender('All')}>All</button>
          <button className={`filter-btn ${selectedGender === 'Men' ? 'selected' : ''}`} onClick={() => setSelectedGender('Men')}>Men</button>
          <button className={`filter-btn ${selectedGender === 'Women' ? 'selected' : ''}`} onClick={() => setSelectedGender('Women')}>Women</button>
          <button className={`filter-btn ${selectedGender === 'Unisex' ? 'selected' : ''}`} onClick={() => setSelectedGender('Unisex')}>Unisex</button>
        </div>
        <div className="filter-option">
          <h3>Price Range</h3>
          {/* Implement a range slider component or use an input element */}
          <input
            type="range"
            min="0"
            max="5000"
            value={priceRange[1]}
            onChange={(e) => setPriceRange([0, e.target.value])}
            className="range-slider"
          />
          <div className="range-values">
            <span>0</span>
            <span>5000</span>
          </div>
        </div>
        <div className="filter-option">
          <h3>Categories</h3>
          <button className={`filter-btn ${selectedCategory.includes('Vision') ? 'selected' : ''}`} onClick={() => setSelectedCategory(['Vision'])}>Vision</button>
          <button className={`filter-btn ${selectedCategory.includes('Sunglasses') ? 'selected' : ''}`} onClick={() => setSelectedCategory(['Sunglasses'])}>Sunglasses</button>
          <button className={`filter-btn ${selectedCategory.includes('Sports') ? 'selected' : ''}`} onClick={() => setSelectedCategory(['Sports'])}>Sports</button>
        </div>
        <div className="filter-option">
          <h3>Rating</h3>
          {/* Add rating filter options here */}
          <button className={`filter-btn ${selectedRating === 4 ? 'selected' : ''}`} onClick={() => setSelectedRating(4)}>4 & Up</button>
          <button className={`filter-btn ${selectedRating === 3 ? 'selected' : ''}`} onClick={() => setSelectedRating(3)}>3 & Up</button>
          <button className={`filter-btn ${selectedRating === 2 ? 'selected' : ''}`} onClick={() => setSelectedRating(2)}>2 & Up</button>
          <button className={`filter-btn ${selectedRating === 1 ? 'selected' : ''}`} onClick={() => setSelectedRating(1)}>1 & Up</button>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
