import './MovieCard.css';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { PiCheckCircle, PiCheckCircleFill } from "react-icons/pi";


function MovieCard({title, posterPath, voteAverage, onClick, isFavorited, onToggleFavorite, isWatched, onToggleWatched}) {
    return(
        <div className="movie-card" onClick={onClick}>
            <img className="movie-img" src={`https://image.tmdb.org/t/p/w500${posterPath}`} alt={`Poster for ${title}`} />
            <h2>{title}</h2>
            <p>Rating: {voteAverage}</p>

            <div className="buttons">
                <button 
                    className="favorite-button"
                    onClick={(event) => {
                        event.stopPropagation();
                        onToggleFavorite();
                    }}
                >
                    {isFavorited ? (
                        <FaHeart className="heart favorited" />
                    ) : (
                        <FaRegHeart className="heart not-favorited" />
                    )}
                </button>
                
                <button 
                    className="watched-button"
                    onClick={(event) => {
                        event.stopPropagation();
                        onToggleWatched();
                    }}
                >
                    {isWatched ? (
                        <PiCheckCircleFill className="check filled" />
                    ) : (
                        <PiCheckCircle className="check unfilled" />
                    )}
                </button>
            </div>
        </div>
    );
};

export default MovieCard

