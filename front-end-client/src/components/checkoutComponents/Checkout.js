import { useContext } from "react";
import { ShopContext } from "../contexts/ShopContext";
import BasketList from "./BasketList";

const Checkout = () => {
  const { productItems, basketItemQuantityList, createOrder } =
    useContext(ShopContext);
  return (
    <div>
      <BasketList
        productItems={productItems}
        basketItemQuantityList={basketItemQuantityList}
      />
      <button onClick={() => createOrder()}>Buy now!</button>
    </div>
  );
};
export default Checkout;
