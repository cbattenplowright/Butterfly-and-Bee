const Filters = ({
    fetchMovies,
    fetchBooks,
    fetchSongs,
    fetchProductItems
}) => {
    return (
        <>
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
