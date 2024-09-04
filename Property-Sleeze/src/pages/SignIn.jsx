import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Example({renter}) {
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`http://localhost:8084/Renter/${username}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        console.log('Signed in successfully');
        renter(response.json())

      } else {
        throw new Error('Failed to sign in');
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto">
      <div className="min-h-full flex flex-col xl:flex-row gap-[30px] items-center justify-center px-6 py-12 lg:px-8 bg-white dark:bg-gray-900">
        <div className="flex flex-col lg:flex-row max-w-4xl w-full mx-auto">
          <div className="lg:w-1/2 flex flex-col justify-center p-6 lg:pr-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6 text-center lg:text-left mt-16">
              Sign in to your account
            </h2>
            <div className="border border-gray-300 dark:border-gray-700 rounded-lg p-6">
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
                    className="mt-2 block w-full rounded-md border border-gray-300 dark:border-gray-700 py-1.5 text-gray-900 dark:text-gray-100 shadow-sm placeholder:text-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-indigo-600 dark:focus:ring-indigo-500 sm:text-sm"
                  />
                </div>

                {error && <p className="text-red-500 text-sm">{error}</p>}
                
                <button
                  type="submit"
                  className="w-full rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 dark:bg-indigo-700 dark:hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600 dark:focus:ring-indigo-500"
                  disabled={loading}
                >
                  {loading ? 'Signing in...' : 'Sign in'}
                </button>
              </form>

              <p className="mt-10 text-center text-sm text-gray-500 dark:text-gray-400">
                Not a member?{' '}
                <Link to="/create-account" className="font-semibold text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300">
                  Create an account
                </Link>
              </p>
            </div>
          </div>

          <div className="lg:w-1/2 flex items-center justify-center p-6">
            <img src="/Large Logo.png" alt="Large Logo" className="max-w-full h-auto" />
          </div>
        </div>
      </div>
    </div>
  );
}
