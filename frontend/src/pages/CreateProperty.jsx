import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';


export default function CreateProperty({ renter }) {
  const [rent, setRent] = useState(0);
  const [picture, setPicture] = useState('');
  const [address, setAddress] = useState('');
  const [description, setDescription] = useState('');
  const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate();

  const toggleDarkMode = () => setDarkMode(prev => !prev);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    let formData = new FormData();
    let pName = Date.now()+picture.name
    formData.append('image', picture, pName);

      const response = await fetch('http://52.44.56.95:8084/picture', {
        method: 'POST',
        headers: {
        },
        body: formData,
      }).catch((err) => {
        console.log(err);
      });

    const fd = {
      "username": renter.username,
      "picture": pName,
      "address": address,
      "description": description,
      "rent":rent
    };
    console.log(renter)
    console.log(fd)

    try {
      const response = await fetch('http://52.44.56.95:8084/property', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(fd),
      });
      if (response.ok) {
        console.log('Property created successfully');
        navigate('/'); // Use `navigate` to redirect
      } else {
        console.error('Failed to create property');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-12 lg:px-8 bg-gray-100 dark:bg-gray-900 transition-colors duration-200">
      <div className="w-full max-w-md">
        <h2 className="text-3xl font-extrabold text-center text-gray-900 dark:text-white mb-6">
          Add Your Property
        </h2>
        <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 shadow-md rounded-lg px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label htmlFor="address" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Name
            </label>
            <input
              id="address"
              name="address"
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
              autoComplete="address"
              className="w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Description
            </label>
            <input
              id="description"
              name="description"
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              autoComplete="address"
              className="w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="rent" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Price (per month)
            </label>
            <input
              id="rent"
              name="rent"
              type="number"
              value={rent}
              onChange={(e) => setRent(e.target.value)}
              required
              autoComplete="address"
              className="w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="picture" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Picture
            </label>
            <input
              id="picture"
              name="picture"
              type="file"
              onChange={(e) => {setPicture(e.target.files[0]); console.log(e.target.files[0])}}
              required
              autoComplete="address"
              className="w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:bg-indigo-700 dark:hover:bg-indigo-600 dark:focus:ring-offset-gray-800"
          >
            List Property
          </button>
        </form>
      </div>
    </div>
  );
}