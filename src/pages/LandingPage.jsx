import React from 'react'
import { Link, Navigate } from 'react-router-dom'

function LandingPage() {
    const isAuthenticated = !!sessionStorage.getItem('access_token');
    if (isAuthenticated) {
        return <Navigate to="/app" replace />;
    }

    return (
        <div className='w-screen h-screen flex flex-col gap-5 items-center justify-center'>
            <Link
                to={'/login'}
                className='font-medium py-2 px-4 bg-blue-600 hover:bg-blue-700 text-[#F3F3F3] rounded-md transition-all duration-200 ease-in-out'
            >
                Kirish
            </Link>
        </div>
    )
}

export default LandingPage