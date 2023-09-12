import ProductItem from "./ProductItem";

const ProductList = ({ productItems }) => {
    //Added safe navigation operator "?" which solved undefined map error
  const productItemComponents = productItems?.map((productItem) => {
    return <ProductItem key={productItem.id} productItem={productItem} />;
  });

  return <div id="product-list"> {productItemComponents} </div>;
};

export default ProductList;
