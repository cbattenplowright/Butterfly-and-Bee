import BasketProductItem from "./BasketProductItem";

const BasketList = ({ productItems, basketItemQuantityList }) => {
    const basketItemComponents = productItems?.map((productItem) => {
        const basketProductItems = [];
        if (basketItemQuantityList[productItem.id.toString()] > 0) {
            basketProductItems.push(<BasketProductItem productItem={productItem} />);
        }
        return basketProductItems;
    });

    return <div id="basket-list"> {basketItemComponents} </div>;
};

export default BasketList;
