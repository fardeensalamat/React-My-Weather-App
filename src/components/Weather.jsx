import styles from '../styles/Weather.module.css'
import { FaSearch } from "react-icons/fa";
import React, { useState } from 'react';
import axios from 'axios';
import Card from './Card';


function Weather(){

    const [city, setCity] = useState();
    const [weather, setWeather] = useState();


    const handleCityChange = (event) => {
        setCity(event.target.value);
    }

    const handleClick = () => {
         fetchWeather();
    }

    const fetchWeather = async () => {

        try{
                const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${'987ab205c6967cb722a02ce01c64a5c4'}`)
                console.log(response);
                setWeather(response);
        }

        catch(error){
                   console.log("Error fetching weather data", error)
        }

    }


    return(
        <div className='container'>

             <div className={styles.search}>
                <input type='text' placeholder='Enter a city name' value={city} onChange={handleCityChange}  />
                <button onClick={handleClick}><FaSearch /></button>
             </div>

            <Card weather={weather} />
                      
        </div>
    );
}

export default Weather;