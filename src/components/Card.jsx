import React from "react";
import { Tarjeta } from "./Styles";
// const API_KEY = '5348c1f32968b89889de66792ec0dc56'
// wheater[0].main, wind.speed, main.humidity, wheater[0].icon, main.temp_max, main.temp_max

export default function Card ({name, main, wind, humidity, icon, max, min}) {
    // let city = "Cordoba";
    // let requestURL = axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
    // console.log(requestURL.data)
    
    // -----------------------------------------------

    return(
        <Tarjeta>
            <div className="button">
                    <button>X</button>
            </div>
            <div className="cityName">
                <h2>{name}</h2>
            </div>
            <div className="details">
                <p>{main} - Wind {wind} km/h - Humidity {humidity}%</p>
            </div>
            <div className="bottomBox">
                <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="icon" className="image" />
                <div className="temps">
                    <div className="tempMax"><p>Max: {max} °C</p></div>                        
                    <div className="tempMin"><p>Min: {min} °C</p></div>                        
                </div>
            </div>
        </Tarjeta>
    )
}
