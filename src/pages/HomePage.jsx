import React from 'react'
import Logout from './auth/Logout'

function HomePage() {
    return (
        <div className='w-screen h-screen flex flex-col gap-5 items-center justify-center'>
            <Logout />
        </div>
    )
}

export default HomePage