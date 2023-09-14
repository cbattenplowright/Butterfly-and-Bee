import React, { useContext } from "react";
import { ShopContext } from "../contexts/ShopContext";
import "./ProductList.css";

const ProductItem = ({ productItem }) => {
    // links create context from ShopContext
    const { addToBasket, basketItemQuantityList } = useContext(ShopContext);
    return (
        <div className="product-item">
            <h4>{productItem.title}</h4>
            <img src={productItem.image} height={"200"} />
            <p>Price: £{(productItem.price / 100).toFixed(2)}</p>
            <p>Available quantity: {productItem.availableQuantity}</p>
            <div className="basket-button-amount-display">
                <button
                    className="add-to-basket"
                    onClick={() => {
                        addToBasket(productItem.id);
                    }}
                >
                    Add to basket
                </button>
                {/* Renders item quantity amount next to button */}
                {basketItemQuantityList[productItem.id] > 0 && (
                    <>{basketItemQuantityList[productItem.id]}</>
                )}
            </div>
        </div>
    );
};

export default ProductItem;
