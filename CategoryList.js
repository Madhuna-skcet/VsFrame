import React from 'react';
import { motion } from 'framer-motion';
import './CategoryList.css';

const categories = [
  { id: 1, name: 'Vision', image: 'https://i.pinimg.com/564x/7c/df/a6/7cdfa6d5e7bfeffefac8bb55429364c4.jpg' },
  { id: 2, name: 'Glasses', image: 'https://i.pinimg.com/564x/27/72/ea/2772ea150ced4238090e509193a99f06.jpg' },
  { id: 3, name: 'Sunglasses', image: 'https://i.pinimg.com/564x/20/15/f4/2015f4eef7459c3f5b2a23679e21fbf1.jpg' },
  { id: 4, name: 'Frames', image: 'https://i.pinimg.com/564x/ca/27/bc/ca27bc9f8820c61f4c557f624d39562e.jpg' },
];

const CategoryList = () => {
  return (
    <div className="category-list">
      {categories.map((category) => (
        <motion.div
          key={category.id}
          className="category-box"
          whileHover={{ scale: 1.05, boxShadow: '0px 20px 40px rgba(0, 0, 0, 0.2)' }}
          transition={{ duration: 0.3 }}
        >
          <img src={category.image} alt={category.name} className="category-image" />
          <div className="category-info">
            <h3 className="category-name">{category.name}</h3>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default CategoryList;
