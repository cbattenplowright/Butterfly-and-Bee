import { useState, useEffect } from "react";
import ProductList from "../components/landingComponents/ProductList";
import Filters from "../components/landingComponents/Filters";

const ShopContainer = () => {
    const [productItems, setProductItems] = useState([]);

    const fetchProductItems = async () => {
        const response = await fetch("http://localhost:8080/products");
        const data = await response.json();
        setProductItems(data);
        console.log(data);
    };

    const fetchMovies = async () => {
        const response = await fetch("http://localhost:8080/products/movies");
        const data = await response.json();
        setProductItems(data);
        console.log(data);
    };

    const fetchBooks = async () => {
        const response = await fetch("http://localhost:8080/products/books");
        const data = await response.json();
        setProductItems(data);
        console.log(data);
    };

    const fetchSongs = async () => {
        const response = await fetch("http://localhost:8080/products/songs");
        const data = await response.json();
        setProductItems(data);
        console.log(data);
    };

    const fetchProductItemsBySearchQuery = async (searchQuery) => {
        const movieResponse = await fetch("http://localhost:8080/products/movie/${searchQuery}")
        const bookResponse = await fetch("http://localhost:8080/products/books/${searchQuery}")
        const musicResponse = await fetch("http://localhost:8080/products/songs/${searchQuery}")
        const data = await movieResponse.json() && bookResponse.json() && musicResponse.json();
        setProductItems(data);
        console.log(data);
    }

    useEffect(() => {
        fetchProductItems();
    }, []);


    return (
        <>
            <h1>Hello World!</h1>
            <Filters
                fetchMovies={fetchMovies}
                fetchBooks={fetchBooks}
                fetchSongs={fetchSongs}
                fetchProductItems={fetchProductItems}
                fetchProductItemsBySearchQuery={fetchProductItemsBySearchQuery}
            />
            <ProductList productItems={productItems} />
        </>
    );
};

export default ShopContainer;
