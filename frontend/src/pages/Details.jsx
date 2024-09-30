'use client'

import { useState, useEffect } from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import { Loader } from 'lucide-react';

export default function Details({ darkMode, renter }) {

    const [isLoading, setIsLoading] = useState(true);

    const [product,setProduct] = useState({
      name: 'Basic Tee 6-Pack',
      price: '$192',
      images: {
          src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg',
          alt: 'Model wearing plain white basic tee.',
      },
      description:
        'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
    })
    const address = useParams().id
    const navigate = useNavigate(); // Initialize the `useNavigate` hook

  useEffect(() => {
      setIsLoading(true);
      fetch('http://98.83.178.60:8084/property/'+address, {
         method: 'GET',
      })
      .then((res) => {
          if (!res.ok) {
              throw new Error('Failed to fetch properties');
          }
          return res.json();
      }) .then((data) => {
        console.log(data);
        setProduct({
            name: data.address,
            price: '$'+data.rent,
            images: {
                src: 'http://98.83.178.60:8084/pictures/'+data.picture,
                alt: data.picture,
            },
            description: data.description
        });
            setIsLoading(false);
        })
  },[]);

  const handleRent = () => {
    const formData = {
        username: renter.username,
        address: product.name,
    };

    fetch('http://98.83.178.60:8084/renting', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    }).then((res) => {
        if (!res.ok) {
            throw new Error('Failed to create renting');
        }
    });
    navigate("/");
  }

  if (isLoading) {
      return (
          <div className="flex justify-center items-center h-screen">
              <Loader className="animate-spin h-10 w-10 text-indigo-600" />
          </div>
      );
  }



  return (
    <div className={darkMode ? 'bg-gray-900 text-gray-100' : 'bg-white text-gray-900'}>
      <div className="pt-6">
        <nav aria-label="Breadcrumb">
          <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <li className="text-sm">
              <a href={product.href} aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">
                {product.name}
              </a>
            </li>
          </ol>
        </nav>

        {/* Image gallery */}
        <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
            <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
                <img
                  alt={product.images.alt}
                  src={product.images.src}
                  className="h-full w-full object-cover object-center"
                />
            </div>
        </div>

        {/* Product info */}
        <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{product.name}</h1>
          </div>

          {/* Options */}
          <div className="mt-4 lg:row-span-3 lg:mt-0">
            <h2 className="sr-only">Rent Price</h2>
            <p className="text-3xl tracking-tight text-gray-900">{product.price}</p>
              <button
                type="submit"
                className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                onClick = {handleRent}
              >
                Rent
              </button>
          </div>

          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
            {/* Description and details */}
            <div>
              <h3 className="sr-only">Description</h3>

              <div className="space-y-6">
                <p className="text-base text-gray-900">{product.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
