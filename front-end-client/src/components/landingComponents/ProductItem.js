import React from "react";

const ProductItem = ({ productItem }) => {
  return (
    <div className="product-item">
      <h4>{productItem.title}</h4>
      <img src = {productItem.image} height={"200"}/>
      <p>Price: £{(productItem.price / 100).toFixed(2)}</p>
      <p>Available quantity: {productItem.availableQuantity}</p>
      <button className="add-to-basket">Add to basket</button>
    </div>
  );
};

export default ProductItem;