import { useContext } from "react";
import { ShopContext } from "../contexts/ShopContext";

const BasketProductItem = ({ productItem }) => {
  // links create context from ShopContext
  const { addToBasket } = useContext(ShopContext);
  return (
    <div className="basket-product-item">
      <img src={productItem.image} height={"200"} />
      <div className ="product-text-info">
      <h4>{productItem.title}</h4>
      <p>Price: £{(productItem.price / 100).toFixed(2)}</p>
      <p>Available quantity: {productItem.availableQuantity}</p>
      </div>
      <button
        className="add-to-basket"
        onClick={() => {
          addToBasket(productItem.id);
        }}
      >
        Add
      </button>
    </div>
  );
};
export default BasketProductItem;