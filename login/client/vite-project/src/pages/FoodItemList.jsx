// FoodItemList.js
import React from 'react';

const foodItems = [
  { name: 'Chocolate Cake', price: '$10', imageUrl: 'cake1.jpg' },
  { name: 'Cheesecake', price: '$8', imageUrl: 'cheesecake.jpg' },
  { name: 'Coffee', price: '$3', imageUrl: 'coffee.jpg' },
  // Add more food items...
];

const FoodItemList = ({ category }) => {
  const filteredFoodItems = category
    ? foodItems.filter((item) => item.category === category)
    : foodItems;

  return (
    <div className="food-item-list">
      <h2>{category || 'All Items'}</h2>
      <ul>
        {filteredFoodItems.map((item) => (
          <li key={item.name}>
            <img src={item.imageUrl} alt={item.name} />
            <div className="item-details">
              <h3>{item.name}</h3>
              <p>{item.price}</p>
              <button>Add to Cart</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FoodItemList;
