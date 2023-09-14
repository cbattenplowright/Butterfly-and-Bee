import ProductItem from "./ProductItem";
import './ProductList.css'

//ALL THE PRODUCTS
//DO GRID HERE
//ID = #product-list

const ProductList = ({ filteredProductItems }) => {
    //Added safe navigation operator "?" which solved undefined map error
  const productItemComponents = filteredProductItems?.map((productItem) => {
    return <ProductItem key={productItem.id} productItem={productItem} />;
  });

  return <div id="product-list"> {productItemComponents} </div>;
};

export default ProductList;
