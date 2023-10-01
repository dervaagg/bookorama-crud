import React, { useState } from 'react';

export default function AddressForm() {
  const [streetAddress, setStreetAddress] = useState('');

  const handleInputChange = (e) => {
    setStreetAddress(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Submitted street address:', streetAddress);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 border-4 border-black-500/100 rounded-md shadow-2xl">
        <label htmlFor="street-address" className="block text- font-bold text-gray-700 py-2 text-center">
          Detail Buku
        </label>
      <div className="mb-6 mt-5">
        <label htmlFor="street-address" className="block text-sm font-medium text-gray-700 py-2">
          ISBN
        </label>
        <input
          type="text"
          name="street-address"
          id="street-address"
          autoComplete="street-address"
          className="block w-full mt-1 p-2 border rounded-md shadow-sm focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
          value={streetAddress}
          onChange={handleInputChange}
        />
        <label htmlFor="street-address" className="block text-sm font-medium text-gray-700 py-2">
          Author
        </label>
        <input
          type="text"
          name="street-address"
          id="street-address"
          autoComplete="street-address"
          className="block w-full mt-1 p-2 border rounded-md shadow-sm focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
          value={streetAddress}
          onChange={handleInputChange}
        />
        <label htmlFor="street-address" className="block text-sm font-medium text-gray-700 py-2">
          Tittle
        </label>
        <input
          type="text"
          name="street-address"
          id="street-address"
          autoComplete="street-address"
          className="block w-full mt-1 p-2 border rounded-md shadow-sm focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
          value={streetAddress}
          onChange={handleInputChange}
        />
        <label htmlFor="street-address" className="block text-sm font-medium text-gray-700 py-2">
          Category
        </label>
        <input
          type="text"
          name="street-address"
          id="street-address"
          autoComplete="street-address"
          className="block w-full mt-1 p-2 border rounded-md shadow-sm focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
          value={streetAddress}
          onChange={handleInputChange}
        />
        <label htmlFor="street-address" className="block text-sm font-medium text-gray-700 py-2">
          Price
        </label>
        <input
          type="text"
          name="street-address"
          id="street-address"
          autoComplete="street-address"
          className="block w-full mt-1 p-2 border rounded-md shadow-sm focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
          value={streetAddress}
          onChange={handleInputChange}
        />
        <label htmlFor="street-address" className="block text-sm font-medium text-gray-700 py-2">
          Stock
        </label>
        <input
          type="text"
          name="street-address"
          id="street-address"
          autoComplete="street-address"
          className="block w-full mt-1 p-2 border rounded-md shadow-sm focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
          value={streetAddress}
          onChange={handleInputChange}
        />
      </div>
      <div className="text-start">
        <button
          type="submit"
          className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-4 rounded-md"
        >
          Back
        </button>
      </div>
    </form>
  );
}
