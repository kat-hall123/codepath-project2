import { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import SearchForm from './SearchForm';
import Modal from './Modal';
import './MovieList.css';

function MovieList() {
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const [query, setQuery] = useState("");

    const [selectedMovie, setSelectedMovie] = useState(null);
    const [movieDetails, setMovieDetails] = useState(null);

    const [sortOption, setSortOption] = useState("");

    const[favorites, setFavorites] = useState([]);
    const[watched, setWatched] = useState([]);

    const [webpage, setWebpage] = useState("home");

    const fetchData = async (pageNum) => {
        const apiKey = import.meta.env.VITE_API_KEY;
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

    const handleMovieClick = async(movieId) => {
        const apiKey = import.meta.env.VITE_API_KEY;
        try {
            const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=en-US`);
            if (!response.ok) {
                throw new Error("Failed to fetch movie details");
            }

            const data = await response.json();
            setMovieDetails(data);
            setSelectedMovie(movieId);
        } catch(error){
            console.error(error);
        }
    };

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

    function handleSortChange(event) {
        const selected = event.target.value;
        setSortOption(selected);

        if(selected === "none") {
            setMovies([]);
            setPage(1);
            setHasMore(true);
            fetchData(1);
            return;
        }

        let sorted = [...movies];

        if(selected === "title") {
            sorted.sort((a, b) => a.title.localeCompare(b.title));
        } else if(selected === "release_date") {
            sorted.sort((a, b) => new Date(b.release_date) - new Date(a.release_date));
        } else if(selected === "rating") {
            sorted.sort((a, b) => b.vote_average - a.vote_average);
        }

        setMovies(sorted);
    }

    function toggleFavorite(movie) {
        //if movie already favorited, remove it; otherise, add to favorite list
        if (favorites.some(f => f.id === movie.id)) {
            setFavorites(favorites.filter(f => f.id !== movie.id));
        } else {
            setFavorites([...favorites, movie]);
        }
    }

    function toggleWatched(movie) {
        if (watched.some(w => w.id === movie.id)) {
            setWatched(watched.filter(w => w.id !== movie.id));
        } else {
            setWatched([...watched, movie]);
        }
    }

    return(
        <div className="movie-list-container">
            <div className="layout">
                <aside className="sidebar">
                    <div className="sidebar-options">
                        <button onClick={() => setWebpage("home")}>Home</button>
                        <button onClick={() => setWebpage("favorites")}>Favorites List</button>
                        <button onClick={() => setWebpage("watched")}>Watched List</button>
                    </div>
                </aside>

                <div className="main-content">
                    <header>
                        <SearchForm onSearch={handleSearch} onClear={handleClearSearch} query={query} onSearchInputChange={setQuery} />
                    
                        <div className="sort-container">
                            <label htmlFor="sort-select">Sort by: </label>
                            <select id="sort-select" value={sortOption} onChange={handleSortChange}>
                                <option value="none">None</option>
                                <option value="title">Title (A-Z)</option>
                                <option value="release_date">Release Date (Newest First)</option>
                                <option value="rating">Rating (High to Low)</option>
                            </select>
                        </div>
                    </header>

                    <main className="movie-list">
                        {webpage === "home" && movies.map((movie, index) => {
                            return <MovieCard
                                key={`${movie.id}-${index}`} 
                                title={movie.title} 
                                posterPath={movie.poster_path} 
                                voteAverage={movie.vote_average} 
                                onClick={() => handleMovieClick(movie.id)}
                                
                                //checks whether movie is already favorited or not --> allows correct icon to show
                                isFavorited={favorites.some(f => f.id === movie.id)}
                                onToggleFavorite={() => toggleFavorite(movie)}

                                isWatched={watched.some(w => w.id === movie.id)}
                                onToggleWatched={() => toggleWatched(movie)}
                            />
                        })}

                        {webpage === "favorites" && favorites.map((movie, index) => {
                            return <MovieCard
                                key={`${movie.id}-${index}`} 
                                title={movie.title} 
                                posterPath={movie.poster_path} 
                                voteAverage={movie.vote_average} 
                                onClick={() => handleMovieClick(movie.id)}

                                isFavorited={favorites.some(f => f.id === movie.id)}
                                onToggleFavorite={() => toggleFavorite(movie)}

                                isWatched={watched.some(w => w.id === movie.id)}
                                onToggleWatched={() => toggleWatched(movie)}
                            />
                        })}

                        {webpage === "watched" && watched.map((movie, index) => {
                            return <MovieCard
                                key={`${movie.id}-${index}`} 
                                title={movie.title} 
                                posterPath={movie.poster_path} 
                                voteAverage={movie.vote_average} 
                                onClick={() => handleMovieClick(movie.id)}

                                isFavorited={favorites.some(f => f.id === movie.id)}
                                onToggleFavorite={() => toggleFavorite(movie)}

                                isWatched={watched.some(w => w.id === movie.id)}
                                onToggleWatched={() => toggleWatched(movie)}
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

                    {selectedMovie && movieDetails && (
                        <Modal movie={movieDetails} onClose={() => setSelectedMovie(null)} />
                    )}
                </div>
            </div>
            
        </div>
    );
};

export default MovieList
