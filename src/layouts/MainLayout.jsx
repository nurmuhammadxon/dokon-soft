import React from 'react'
import { Outlet } from 'react-router-dom'

function MainLayout() {
    return (
        <div className='relative overflow-x-hidden'>
            <header></header>
            <main>
                <Outlet />
            </main>
            <footer></footer>
        </div>
    )
}

export default MainLayout