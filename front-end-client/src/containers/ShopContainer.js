import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ProductList from "../components/landingComponents/ProductList";

const ShopContainer = () => {

  const [productItems, setProductItems] = useState([]);

  const fetchProductItems = async () => {
    const response = await fetch("http://localhost:8080/products");
    const data = await response.json();
    setProductItems(data);
    console.log(data);
  };



  useEffect(() => {
    fetchProductItems();
  }, []);

  return (
    <>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/checkout">Check_out</Link>
        </li>
      </ul>
      <h1>Hello World!</h1>
    </>
  );
};

export default ShopContainer;
