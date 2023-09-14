import { useContext } from "react";
import { ShopContext } from "../contexts/ShopContext";
import BasketList from "./BasketList";
import '/Checkout.css'

const Checkout = () => {
  const { productItems, basketItemQuantityList, createOrder } =
    useContext(ShopContext);
  return (
    <div>
      <BasketList
        productItems={productItems}
        basketItemQuantityList={basketItemQuantityList}
      />
      <button className="buy-now" onClick={() => createOrder()}>Buy now!</button>
    </div>
  );
};
export default Checkout;
