import React from 'react';

const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-16 bg-white">
      <h1 className="text-3xl font-bold mb-8">Contact Us</h1>

      <p className="text-lg mb-6">
        We're here to assist you. Feel free to reach out with any questions or concerns.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
          <p>
            Email: weather@gmail.com<br />
            **Phone:** +123-456-7890
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Send a Message</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>

            <div>
              <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                Address
              </label>
              <textarea
                id="address"
                name="address"
                rows="4"
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              ></textarea>
            </div>

            {/* ...other form fields as before... */}

            <button
              type="submit"
              className="inline-flex items-center px-4 py-2 bg-white border border-black rounded-md font-medium transition-all hover:bg-sky-50 text-black hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-none sm:w-auto sm:text-sm"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;