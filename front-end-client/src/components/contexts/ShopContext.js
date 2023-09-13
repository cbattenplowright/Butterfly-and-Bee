import { createContext, useState } from "react";

// creating a context and return an object: provider + consumer
export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
    // object that contains state of how many items are in basket per item
    const [basketItemQuantityList, setBasketItemQuantityList] = useState();
    // adding functionality of adding to basket
    const addToCart = (itemid) => {
        setBasketItemQuantityList((itemQuantityList) => ({
            // cloning basketListQuantity
            ...itemQuantityList, [itemid]: itemQuantityList[itemid]+1

        }))
    }

    // create object called context value and add all functions in there
    // makes code more readable
    const contextValue = {addToCart};
    return <ShopContext.Provider value = {contextValue}>{props.children}</ShopContext.Provider>


}

