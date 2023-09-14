import { useEffect, useState } from "react";
import './Filters.css';

const Filters = ({
    fetchMovies,
    fetchBooks,
    fetchSongs,
    fetchProductItems,
    fetchProductItemsBySearchQuery
}) => {
    const [stateSearchQuery, setStateSearchQuery] = useState("");

    const handleChange = (event) => {
        const search = event.target.value;
        setStateSearchQuery(search);
    }

    useEffect(() => {
        fetchProductItemsBySearchQuery(stateSearchQuery);
    }, [stateSearchQuery]);

    return (
        <div className="filters-container">
            <input
                id="searchItem"
                type="text"
                placeholder="Search for some media"
                onChange={handleChange}
                value={stateSearchQuery}
            />
            <div className="buttons">
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
            </div>
        </div>
    );
};

export default Filters;
