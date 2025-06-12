import './Modal.css';
import MovieList from './MovieList';

function Modal({movie, onClose}) {
    return(
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(event) => event.stopPropagation()}>
                
                <div className="modal-info">
                    <h2>{movie.title}</h2>
                    <img className="modal-img"
                        src={`https://image.tmdb.org/t/p/w780${movie.backdrop_path}`}
                        alt={`${movie.title} backdrop`}
                    />
                
                    <p><strong>Runtime</strong>: {movie.runtime} minutes</p>
                    <p><strong>Release Date</strong>: {movie.release_date}</p>
                    <p><strong>Genres</strong>: {movie.genres.map(genre => genre.name).join(", ")}</p>
                    <p><strong>Overview</strong>: {movie.overview}</p>
                </div>
                
                <button className="close-button" onClick={onClose}>Close</button>
            </div>
        </div>
    );
}

export default Modal;