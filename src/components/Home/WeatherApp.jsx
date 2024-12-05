import React, { useState } from 'react';
import SearchBox from '../Home/SearchBox.jsx';
import InfoBox from '../Home/InfoBox.jsx';
import Location from './Location.jsx';

const WeatherApp = () => {
    const [WeatherInfo, setWeatherInfo] = useState({
            cityName: "Kerala",
            feelsLike: 24.55,
            humidity: 36,
            temp: 25.05,
            tempMax: 25.05,
            tempMin: 25.05,
            weather: "Haze"
    })

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }



  return (
    <div className='flex flex-col items-center justify-center gap-3 my-6 overflow-x-hidden'>
            <div className='w-screen flex items-center justify-between md:px-20 px-11 py-4 flex-wrap gap-6'>
            <SearchBox updateInfo={updateInfo}   />
            <Location change = {setWeatherInfo}/>
            </div>
            <InfoBox info={WeatherInfo} />
    </div>
  );
};

export default WeatherApp;