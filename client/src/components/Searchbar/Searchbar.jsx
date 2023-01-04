import React from "react";

export function SearchBar () {
    return (
    <div>
        <form>
            <input className="searchbar" id='searchBar' type='text' name ='searchBar' placeholder='Rechercher un film, un genre, ...'></input>
        </form>
    </div>
    )
}