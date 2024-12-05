import React from 'react';

const Services = () => {
  return (
    <div className="container mx-auto px-4 py-16 bg-white">
      <h1 className="text-3xl font-bold mb-8">Our Services</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Real-time Weather Updates</h2>
          <p>Stay informed with accurate and up-to-the-minute weather conditions.(for some location it slow)</p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Precise Forecasts</h2>
          <p>Plan your day, week, or even vacation with reliable weather forecasts.</p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">User-Friendly Interface</h2>
          <p>Enjoy a seamless and intuitive user experience.</p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Personalized Weather Alerts</h2>
          <p>Receive tailored alerts for severe weather conditions.</p>
        </div>
      </div>
    </div>
  );
};

export default Services;