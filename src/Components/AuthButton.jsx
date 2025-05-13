import React from 'react'

function AuthButton({ title }) {
    return (
        <button
            type="submit"
            className='py-3 w-full mt-6 bg-[#3869EB] text-white font-semibold text-xs rounded-md hover:bg-[#2c58b3] transition-all cursor-pointer'
        >
            {title}
        </button>)
}

export default AuthButton