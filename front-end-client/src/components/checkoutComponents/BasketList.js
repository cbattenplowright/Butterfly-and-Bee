import BasketProductItem from "./BasketProductItem";

const BasketList = ({ productItems, basketItemQuantityList }) => {
    const basketItemComponents = productItems?.map((productItem) => {
        const basketProductItems = [];
        if (basketItemQuantityList[productItem.id] > 0 || isNaN(basketItemQuantityList[productItem.id])) {
            basketProductItems.push(<BasketProductItem productItem={productItem} />);
        }
        return basketProductItems;
    });

    return <div id="basket-list"> {basketItemComponents} </div>;
};

export default BasketList;