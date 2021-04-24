import React from "react";
import ShopCard from "../shopCard/shopCard.component";
import "./shop.styles.css";

const Shop = ({ shopData }) => {
  return (
    <div className="shop">
      <div className="header-container">
        <h3 className="name-product">PRODUCT</h3>
        <h3 className="quantity-product">QUANTITY</h3>
        <h3 className="subtotal-product">SUBTOTAL</h3>
      </div>
      <div className="body-container">
        {shopData?.map((shop, idx) => (
          <ShopCard key={idx} shop={shop} />
        ))}
      </div>
      <div className="footer-container">TOTAL: 69000000</div>
    </div>
  );
};

export default Shop;
