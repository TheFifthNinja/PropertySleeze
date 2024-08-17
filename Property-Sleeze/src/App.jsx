'use client'

import { useState, useEffect } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon, MoonIcon, SunIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark')
    }
  }, [darkMode])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <div className={`bg-white dark:bg-gray-900 min-h-screen`}>
      { /* Header bar. Need to move to its own file. */ }
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
            <a href="#" className={`text-lg font-semibold leading-6 ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
              Log in <span aria-hidden="true">&rarr;</span>
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
                    href="#"
                    className={`-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 ${darkMode ? 'text-gray-100 hover:bg-gray-700' : 'text-gray-900 hover:bg-gray-50'}`}
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      { /* Main content */ }
      <main className={`relative isolate px-6 pt-14 custom:px-8 ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-white text-gray-900'}`}>
        <div
          aria-hidden="true"
          className={`absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80 ${darkMode ? 'bg-gradient-to-tr from-[#38b6ff] to-[#5e17eb] opacity-30' : 'bg-gradient-to-tr from-[#38b6ff] to-[#5e17eb] opacity-30'}`}
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className={`relative rounded-full px-3 py-1 text-sm leading-6 ${darkMode ? 'text-gray-400 ring-gray-700 hover:ring-gray-600' : 'text-gray-600 ring-gray-900/10 hover:ring-gray-900/20'} ring-1`}>
              Announcing our next round of funding.{' '}
              <a href="#" className={`font-semibold ${darkMode ? 'text-indigo-400' : 'text-indigo-600'}`}>
                <span aria-hidden="true" className="absolute inset-0" />
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Data to enrich your online business
            </h1>
            <p className="mt-6 text-lg leading-8">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
              fugiat veniam occaecat fugiat aliqua.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className={`rounded-md px-3.5 py-2.5 text-sm font-semibold shadow-sm ${darkMode ? 'bg-indigo-600 text-white hover:bg-indigo-500' : 'bg-indigo-600 text-white hover:bg-indigo-500'}`}
              >
                Get started
              </a>
              <a href="#" className="text-sm font-semibold leading-6">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className={`absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)] ${darkMode ? 'bg-gradient-to-tr from-[#38b6ff] to-[#5e17eb] opacity-30' : 'bg-gradient-to-tr from-[#38b6ff] to-[#5e17eb] opacity-30'}`}
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
      </main>

      {/* Dark Mode Button */}
      <button
        type="button"
        onClick={toggleDarkMode}
        className={`fixed bottom-6 left-6 text-gray-900 dark:text-gray-100`}
      >
        {darkMode ? (
          <SunIcon aria-hidden="true" className="h-12 w-12" />
        ) : (
          <MoonIcon aria-hidden="true" className="h-12 w-12" />
        )}
      </button>
    </div>
  )
}
