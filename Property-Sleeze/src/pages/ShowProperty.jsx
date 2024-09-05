import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Home, DollarSign, Loader } from 'lucide-react';

export default function ShowProperty({ renter }) {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [darkMode, setDarkMode] = useState(false); // Added darkMode state

    useEffect(() => {
        setIsLoading(true);
        fetch('http://localhost:8084/property/notRenting', {
           method: 'GET',
        })
        .then((res) => {
            if (!res.ok) {
                throw new Error('Failed to fetch properties');
            }
            return res.json();
        })
        .then((data) => {
            const temp = data.map((d, index) => ({
                id: index + 1,
                name: d.address,
                href: '#',
                price: d.rent,
                imageSrc: 'http://localhost:8084/pictures/' + d.picture,
                imageAlt: d.picture,
            }));
            setProducts(temp);
            setIsLoading(false);
        })
        .catch((err) => {
            console.error(err);
            setError('Failed to load properties. Please try again later.');
            setIsLoading(false);
        });
    }, []);

    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <Loader className="animate-spin h-10 w-10 text-indigo-600" />
            </div>
        );
    }

    if (error) {
        return (
            <div className="text-center text-red-600 p-4">
                <p>{error}</p>
            </div>
        );
    }

    return (
        <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-100 text-gray-900'}`}>
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <div className="flex justify-between mb-6">
                    <h2 className="text-2xl font-bold tracking-tight">Available Properties</h2>
                    <button
                        onClick={() => setDarkMode(prev => !prev)}
                        className="text-sm font-medium text-indigo-600 dark:text-indigo-400"
                    >
                        Toggle Dark Mode
                    </button>
                </div>
                <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                    {products.map((product) => (
                        <motion.div
                            key={product.id}
                            className="bg-white rounded-lg shadow-md overflow-hidden dark:bg-gray-800"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden xl:aspect-h-8 xl:aspect-w-7">
                                <img
                                    alt={product.imageAlt}
                                    src={product.imageSrc}
                                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                                />
                            </div>
                            <div className="p-4">
                                <div className="flex items-center mb-2">
                                    <Home className="h-5 w-5 text-indigo-600 dark:text-indigo-400 mr-2" />
                                    <h3 className="text-sm font-medium">{product.name}</h3>
                                </div>
                                <div className="flex items-center justify-between">
                                    <p className="text-lg font-semibold text-indigo-600 dark:text-indigo-400 flex items-center">
                                        <DollarSign className="h-5 w-5 mr-1" />
                                        {product.price}
                                    </p>
                                    <motion.button
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        className="px-3 py-1 bg-indigo-600 text-white rounded-md text-sm font-medium dark:bg-indigo-500"
                                    >
                                        View Details
                                    </motion.button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}