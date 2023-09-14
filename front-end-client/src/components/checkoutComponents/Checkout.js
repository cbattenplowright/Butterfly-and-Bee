import { useContext } from "react";
import { ShopContext } from "../contexts/ShopContext";
import BasketList from "./BasketList";
import { useNavigate } from "react-router-dom";
import "./Checkout.css";
const Checkout = () => {
    const navigate = useNavigate();
    const { productItems, basketItemQuantityList, createOrder, toggleModal, getBasketTotal } = useContext(ShopContext);
    return (
        <div className="checkout-page">
            <div className = "basket-list">
            <BasketList
                productItems={productItems}
                basketItemQuantityList={basketItemQuantityList}
            />
            </div>
            <div className="order-summary">
                <h5>Order Summary</h5>
                <h6>Total: £{getBasketTotal()}</h6>
                <button className="buy-now-button"
                onClick={() => {
                    createOrder();
                    navigate("/");
                    toggleModal();
                }}
            >
                Buy now!
            </button>
            </div>
        </div>
    );
};
export default Checkout;