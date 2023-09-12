import { useState } from "react";

const Filters = ({
    fetchMovies,
    fetchBooks,
    fetchSongs,
    fetchProductItems,
    fetchProductItemsBySearchQuery
}) => {

    const [ stateSearchQuery, setStateSearchQuery] = useState("");

    const handleChange = (event) => {
        const search = event.target.value;
        setStateSearchQuery(search);
        fetchProductItemsBySearchQuery(stateSearchQuery);

    }
    return (
        <>
            <input
                id="searchItem" type="text" placeholder="search for some media"
                onChange={handleChange} value={stateSearchQuery}
            />
            <button type="button" name="movie-button" onClick={fetchMovies}>
                Movies
            </button>
            <button type="button" name="books-button" onClick={fetchBooks}>
                Books
            </button>
            <button type="button" name="music-button" onClick={fetchSongs}>
                Music
            </button>
            <button type="button" name="show-all" onClick={fetchProductItems}>
                Show All
            </button>
        </>
    );
};

export default Filters;
