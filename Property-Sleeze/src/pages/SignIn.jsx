import { useState, useEffect } from 'react';

export default function Example() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(savedDarkMode);
    if (savedDarkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.body.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 bg-white dark:bg-gray-900">
      <div className="sm:mx-auto sm:w-full sm:max-w-xs text-center">
        <img
          alt="Your Company"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          className="mx-auto h-10 w-auto"
        />
        <h2 className="mt-10 text-2xl font-bold text-gray-900 dark:text-gray-100">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-xs border border-gray-300 dark:border-gray-700 rounded-lg p-6">
        <form className="space-y-6">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-900 dark:text-gray-100">
              Username
            </label>
            <input
              id="username"
              name="username"
              type="text"
              required
              autoComplete="username"
              className="mt-2 block w-full rounded-md border border-gray-300 dark:border-gray-700 py-1.5 text-gray-900 dark:text-gray-100 shadow-sm placeholder:text-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-indigo-600 dark:focus:ring-indigo-500 sm:text-sm"
            />
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium text-gray-900 dark:text-gray-100">
                Password
              </label>
            </div>
            <input
              id="password"
              name="password"
              type="password"
              required
              autoComplete="current-password"
              className="mt-2 block w-full rounded-md border border-gray-300 dark:border-gray-700 py-1.5 text-gray-900 dark:text-gray-100 shadow-sm placeholder:text-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-indigo-600 dark:focus:ring-indigo-500 sm:text-sm"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 dark:bg-indigo-700 dark:hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600 dark:focus:ring-indigo-500"
          >
            Sign in
          </button>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500 dark:text-gray-400">
          Not a member?{' '}
          <a href="/create-account" className="font-semibold text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300">
            Create an account
          </a>
        </p>
      </div>
    </div>
  );
}
