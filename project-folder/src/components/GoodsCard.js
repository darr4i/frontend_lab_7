import React from 'react';

function GoodsCard({ name, cost, img }) {
  return (
    <div className="goods-card">
      <img src={img} alt={name} className="goods-image" />
      <h3>{name}</h3>
      <p>Cost: {cost} грн</p>
    </div>
  );
}

export default GoodsCard;
