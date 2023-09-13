import { useContext } from "react";
import { ShopContext } from "../contexts/ShopContext";
import BasketProductItem from "./BasketProductItem";

const Checkout = () => {
  const { productItems, basketItemQuantityList } = useContext(ShopContext);

    const basketItemComponents = productItems?.map((productItem) => {
      if (basketItemQuantityList[productItem.id] !== 0) {
        return <BasketProductItem productItem={productItem} />;
      }
    });

  return <div>{basketItemComponents}</div>;
};

export default Checkout;
