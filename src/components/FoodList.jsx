import React from 'react'
import FoodItem from './FoodItem'

export default function FoodList({ foodData = [],setfoodid }) {
    return (
      <div>
        {foodData.map((food, index) => (
          <FoodItem key={index} setfoodid={setfoodid} food={food}  />
        ))}
      </div>
    );
  }
  