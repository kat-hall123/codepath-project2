import { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import './MovieList.css';

function MovieList() {
    const [movies, setMovies] = useState([]);

    const fetchData = async () => {
        try {
            const apiKey = import.meta.env.VITE_API_KEY;
            const response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`);
            
            if (!response.ok) {
                throw new Error('Failed to fetch movie data');
            }
            
            const data = await response.json();
            setMovies(data.results);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

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
        </div>
    );
};

export default MovieList;
