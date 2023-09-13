import React, { useState, useEffect, useContext } from "react";
import Filters from "../components/landingComponents/Filters";
import ProductItem from "../components/landingComponents/ProductItem";
import { ShopContext } from "../components/contexts/ShopContext";
import ProductList from "../components/landingComponents/ProductList";

const ShopContainer = () => {
    // const [productItems, setProductItems] = useState([]);
    const { setProductItems, filteredProductItems, setFilteredProductItems } =
        useContext(ShopContext);

    const fetchProductItems = async () => {
        const response = await fetch("http://localhost:8080/products");
        const data = await response.json();
        setProductItems(data);
        setFilteredProductItems(data);
        console.log(data);
    };

    const fetchMovies = async () => {
        const response = await fetch("http://localhost:8080/products/movies");
        const data = await response.json();
        setFilteredProductItems(data);
        console.log(data);
    };

    const fetchBooks = async () => {
        const response = await fetch("http://localhost:8080/products/books");
        const data = await response.json();
        setFilteredProductItems(data);
        console.log(data);
    };

    const fetchSongs = async () => {
        const response = await fetch("http://localhost:8080/products/songs");
        const data = await response.json();
        setFilteredProductItems(data);
        console.log(data);
    };

    const fetchProductItemsBySearchQuery = async (searchQuery) => {
        try {
            const [movieResponse, bookResponse, musicResponse] = await Promise.all([
                fetch(`http://localhost:8080/products/movie/${searchQuery}`),
                fetch(`http://localhost:8080/products/books/${searchQuery}`),
                fetch(`http://localhost:8080/products/songs/${searchQuery}`)
            ]);

            const movieData = await movieResponse.json();
            const bookData = await bookResponse.json();
            const musicData = await musicResponse.json();

            const combinedData = [...movieData, ...bookData, ...musicData];

            setFilteredProductItems(combinedData);
        } catch (error) {
            console.error("No Product found", error);
        }
    };

    useEffect(() => {
        fetchProductItems();
    }, []);

    return (
        <>
            <Filters
                fetchMovies={fetchMovies}
                fetchBooks={fetchBooks}
                fetchSongs={fetchSongs}
                fetchProductItems={fetchProductItems}
                fetchProductItemsBySearchQuery={fetchProductItemsBySearchQuery}
            />
            {/* */}
            {/* {filteredProductItems.map((productItem) => (
                <ProductItem key={productItem.id} productItem={productItem} />
            ))} */}


            <ProductList filteredProductItems = {filteredProductItems} />
        </>
    );
};

export default ShopContainer;
