import ProductItem from "./ProductItem";

const ProductList = ({productItems}) => {

    const productItemComponents = productItems.map(productItem => {
        return 
        <ProductItem 
            key = {productItem.id}
            productItem={productItem}
        /> 
    })

    return (

        <div id = "product-list"> {productItemComponents} </div>


    ); 

};

export default ProductList;
