import ProductItem from "./ProductItem";

const ProductList = ({ filteredProductItems }) => {
    //Added safe navigation operator "?" which solved undefined map error
  const productItemComponents = filteredProductItems?.map((productItem) => {
    return <ProductItem key={productItem.id} productItem={productItem} />;
  });

  return <div id="product-list"> {productItemComponents} </div>;
};

export default ProductList;
