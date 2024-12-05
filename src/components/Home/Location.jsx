import React, { useEffect, useState } from 'react';
import MyLocationIcon from '@mui/icons-material/MyLocation';

function Location({change}) {
    
    
    let getLocationAPI = async (lat, long) => {
        const Location_URL = "https://api.openweathermap.org/data/2.5/weather";
        const API_KEY = "7d88b436f0d35d241ab5217c2093a0e0";
    
        let response = await fetch(`${Location_URL}?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`);
        let locationData = await response.json();
        let result = {
            cityName: locationData.name,
            temp: locationData.main.temp,
            tempMin: locationData.main.temp_min,
            tempMax: locationData.main.temp_max,
            humidity: locationData.main.humidity,
            feelsLike: locationData.main.feels_like,
            weather: locationData.weather[0].description,
        }
        console.log(result);
        change(result);
    }

// GET YOUR CURRENT LOCATION.
    async function gotLocation(position) {
        const result =  await getLocationAPI(position.coords.latitude, position.coords.longitude);
        // console.log(position.coords.latitude, position.coords.longitude);
        console.log(result);
    }

    function failedToGet() {
        console.log("some error occur");
    }

    let getLocation = async () => {
        navigator.geolocation.getCurrentPosition(gotLocation, failedToGet);
    }

    return (
        <div className='text-black flex items-center gap-3'>
            <span className='text-blue-600 cursor-pointer' onClick={getLocation}>
                <MyLocationIcon />
            </span>
            Check Your City
        </div>
    );
}

export default Location;
