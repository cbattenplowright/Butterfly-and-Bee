import { createContext, useState } from "react";

// creating a context and return an object: provider + consumer
export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
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
    13: 0,
  });
  // adding functionality of adding to basket
  const addToBasket = (itemid) => {
    setBasketItemQuantityList((itemQuantityList) => ({
      // cloning basketListQuantity
      ...itemQuantityList,
      [itemid]: itemQuantityList[itemid] + 1,
    }));
    console.log(basketItemQuantityList);
  };
  const removeFromBasket = (itemid) => {
    setBasketItemQuantityList((itemQuantityList) => ({
      // cloning basketListQuantity
      ...itemQuantityList,
      [itemid]: itemQuantityList[itemid] - 1,
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
    const orderResponse = await fetch(
      "http://localhost:8080/customers/addOrder/1",
      {
        method: "PUT",
      }
    );

    const orderResponseData = await orderResponse.json();
    const orderId = orderResponseData.id;

    for (let itemid of Object.keys(basketItemQuantityList)) {
   
      const quantitySold = basketItemQuantityList[itemid]
      console.log(itemid);
      console.log(quantitySold);
      if (quantitySold > 0){
        const addQuantityToProductOrder = await fetch(
            `http://localhost:8080/orders/linkProdOrders/${itemid}/${quantitySold}`,
            {
              method: "PUT",
            }
          );
          console.log(await addQuantityToProductOrder.json());
      }
    }

    // const response2 = await fetch(
    //   "http://localhost:8080/orders/linkProdOrders/1/100",
    //   {
    //     method: "PUT",
    //   }
    // );

    const response3 = await fetch(
      "http://localhost:8080/orders/linkOrderProdOrder/3/1",
      {
        method: "PUT",
      }
    );

    console.log(await response3.json());
  };

  // create object called context value and add all functions in there
  // makes code more readable
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
  };
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
