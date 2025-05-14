import React from 'react'
import { Link } from 'react-router-dom'

function HomePage() {

    const logout = () => {
        sessionStorage.removeItem('access_token')
        sessionStorage.removeItem('refresh_token')
    }
    return (
        <div className='w-screen h-screen flex flex-col gap-5 items-center justify-center'>
            <Link
                to={'/login'}
                className='py-2 px-4 bg-blue-700 hover:bg-blue-600 text-[#F3F3F3] rounded-md transition-all duration-200 ease-in-out'
            >
                Login
            </Link>
            <button
                onClick={logout}
            >
                Logout
            </button>
        </div>
    )
}

export default HomePage