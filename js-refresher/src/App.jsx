import React from 'react';
import Search from './components/Search';
import Spinner from './components/Spinner';
import MovieCard from './components/MovieCard';
import { useEffect, useState } from 'react';
import { useDebounce } from "react-use";


//API = Application Programming Interface
//one software appplication to another

const API_BASE_URL = "https://api.themoviedb.org/3";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const API_OPTIONS = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${API_KEY}`
    }
}
const App = () => {
    const [searchTerm, setSearchTerm] = useState();
    const [debounceSearchTerm, setDebounceSearchTerm] = useState();

    const [errorMessage, setErrorMessage] = useState();
    const [movieList, setMovieList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useDebounce(() => setDebounceSearchTerm(searchTerm), 500, [searchTerm]);
    
    //what is an endpoint
    // how do the apis work and why must we use a key?

    // so query is like the inputed argument?
    const fetchMovies = async (query = '') => {
        setIsLoading(true);
        setErrorMessage("");
        try{
            const endpoint = query 
                ? `${API_BASE_URL}/search/movie?query=${encodeURIComponent(query)}`
                : `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;
            const response = await fetch(endpoint, API_OPTIONS);
            if(!response.ok){
                throw new Error('failed to fetch movies');
            }
            //parse into json
            const data = await response.json();

            //is this not a redundant check?
            if(data.response == false){
                setErrorMessage(data.Error || 'failed to fetch movies');
                setMovieList([]);
                return;
            }

            setMovieList(data.results || []);
        }catch(error){
            console.log(`Error fetching movies: ${error}`);
            setErrorMessage('Error fetching movies. please try again later.');
        } finally{
            setIsLoading(false);
        }
    }

    useEffect (() => {
        fetchMovies(debounceSearchTerm);
    },[debounceSearchTerm])

    return (
        <main>
            <div>
                <header>
                    <img src="./hero.png" alt="Hero Banner"></img>
                    <h1>Find <span className= "text-gradient">Movies</span> You'll Enjoy
                    Without the <span className="text-gradient">Hassle</span></h1>
                    <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                </header>
                
                <section className="all-movies">
                    <h2>All Movies</h2>
                    {isLoading ? (
                        <Spinner />
                    ) : errorMessage ? (
                        <p className= "text-red-500">{errorMessage}</p>
                    ) : (
                        <ul>
                            {movieList.map((movie) => (
                                //what is key for?
                                <MovieCard key = {movie.id} movie={movie}/>
                            ))}
                        </ul>
                    )}
                </section>
            </div>
            
        </main>
    )
}

export default App;