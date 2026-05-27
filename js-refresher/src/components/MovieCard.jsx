import React from 'react';

const MovieCard = ({ movie: {title, vote_average, poster_path, release_date, original_language}}) => {

    return (
        <div className="movie-card">
            {/* why must we use the like path like this to get the images. */}
            <img src={poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}`: "/no-movie.png"}></img>
            {/* why do we have key again? */}
            <p  className="text-white"> {title}</p>
        </div>
    )
}

export default MovieCard;