import { useContext } from "react";
import { ShopContext } from "../contexts/ShopContext";
import BasketList from "./BasketList";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
    const navigate = useNavigate();
    const { productItems, basketItemQuantityList, createOrder, openModal } =
        useContext(ShopContext);
    return (
        <div>
            <BasketList
                productItems={productItems}
                basketItemQuantityList={basketItemQuantityList}
            />
            <button
                onClick={() => {
                    createOrder();
                    // navigate("/");
                    openModal();
                }}
            >
                Buy now!
            </button>
        </div>
    );
};
export default Checkout;
