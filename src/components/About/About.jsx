import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto px-4 py-16 bg-white">
      <h1 className="text-3xl font-bold mb-8">About Weather App</h1>
      <p className="text-lg mb-4">
        This app helps you stay informed about the weather conditions in any city. Get real-time information on temperature, humidity, maximum and minimum temperatures, and more.
      </p>
      <div className="flex flex-col space-y-4">
        <div className="flex items-center border border-gray-200 rounded-md px-4 py-2">
          <span className="mr-4">Data Source:</span>
          <span>OpenWeatherMap</span>
        </div>
        <div className="flex items-center border border-gray-200 rounded-md px-4 py-2">
          <span className="mr-4">Accuracy & Frequency:</span>
          <span>
            Data is sourced from OpenWeatherMap and may not always be
            perfectly accurate for all locations. Updates are typically
            received several times a day.
          </span>
        </div>
        <div className="flex items-center border border-gray-200 rounded-md px-4 py-2">
          <span className="mr-4">Features:</span>
          <ul className="list-disc ml-4">
            <li>View current weather for your location.</li>
            <li>Search for any city and see its weather details.</li>
            <li>Debounced search for easier and faster city discovery.</li>
          </ul>
        </div>
        <div className="flex items-center border border-gray-200 rounded-md px-4 py-2">
          <span className="mr-4">Privacy Policy:</span>
          <span>Your privacy is secured. We do not collect any personal information beyond what's necessary for location services.</span>
        </div>
        <div className="flex items-center border border-gray-200 rounded-md px-4 py-2">
          <span className="mr-4">Terms of Service:</span>
          <span>
            By using this app, you agree to standard terms of service that
            prohibit any illegal or harmful use of the app or its data. 
          </span>
        </div>
      </div>
    </div>
  );
};

export default About;