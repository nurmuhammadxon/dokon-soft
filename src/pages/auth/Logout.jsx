import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom';

function Logout() {
    const navigate = useNavigate()

    const logout = async () => {
        const access = sessionStorage.getItem('access_token');
        const refresh = sessionStorage.getItem('refresh_token');

        try {
            await axios.post(
                'https://backend-production-612a.up.railway.app/users/logout/',
                { refresh_token: refresh },
                {
                    headers: {
                        'Authorization': `Bearer ${access}`,
                        'Content-Type': 'application/json',
                    },
                }
            );
            sessionStorage.removeItem('access_token')
            sessionStorage.removeItem('refresh_token')
            navigate('/')
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <button
                onClick={logout}
                aria-label="Logout"
                className='font-medium text-red-600 cursor-pointer py-2.5 px-4 bg-red-100 rounded-lg hover:bg-red-200 hover:text-red-700 transition-all duration-200 ease-in-out shadow-sm'
            >
                Chiqish
            </button>
        </div>
    )
}

export default Logout