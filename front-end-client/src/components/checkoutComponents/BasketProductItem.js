import { useContext } from "react";
import { ShopContext } from "../contexts/ShopContext";

const BasketProductItem = ({ productItem }) => {
  // links create context from ShopContext
  const { addToBasket, removeFromBasket } = useContext(ShopContext);
  return (
    <div className="product-item">
      <h4>{productItem.title}</h4>
      <img src={productItem.image} height={"200"} />
      <p>Price: £{(productItem.price / 100).toFixed(2)}</p>
      <p>Available quantity: {productItem.availableQuantity}</p>
      <button
        className="add-to-basket"
        onClick={() => {
          addToBasket(productItem.id);
        }}
      >
        Add
      </button>
      <button
        className="remove-from-basket"
        onClick={() => {
          removeFromBasket(productItem.id);
        }}
      >
        Subtract
      </button>
    </div>
  );
};
export default BasketProductItem;