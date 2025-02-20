import React from 'react'
import { Link } from 'react-router-dom';

const Error404 = () => {
  return (
    <>
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
            <div className="max-w-md text-center">
                <h1 className="text-9xl font-bold text-red-600">404</h1>
                <h2 className="text-2xl font-semibold mt-4 mb-2">Page Not Found</h2>
                <p className="text-gray-600 mb-6">
                    Oops! The page you're looking for has vanished into the digital void.
                </p>
                <Link to="/"
                    className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Go Back Home
                </Link>
            </div>
        </div>
    </>
  )
}

export default Error404