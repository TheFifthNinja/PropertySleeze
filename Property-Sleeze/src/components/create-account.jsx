'use client'
import React from 'react';

export default function CreateAccount() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <main className="flex justify-center items-center h-full">
        <div className="p-8">
          <h1 className="text-4xl font-bold">Create an Account</h1>
          <form className="mt-6 space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email address</label>
              <input type="email" id="email" name="email" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300" />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Password</label>
              <input type="password" id="password" name="password" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300" />
            </div>
            <button type="submit" className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md">Create Account</button>
          </form>
        </div>
      </main>
    </div>
  );
}
