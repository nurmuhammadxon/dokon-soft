import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// icons
import { IoEye, IoEyeOff } from "react-icons/io5";
// images
import loginImage from '../../assets/login.png';
import logoLight from '../../assets/light_logo.png';

function PasswordResetRequest() {
    const [isCode, setIsCode] = useState(true);
    const [value, setValue] = useState({
        confirmationCode: ''
    });

    const handleInput = (e) => {
        const { name, value } = e.target;
        setValue((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const togglePasswordVisibility = (e) => {
        e.preventDefault();
        setIsCode((prev) => !prev);
    };

    const resendCode = (e) => {
        e.preventDefault()
    }

    return (
        <div className='w-screen h-screen flex items-center justify-center font-poppins bg-[#F5F5F5] px-5'>
            <div
                className='max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl w-full mx-auto rounded-3xl py-1 sm:py-5 md:py-10 md:px-6 flex gap-10 bg-white shadow-lg'
            >
                {/* Left Side - Form */}
                <div className='w-full md:w-1/2 px-5'>
                    <div className='flex justify-start'>
                        <img
                            src={logoLight}
                            alt="logo"
                            className='size-20 md:size-24'
                        />
                    </div>
                    <div className='mb-4'>
                        <Link
                            to={'/login'}
                            className='text-[#313131] text-xs font-medium'
                        >
                            &lt; Back to login
                        </Link>
                        <h1 className='font-semibold text-lg text-[#313131] mt-2'>
                            Kodni yubordik, elektron pochtangizni tekshiring! yoki spam qutisini
                        </h1>
                    </div>
                    <form onSubmit={handleSubmit} className='w-full mb-3 md:mb-0'>
                        <div className='relative w-full mt-5 rounded-lg border-[0.4px] border-[#79747E] bg-white py-1'>
                            <label htmlFor="password" className='absolute left-2 top-[-8px] bg-white text-xs text-[#79747E] font-medium'>
                                Kodni kiriting
                            </label>
                            <input
                                id="password"
                                name='password'
                                type={`${isCode ? 'password' : 'text'}`}
                                className='w-full px-4 py-2 bg-transparent text-xs text-[#1C1B1F] outline-none'
                                placeholder='****'
                                value={value.password}
                                onChange={handleInput}
                                required
                            />
                            <button
                                className='absolute right-4 top-1/2 -translate-y-1/2 text-lg cursor-pointer'
                                onClick={(e) => togglePasswordVisibility(e)}
                            >
                                {isCode ? <IoEyeOff /> : <IoEye />}
                            </button>
                        </div>
                        <div className='mt-4 flex items-center gap-1'>
                            <p className='text-xs text-[#313131]'>Kodni olmadingizmi?</p>
                            <button
                                className='text-xs text-[#001EDF] cursor-pointer'
                                onClick={(e) => resendCode(e)}
                            >
                                Qayta yuborish
                            </button>
                        </div>
                        {/* Login Button */}
                        <button
                            className='py-3 w-full mt-6 bg-[#3869EB] text-white font-semibold text-xs rounded-md hover:bg-[#2c58b3] transition-all'
                        >
                            Tizimga kirish
                        </button>
                    </form>
                    {/* Sign Up Link */}
                </div>

                {/* Right Side - Image */}
                <div className='w-1/2 hidden md:block'>
                    <img
                        src={loginImage}
                        alt="login image"
                        className='w-full h-full object-cover object-center rounded-lg'
                    />
                </div>
            </div>
        </div>
    );
}

export default PasswordResetRequest;
