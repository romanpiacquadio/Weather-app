import React from "react";
import SearchBar from "./SearchBar.jsx"

export default function Navbar({onSearch}){

    return(
        <div>
            <h2>Weather app</h2>
            <SearchBar onSearch={onSearch}/>
        </div>
        
    )
}