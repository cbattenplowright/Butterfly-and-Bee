import { useContext } from "react";
import { ShopContext } from "../contexts/ShopContext";
import BasketProductItem from "./BasketProductItem";


const Checkout = () => {

  const { productItems, basketItemQuantityList } = useContext(ShopContext);
    // console.log(productItems);
    // console.log(basketItemQuantityList[productItems[1]]);
    const basketItemComponents = productItems?.map((productItem) => {
        console.log(basketItemQuantityList);
      if (basketItemQuantityList[(productItem.id).toString()] > 0) {
        return <BasketProductItem productItem={productItem} />;
      }
    });
  return <div>{basketItemComponents}</div>;
};
export default Checkout;
