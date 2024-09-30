import React, { useEffect, useState } from 'react';
import { Home, DollarSign, Loader } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export default function Renting({renter}) {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [products,setProducts] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
        setIsLoading(true);
        fetch('http://98.83.178.60:8084/property/renting/'+renter.username, {
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
                href: '/details/'+d.address,
                price: d.rent,
                imageSrc: 'http://98.83.178.60:8084/pictures/' + d.picture,
                imageAlt: d.picture,
                address: d.address
            }));
            setProducts(temp);
            setIsLoading(false);
        })
        .catch((err) => {
            console.error(err);
            setError('Failed to load properties. Please try again later.');
            setIsLoading(false);
        });
    },[]);

    const handleClick = (address) => {
        fetch('http://98.83.178.60:8084/renting/'+renter.username+'/'+address, {
               method: 'DELETE',
        })
        .then((res) => {
            if (!res.ok) {
                throw new Error('Failed to delete renting');
            }
            navigate("/");
        });
    }

    if (isLoading) {
            return (
                <div className="flex justify-center items-center h-screen">
                    <Loader className="animate-spin h-10 w-10 text-indigo-600 dark:text-indigo-400" />
                </div>
            );
        }

    if (products.length == 0) {
        return (
            <div className="text-center text-red-600 dark:text-red-400 p-4 flex justify-center items-center h-screen">
                <p>Currently not renting anything, please add some</p>
            </div>
        )
    }


    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-200">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <div className="flex justify-between mb-6">
                    <h2 className="text-2xl font-bold tracking-tight">Available Properties</h2>
                </div>
                <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                    {products.map((product) => (
                        <motion.div
                            key={product.id}
                            className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
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
                                        className="px-3 py-1 bg-indigo-600 dark:bg-indigo-500 text-white rounded-md text-sm font-medium"
                                        onClick={() => handleClick(product.address)}
                                    >
                                        Break lease
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
