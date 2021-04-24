import React from "react";
import "./shopCard.styles.css";

const ShopCard = ({ shop: { product, quantity } }) => {
  return (
    <div className="shop-card">
      <div className="shopCard-left">
        <img src={product.media_url} alt={product.name} />
        <div className="shopCard-info">
          <h3 className="id">{product.id}</h3>
          <h2 className="title">{product.name}</h2>
          <h4 className="price">IDR {product.price}</h4>
          <p>{product.stock} in stock</p>
        </div>
      </div>
      <div className="shopCard-center">
        <input type="number" defaultValue={quantity} />
      </div>
      <div className="shopCard-right">
        <input type="number" defaultValue={quantity * product.price} />
      </div>
    </div>
  );
};

export default ShopCard;
