import './MovieCard.css';

function MovieCard({title, posterPath, voteAverage}) {
    return(
        <div className="movie-card">
            <img className="movie-img" src={`https://image.tmdb.org/t/p/w500${posterPath}`} alt={`Poster for ${title}`} />
            <h2>{title}</h2>
            <p>Rating: {voteAverage}</p>
        </div>
    );
};

export default MovieCard

