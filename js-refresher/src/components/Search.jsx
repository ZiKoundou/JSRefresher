import React from 'react';
const Search = ({searchTerm, setSearchTerm}) => {
    return (
        <div className= "search">
            <div>
                <img src="search.svg" alt= "search"></img>
                <input
                    type="text"
                    placeholder='Search through thousands of movies'
                    value={searchTerm}
                    //why do we do like target?
                    onChange={(e) => setSearchTerm(e.target.value)}
                    />
                {searchTerm}
            </div>
            
        </div>
    )
}
export default Search;