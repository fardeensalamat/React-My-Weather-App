import React from 'react';
import styles from '../styles/Card.module.css'
import { BsThermometerHigh } from "react-icons/bs";
import { BsThermometerLow } from "react-icons/bs";
import { TiWeatherPartlySunny } from "react-icons/ti";
import SunImg from '../assets/images/sun.png'
import RainImg from '../assets/images/rain.png'
import SnowImg from '../assets/images/snow.png'
import ClearImg from '../assets/images/cloud.png'

function Card({ weather }) {
  if (!weather) {
    return null; 
  }

  // Uppercase First Letter of Weather Description

  const capitalize = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

  
  // Get Weather Icon based on the description

  const getWeatherIcon = (description) => {
    
    if (description.includes("clear") || description.includes("haze")) {
      return <img src={SunImg} alt="sunny" />;
    }

     else if (description.includes("overcast") || description.includes("rain")) {
      return <img src={RainImg} alt="rainy" />;
    }

    else if (description.includes("cloud")) {
      return <img src={ClearImg} alt="clear" />;
    }

    else if (description.includes("snow")) {
      return <img src={SnowImg} alt="snow" />;
    }
    
    else {
      return <img src={SunImg} alt="sun" />;
    }
  }

  return (

    <div className={styles.CardContainer}>

            <p className={styles.CityName}>{weather.data.name} Today</p>

            <div className={styles.main}>

                    <div className='container'>
                       {getWeatherIcon(weather.data.weather[0].description)}
                    </div>

                    <div className='container'>

                            <h3>{Math.ceil(weather.data.main.temp - 273)}° C</h3>
                            <div className={styles.info}>Humidity: {weather.data.main.humidity}%</div>
                            <div className={styles.info}>{capitalize(weather.data.weather[0].description)}</div>
                            
                    </div>
                
            </div>

            <hr />

            <div className={styles.bottom}  >

                    <div className='row'>

                            <div className='col' >
                                <div><TiWeatherPartlySunny /></div>
                                <div><b>Feels Like</b></div>
                                <p className={styles.info}>{Math.ceil(weather.data.main.feels_like - 273)}° C</p>
                            </div>

                            <div className='col'>
                                <div><BsThermometerHigh /></div>
                                <div><b>Max</b></div>
                                <p className={styles.info}>{Math.ceil(weather.data.main.temp_max - 273)}° C</p>
                            </div>

                            <div className='col'>
                                <div><BsThermometerLow /></div>
                                <div><b>Min</b></div>
                                <p className={styles.info}>{Math.ceil(weather.data.main.temp_min - 273)}° C</p>
                            </div>
                    </div>

            </div>
   
       
    </div>
  );
}

export default Card;
