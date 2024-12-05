import React, { useState } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


function SearchBox({updateInfo}) {
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "7d88b436f0d35d241ab5217c2093a0e0";

    let getWeatherInfo = async () => {
        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`)
            let jsonResponse = await response.json();
            console.log(jsonResponse);
            let result = {
            cityName: jsonResponse.name,
            temp: jsonResponse.main.temp,
            tempMin: jsonResponse.main.temp_min,
            tempMax: jsonResponse.main.temp_max,
            humidity: jsonResponse.main.humidity,
            feelsLike: jsonResponse.main.feels_like,
            weather: jsonResponse.weather[0].description,
        }
        console.log(result);
        return result;
        }catch(err){
            throw(err);
        }
    }

    let handleChange = (e) => {
        setCity(e.target.value);
        setError(false);
    }

    let handleSubmit = async (e) => {
       try{
        e.preventDefault();
        // console.log(city);
        let newInfo = await getWeatherInfo();
        updateInfo(newInfo);
        setCity("");
       }catch(err) {
        setError(true);
       }
    }

    // For Search

  return (
    <div>
        <div className='w-full'>
            <form onSubmit={handleSubmit} className='w-full flex items-end gap-2 justify-start '>
                <TextField id="city" label="Search City" variant="standard" style={{width: "160px"}} required value={city} onChange={handleChange} />
                <Button variant="text" type='submit'>Search</Button> <br />
            </form>
            {error && <p style={{color: "red", marginLeft: "12px", textAlign: "left", fontFamily: "Gilroy"}}>No Such City Exists. <span style={{color: "Green"}}>Try Again</span></p>}

        </div>
    </div>
  )
}

export default SearchBox