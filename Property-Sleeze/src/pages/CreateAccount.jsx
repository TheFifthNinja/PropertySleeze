import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function CreateAccount() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      "username": username,
    };

    try {
      const response = await fetch('http://localhost:8084/propertyManger', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        console.log('Account created successfully');
      } else {
        console.error('Failed to create account');
      }
    } catch (error) {
      console.error('Error:', error);
    }
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
            <label htmlFor="username" className="block text-sm font-medium text-gray-900 dark:text-gray-100">
              Username
            </label>
            <input
              id="username"
              name="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              autoComplete="username"
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
