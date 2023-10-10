// MenuPage.js
import React, { useState } from 'react';
import CategoryList from './CategoryList';
import FoodItemList from './FoodItemList';

const MenuPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="menu-page">
      <h1>Restaurant Menu</h1>
      <div className="menu-content">
        <CategoryList onSelect={handleCategorySelect} />
        <FoodItemList category={selectedCategory} />
      </div>
    </div>
  );
};

export default MenuPage;
