// CategoryList.js
import React from 'react';

const categories = ['Cakes', 'Desserts', 'Drinks'];

const CategoryList = ({ onSelect }) => {
  return (
    <div className="category-list">
      <h2>Categories</h2>
      <ul>
        {categories.map((category) => (
          <li key={category} onClick={() => onSelect(category)}>
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;
