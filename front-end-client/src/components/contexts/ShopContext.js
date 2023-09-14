import { Component, createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

// creating a context and return an object: provider + consumer
export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
    const [customerOrderId, setCustomerOrderId] = useState();
    const [customerEmail, setCustomerEmail] = useState();
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    };

    const [productItems, setProductItems] = useState([]);
    const [filteredProductItems, setFilteredProductItems] = useState([]);
    // object that contains state of how many items are in basket per item
    const [basketItemQuantityList, setBasketItemQuantityList] = useState({
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
        6: 0,
        7: 0,
        8: 0,
        9: 0,
        10: 0,
        11: 0,
        12: 0,
        13: 0
    });

    // adding functionality of adding to basket
    const addToBasket = (itemid) => {
        setBasketItemQuantityList((itemQuantityList) => ({
            // cloning basketListQuantity
            ...itemQuantityList,
            [itemid]: itemQuantityList[itemid] + 1
        }));
        console.log(basketItemQuantityList);
    };
    const removeFromBasket = (itemid) => {
        setBasketItemQuantityList((itemQuantityList) => ({
            // cloning basketListQuantity
            ...itemQuantityList,
            [itemid]: itemQuantityList[itemid] - 1
        }));
        console.log(basketItemQuantityList);
    };

    const getBasketTotal = () => {
        let basketTotal = 0;
        for (const item in basketItemQuantityList) {
            if (
                basketItemQuantityList[item] > 0 &&
                productItems.find((product) => product.id === Number(item))
            ) {
                basketTotal +=
                    (basketItemQuantityList[item] *
                        productItems.find((product) => {
                            return product.id === Number(item);
                        }).price) /
                    100;
            }
        }
        return basketTotal.toFixed(2);
    };

    const createOrder = async () => {
        const orderResponse = await fetch("http://localhost:8080/customers/addOrder/1", {
            method: "PUT"
        });

        const orderResponseData = await orderResponse.json();
        const orderId = orderResponseData.id;
        setCustomerEmail(orderResponseData.customer.email);
        setCustomerOrderId(orderId);

        for (let itemid of Object.keys(basketItemQuantityList)) {
            const quantitySold = basketItemQuantityList[itemid];
            console.log(itemid);
            console.log(quantitySold);
            if (quantitySold > 0) {
                const linkProdOrdersResponse = await fetch(
                    `http://localhost:8080/orders/linkProdOrders/${itemid}/${quantitySold}`,
                    {
                        method: "PUT"
                    }
                );
                const linkProdOrdersResponseData = await linkProdOrdersResponse.json();
                const productOrderId = linkProdOrdersResponseData.id;

                const linkOrderProdOrderResponse = await fetch(
                    `http://localhost:8080/orders/linkOrderProdOrder/${orderId}/${productOrderId}`,
                    {
                        method: "PUT"
                    }
                );

                const linkOrderProdOrderResponseData = await linkOrderProdOrderResponse.json();

                console.log(linkOrderProdOrderResponseData);
                console.log(linkProdOrdersResponseData);
            }
        }

        setBasketItemQuantityList({
            1: 0,
            2: 0,
            3: 0,
            4: 0,
            5: 0,
            6: 0,
            7: 0,
            8: 0,
            9: 0,
            10: 0,
            11: 0,
            12: 0,
            13: 0
        });
    };

    const updateItemQuantity = (itemQuantity, productId) => {
        setBasketItemQuantityList((itemQuantityList) => ({
            ...itemQuantityList,
            [productId]: itemQuantity
        }));
    };

    const contextValue = {
        addToBasket,
        removeFromBasket,
        productItems,
        setProductItems,
        getBasketTotal,
        filteredProductItems,
        setFilteredProductItems,
        basketItemQuantityList,
        createOrder,
        modal,
        toggleModal,
        updateItemQuantity,
        customerEmail,
        customerOrderId
    };
    return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>;
};

export default ShopContextProvider;
