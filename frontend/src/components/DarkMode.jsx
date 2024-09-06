import { SunIcon, MoonIcon } from '@heroicons/react/24/outline'

const DarkMode = ({ darkMode, toggleDarkMode }) => {
  return (
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
  )
}

export default DarkMode