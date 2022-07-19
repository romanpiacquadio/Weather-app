import React from "react";
import SearchBar from "./SearchBar";
import { NavBar } from "./Styles";


export default function Navbar({onSearch}){

    return(
        <NavBar>
            <h3 className="title">Look at how the weather is in your favorite city</h3>
            <SearchBar onSearch={onSearch}/>
        </NavBar>
        
    )
}