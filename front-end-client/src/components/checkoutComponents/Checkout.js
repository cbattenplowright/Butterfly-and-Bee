import { useContext } from "react";
import { ShopContext } from "../contexts/ShopContext";
import BasketList from "./BasketList";
import { useNavigate } from "react-router-dom";
import './Checkout.css'

const Checkout = () => {
  const navigate = useNavigate();
  const { productItems, basketItemQuantityList, createOrder } =
    useContext(ShopContext);
  return (
    <div>
      <BasketList
        productItems={productItems}
        basketItemQuantityList={basketItemQuantityList}
      />
      <button className="buy-now-button"onClick={() => {createOrder(); navigate("/")}} >Buy now!</button>
    </div>
  );
};
export default Checkout;