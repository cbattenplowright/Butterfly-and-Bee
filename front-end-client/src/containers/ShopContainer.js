import { useState, useEffect } from "react";

const ShopContainer = () => {
    const [productItems, setProductItems] = useState([]);
    const fetchProductItems = async () => {
        const response = await fetch ("http://localhost:8080/products");
        const data = await response.json();
        setProductItems(data);
        console.log(data);
    }

    useEffect(() => {
        fetchProductItems();
    },[]);
    return (
        <>
            <h1>Hello World!</h1>
        </>
    );
};

export default ShopContainer;
