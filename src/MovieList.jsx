import { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import './MovieList.css';

function MovieList() {
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);

    const fetchData = async (pageNum) => {
        try {
            const apiKey = import.meta.env.VITE_API_KEY;
            const response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=${pageNum}`);
            
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

    function handleLoadMore() {
        return setPage((prevPage) => prevPage + 1);
    }

    return(
        <div className="movie-list-container">
            <header>
                <h1>Now Playing</h1>
            </header>

            <main className="movie-list">
                {movies.map(movie => {
                    return <MovieCard
                        key={movie.id} 
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
