import React from "react";
import { useState, useEffect } from "react";
function PopularCities() {
  const [weatherData, setWeatherData] = useState({});
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "7d88b436f0d35d241ab5217c2093a0e0";
  const cities = ["Uttar Pradesh", "Delhi", "Mumbai", "Kolkata",'Madhya Pradesh'];

  useEffect(() => {
    const fetchData = async () => {
      const newWeatherData = {};

      for (const city of cities) {
        try {
          const response = await fetch(
            `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
          );
          const data = await response.json();
          newWeatherData[city] = data;
          // console.log(data);
        } catch (error) {
          console.error(`Error fetching data for ${city}:`, error);
          newWeatherData[city] = { error: "Failed to load data" };
        }
      }

      setWeatherData(newWeatherData);
    };
    fetchData();
  }, []);

  // ADD BACKROUND IMAGES

  const cityImages = {
    "Uttar Pradesh": 'https://i.pinimg.com/736x/2c/58/9c/2c589c12996c7d8cf73e463e5deea3b4.jpg',
    "Delhi": 'https://i.pinimg.com/736x/be/50/ce/be50ce7c4eea2f5ebc67b0400a87db1e.jpg',
    "Mumbai": 'https://i.pinimg.com/736x/2b/cf/a9/2bcfa9cb50b85e6d9a7e19cdbd7d30cb.jpg',
    "Kolkata": 'https://i.pinimg.com/736x/82/09/39/820939917d5be5f24e2e1c5de26457e6.jpg',
    "Madhya Pradesh": 'https://i.pinimg.com/736x/be/50/ce/be50ce7c4eea2f5ebc67b0400a87db1e.jpg',

  };

  return (
    <div className="bg-white w-full sm:w-11/12 p-6">
      <h2 className="text-2xl font-bold mb-4">Other Popular Cities</h2>
      <div className="w-full flex overflow-x-auto gap-4" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        {cities.map((city) => (
          <div key={city} className="p-4 min-w-96 border rounded-lg shadow w-full sm:w-4/5 md:w-1/3 lg:w-1/4"
           style={{ backgroundImage: `url('${cityImages[city]}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <h2 className="text-xl font-semibold mb-2">{city}</h2>
            {weatherData[city] ? (
              <div>
                {weatherData[city].error ? (
                  <p className="text-red-500">{weatherData[city].error}</p>
                ) : (
                  <div className="w-full flex items-center justify-between">
                    <div className="text-xl">
                      <p className="mb-1 flex items-center justify-start"><i class="text-white text-sm ri-temp-cold-fill"></i>Temperature:</p>
                      <p className="mb-1  flex items-center justify-start"><i class="text-white text-sm ri-water-percent-fill"></i>Humidity:</p>
                      <p className="mb-1  flex items-center justify-start"><i class="text-white text-sm ri-cloud-fill"></i>Weather:</p>
                      <p className="mb-1  flex items-center justify-start"><i class="text-white text-sm ri-cloud-windy-fill"></i>Wind Speed:</p>
                    </div>
                    <div >
                      <p className="mb-1">{weatherData[city].main?.temp}°C</p>
                      <p className="mb-1">
                        {weatherData[city].main?.humidity}%
                      </p>
                      <p className="mb-1">
                        {weatherData[city].weather?.[0]?.description}
                      </p>
                      <p>{weatherData[city].wind?.speed} m/s</p>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <p>Loading...</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default PopularCities;
