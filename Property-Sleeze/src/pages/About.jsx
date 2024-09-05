import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, Linkedin, Github } from 'lucide-react';

const people = [
    {
        name: 'Kevin Albert',
        role: 'Co-Founder / CEO',
        imageUrl: '/Kevin.jpg',
        bio: 'Kevin is a visionary leader with over 15 years of experience in tech innovation.',
        linkedin: 'https://www.linkedin.com/in/kevin-albert-a2551a217/',
        github: 'https://github.com/TheFifthNinja',
    },
    {
        name: 'Daniel West',
        role: 'Co-Founder / CEO',
        imageUrl: '/Daniel.jpg',
        bio: 'Daniel is a visionary leader with over 15 years of experience in tech innovation.',
        linkedin: 'https://www.linkedin.com/in/daniel-west-535a50282/',
        github: 'https://github.com/bluewolf44',
    },
];

const PersonCard = React.memo(({ person }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    
    const toggleExpanded = () => {
        setIsExpanded(prev => !prev);
    };

    return (
        <motion.li
            layout
            className="flex flex-col gap-4 p-6 rounded-xl shadow-lg transition-all duration-300 bg-white"
            whileHover={{ scale: 1.03, boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
            whileTap={{ scale: 0.98 }}
        >
            <div className="flex items-center gap-x-6">
                <motion.img
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    alt={`Photo of ${person.name}`}
                    src={person.imageUrl}
                    className="h-24 w-24 rounded-full object-cover shadow-md border-2 border-indigo-500"
                />
                <div>
                    <h3 className="text-xl font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                    <p className="text-sm font-medium leading-6 text-indigo-600">{person.role}</p>
                </div>
            </div>
            <AnimatePresence>
                {isExpanded && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                    >
                        <p className="text-sm leading-6 text-gray-600">{person.bio}</p>
                        <div className="mt-4 flex gap-4">
                            <a href={person.linkedin} target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-110">
                                <Linkedin className="text-blue-600 w-6 h-6" />
                            </a>
                            <a href={person.github} target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-110">
                                <Github className="text-gray-700 w-6 h-6" />
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
            <motion.button
                onClick={toggleExpanded}
                className="self-center p-2 rounded-full bg-gray-200 text-gray-600 hover:bg-gray-300 transition-colors duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </motion.button>
        </motion.li>
    );
});

PersonCard.displayName = 'PersonCard';

const SnazzyLeadershipTeam = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [renter, setRenter] = useState(null);

    const toggleDarkMode = () => {
        setDarkMode(prev => !prev);
    };
    
    const handleRenterChange = (newRenter) => {
        setRenter(newRenter);
    };

    return (
        <div className={`bg-gray-50 py-24 sm:py-32 ${darkMode ? 'dark' : ''}`}>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mx-auto max-w-2xl text-center"
                >
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-gray-900 mb-4">
                        Meet Our Visionary Leadership
                    </h2>
                    <p className="text-lg leading-8 text-gray-600">
                        Our team of industry veterans and innovators is dedicated to pushing the boundaries of what's possible.
                    </p>
                </motion.div>
                <motion.ul
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-2"
                >
                    {people.map((person) => (
                        <PersonCard key={person.name} person={person} />
                    ))}
                </motion.ul>
            </div>
        </div>
    );
};

export default SnazzyLeadershipTeam;
