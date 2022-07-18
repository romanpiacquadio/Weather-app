import React from "react";
import Card from "./Card.jsx";

// [ ciudad1 , ciudad2, ciudad3 ]

// [{ name: Cordoba, wind:20, detail: rainy, tempmax:30, ..... }..., ....]

// wheater[0].main, wind.speed, main.humidity, wheater[0].icon, main.temp_max, main.temp_max

export default function Cards({cities}){
    
    return(
    <div>
        {cities.map(c => <Card 
                            key={c.id}
                            name={c.name} 
                            main={c.weather[0].main}
                            wind = {c.wind.speed}
                            humidity = {c.main.humidity}
                            icon = {c.weather[0].icon}
                            max = {c.main.temp_max}
                            min = {c.main.temp_min}
                        />)
        }
    </div>
    )
}