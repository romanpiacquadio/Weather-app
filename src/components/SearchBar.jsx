import React, {useState} from "react";

export default function SearchBar({onSearch}) {
    let [input, setInput] = useState("")
    
    let handleChange = (e) => {
        e.preventDefault();
        setInput(e.target.value)
    }

    let onSubmit = (e) => {
        e.preventDefault();
        onSearch(input);
        setInput('')
        console.log(input)
    }

    return (
        <div>
            <form onSubmit={(e) => onSubmit(e)}>
                <input type="text" value={input} onChange={(e) => handleChange(e)} placeholder='Enter a city name...'/>
                <input type="submit" value="Search"/>
                
            </form>
        </div>
    )
}