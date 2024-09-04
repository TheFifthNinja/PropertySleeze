'use client'

import { useState, useEffect } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon, MoonIcon, SunIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Rent', href: '#' },
  { name: 'Rent to', href: '/create-account' },
  { name: 'About Us', href: '#' }
]

export default function Navbar({ darkMode, toggleDarkMode, mobileMenuOpen, setMobileMenuOpen, pathname }) {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav aria-label="Global" className={`flex items-center justify-between p-4 custom:px-8 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="flex items-center custom:flex-1">
          <a href="/" className="flex items-center space-x-4">
            <img
              alt="Company Logo"
              src="/logo.png"
              className="h-16 sm:h-20 md:h-24 lg:h-28 w-auto"
            />
            <span className={`text-2xl md:text-3xl font-extrabold ${darkMode ? 'text-blue-400' : 'text-blue-600'} ml-4 whitespace-nowrap`}>
              Property Sleeze
            </span>
          </a>
        </div>
        <div className="custom:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-gray-100"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <div className="hidden custom:flex custom:gap-x-12">
          {navigation.map((item) => (
            <a key={item.name} href={item.href} className={`text-lg font-semibold leading-6 ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
              {item.name}
            </a>
          ))}
        </div>
        <div className="hidden custom:flex custom:flex-1 custom:justify-end">
          <a href={pathname === '/sign-in' ? '/create-account' : '/sign-in'} className={`text-lg font-semibold leading-6 ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
            {pathname === '/sign-in' ? 'Create an account' : 'Log in'} <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} className="custom:hidden">
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <DialogPanel className={`fixed inset-y-0 right-0 z-50 w-80 max-w-xs overflow-y-auto px-6 py-6 sm:ring-1 ${darkMode ? 'bg-gray-800 ring-gray-900/10' : 'bg-white ring-gray-900/10'}`}>
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5 flex items-center space-x-4">
              <img
                alt="Company Logo"
                src="/logo.png"
                className="h-16 sm:h-20 md:h-24 lg:h-28 w-auto align-middle"
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-gray-100"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 ${darkMode ? 'text-gray-100 hover:bg-gray-700' : 'text-gray-900 hover:bg-gray-50'}`}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="py-6">
                <a
                  href={pathname === '/sign-in' ? '/create-account' : '/sign-in'}
                  className={`-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 ${darkMode ? 'text-gray-100 hover:bg-gray-700' : 'text-gray-900 hover:bg-gray-50'}`}
                >
                  {pathname === '/sign-in' ? 'Create an account' : 'Log in'}
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
