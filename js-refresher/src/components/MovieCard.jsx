import React from 'react';

const MovieCard = ({ movie: {title, vote_average, poster_path, release_date, original_language}}) => {

    return (
        <div className="movie-card">
            
            <div>
                {/* why must we use the like path like this to get the images. */}
                <img src={poster_path ? 
                        `https://image.tmdb.org/t/p/w500/${poster_path}`: "/no-movie.png"}
                    alt={title}
                />
                {/* why do we have alt again? */}
            </div>
            
            <div className="mt-4 ">
                 <h3> {title} </h3>
                 <div className="content">
                    <div className="rating">
                        <img src="star.svg" alt="Star Icon"></img>
                        <p>{vote_average ? vote_average.toFixed(1) : "N/A"}</p>
                        {/* what is the to fixed method from and for */}
                    </div>

                    <span>•</span>

                    <p className= "lang">{original_language ? original_language : "N/A"}</p>

                    <span>•</span>

                    {/* im guessing the split creates an array of characters based on the delimiter passed as an argument */}
                    <p className='year'> {release_date ? release_date.split("-")[0] : "N/A"}</p>

                 </div>
            </div>
           
        </div>
    )
}

export default MovieCard;