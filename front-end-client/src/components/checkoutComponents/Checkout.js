import { useContext } from "react";
import { ShopContext } from "../contexts/ShopContext";
import BasketList from "./BasketList";

const Checkout = () => {
    const { productItems, basketItemQuantityList, createOrder } = useContext(ShopContext);
    // console.log(productItems);
    // console.log(basketItemQuantityList[productItems[1]]);
    // const basketItemComponents = productItems?.map((productItem) => {
    //     console.log(basketItemQuantityList);
    //     if (basketItemQuantityList[productItem.id.toString()] > 0) {
    //         return <BasketProductItem productItem={productItem} />;
    //     }
    // });
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
