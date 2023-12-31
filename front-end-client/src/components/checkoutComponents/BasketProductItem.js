import { useContext } from "react";
import { ShopContext } from "../contexts/ShopContext";

const BasketProductItem = ({ productItem }) => {
  // links create context from ShopContext
  const { addToBasket, removeFromBasket, basketItemQuantityList, updateItemQuantity } = useContext(ShopContext);
  return (
    <div className="basket-product-item">
      <img src={productItem.image} height={"200"} />
      <div className ="product-text-info">
      <h4>{productItem.title}</h4>
      <p>Price: £{(productItem.price / 100).toFixed(2)}</p>
      <p>Available quantity: {productItem.availableQuantity}</p>
      </div>
      <button
        className="quantity-button"
        onClick={() => {
          removeFromBasket(productItem.id);
        }}
      >
        -
      </button>
      <input type="number" min={1} max={productItem.availableQuantity} value={basketItemQuantityList[productItem.id]}
      onChange={(event) => {
        updateItemQuantity(Number.parseInt(event.target.value), productItem.id);
      }}/>

      <button
        className="quantity-button"
        onClick={() => {
          addToBasket(productItem.id);
        }}
      >
        +
      </button>
    </div>
  );
};
export default BasketProductItem;