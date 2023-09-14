import { useContext } from "react";
import { ShopContext } from "../contexts/ShopContext";
import BasketList from "./BasketList";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
    const navigate = useNavigate();
    const { productItems, basketItemQuantityList, createOrder, toggleModal } =
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
                    navigate("/");
                    toggleModal();
                }}
            >
                Buy now!
            </button>
        </div>
    );
};
export default Checkout;
