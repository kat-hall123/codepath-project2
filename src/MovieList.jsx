import { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import SearchForm from './SearchForm';
import './MovieList.css';

function MovieList() {
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const [query, setQuery] = useState("");

    function handleSearch(query) {
        setQuery(query);
        setMovies([]);
        setPage(1);
        setHasMore(true);
        fetchData(1);
    }

    function handleClearSearch() {
        setQuery("");
        setMovies([]);
        setPage(1);
        setHasMore(true);  
    }

    function handleLoadMore() {
        return setPage((prevPage) => prevPage + 1);
    }

    const apiKey = import.meta.env.VITE_API_KEY;

    const fetchData = async (pageNum) => {
        try {
            //if query exists use search endpoint, otherwise show now playing
            const url = query ? 
                            `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(query)}&page=${pageNum}`
                            : `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=${pageNum}`;

            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Failed to fetch movie data');
            }
            
            const data = await response.json();
            if(data.page >= data.total_pages) {
                setHasMore(false);
            }
            setMovies((prevMovies) => [...prevMovies, ...data.results]);
        } catch (error) {
            console.error(error);
        }
    };
    
    useEffect(() => {
        fetchData(page);
    }, []);

    useEffect(() => {
        if(page > 1) {
            fetchData(page);
        }
    }, [page]);

    useEffect(() => {
        fetchData(1);
    }, [query]);

    return(
        <div className="movie-list-container">
            <header>
                <SearchForm onSearch={handleSearch} onClear={handleClearSearch} query={query} onSearchInputChange={setQuery} />
            </header>

            <main className="movie-list">
                {movies.map((movie, index)  => {
                    return <MovieCard
                        key={`${movie.id}-${index}`} 
                        title={movie.title} 
                        posterPath={movie.poster_path} 
                        voteAverage={movie.vote_average} 
                    />
                })}
            </main>
            
            {hasMore ? (
                <button className="load-more-button" onClick={handleLoadMore}>
                    Load More
                </button>
            ) : (
                <p id="no-more">No more movies to show</p>
            )}
        </div>
    );
};

export default MovieList;
