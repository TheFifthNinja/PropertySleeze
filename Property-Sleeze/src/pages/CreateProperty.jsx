import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function CreateProperty({user}) {
  const [rent, setRent] = useState(0);
  const [picture, setPicture] = useState('');
  const [address, setAddress] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    let formData = new FormData();
    formData.append('image', picture);

      const response = await fetch('http://localhost:5173/public', {
        method: 'POST',
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        body: formData,
      });

//     const fd = {
// //       "username": user.username,
//       "picture": picture,
//       "address": address,
//       "description": description,
//       "rent":rent
//     };
//
//     try {
//       const response = await fetch('http://localhost:8084/property', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(fd),
//       });
//       if (response.ok) {
//         console.log('Account created successfully');
//       } else {
//         console.error('Failed to create account');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     }
  };


  return (
    <div className="min-h-full flex-col justify-center px-6 py-12 lg:px-8 bg-white dark:bg-gray-900">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm text-center mt-20">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
          Create Your Account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm border border-gray-300 dark:border-gray-700 rounded-lg p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="address" className="block text-sm font-medium text-gray-900 dark:text-gray-100">
              Address
            </label>
            <input
              id="address"
              name="address"
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
              autoComplete="address"
              className="mt-2 block w-full rounded-md border border-gray-300 dark:border-gray-700 py-1.5 text-black shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 dark:focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-900 dark:text-gray-100">
                Address
              </label>
              <input
                id="description"
                name="description"
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                autoComplete="address"
                className="mt-2 block w-full rounded-md border border-gray-300 dark:border-gray-700 py-1.5 text-black shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 dark:focus:ring-indigo-500 sm:text-sm"
              />
          </div>
            <div>
                <label htmlFor="rent" className="block text-sm font-medium text-gray-900 dark:text-gray-100">
                  Address
                </label>
                <input
                  id="rent"
                  name="rent"
                  type="number"
                  value={rent}
                  onChange={(e) => setRent(e.target.value)}
                  required
                  autoComplete="address"
                  className="mt-2 block w-full rounded-md border border-gray-300 dark:border-gray-700 py-1.5 text-black shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 dark:focus:ring-indigo-500 sm:text-sm"
                />
            </div>
            <div>
                <label htmlFor="picture" className="block text-sm font-medium text-gray-900 dark:text-gray-100">
                  Address
                </label>
                <input
                  id="picture"
                  name="picture"
                  type="file"
                  onChange={(e) => setPicture(e.target.files[0])}
                  required
                  autoComplete="address"
                  className="mt-2 block w-full rounded-md border border-gray-300 dark:border-gray-700 py-1.5 text-black shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 dark:focus:ring-indigo-500 sm:text-sm"
                />
            </div>




          <button
            type="submit"
            className="w-full rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 dark:bg-indigo-700 dark:hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600 dark:focus:ring-indigo-500"
          >
            Create Account
          </button>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500 dark:text-gray-400">
          Already have an account?{' '}
          <a href="/sign-in" className="font-semibold text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300">
            Log in
          </a>
        </p>
      </div>
    </div>
  );
}
