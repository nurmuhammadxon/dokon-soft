import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// icons
import { IoEye, IoEyeOff } from "react-icons/io5";
// images
import loginImage from '../../assets/login.png';
import logoLight from '../../assets/light_logo.png';

function Login() {
    const [isPassword, setIsPassword] = useState(true);
    const [value, setValue] = useState({
        phone: '',
        password: ''
    });

    const formatPhoneNumber = (phone) => {
        const digits = phone.replace(/\D/g, '').slice(0, 9);
        if (digits.length < 9) return digits;
        return `+998 (${digits.slice(0, 2)}) ${digits.slice(2, 5)}-${digits.slice(5, 7)}-${digits.slice(7, 9)}`;
    };

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
        setIsPassword((prev) => !prev);
    };

    return (
        <div className='w-screen h-screen flex items-center justify-center font-poppins bg-[#F5F5F5] px-5'>
            <div
                className='max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl w-full mx-auto rounded-3xl py-2 sm:py-5 md:py-10 md:px-6 flex gap-10 bg-white shadow-lg'
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
                    <h1 className='font-semibold text-lg text-[#313131] mb-4'>
                        Tizimga kirish
                    </h1>
                    <form onSubmit={handleSubmit} className='w-full'>
                        {/* Phone Input */}
                        <div className='relative w-full rounded-lg border-[0.4px] border-[#79747E] bg-white py-1'>
                            <label htmlFor="phone" className='absolute left-2 top-[-8px] bg-white text-xs text-[#79747E] font-medium'>
                                Telefon raqam
                            </label>
                            <input
                                id="phone"
                                name='phone'
                                type="tel"
                                className='w-full px-4 py-2 bg-transparent text-xs text-[#1C1B1F] outline-none'
                                placeholder='+998 (__) ___ __ __'
                                value={formatPhoneNumber(value.phone)}
                                onChange={handleInput}
                                required
                            />
                        </div>
                        {/* Password Input */}
                        <div className='relative w-full mt-5 rounded-lg border-[0.4px] border-[#79747E] bg-white py-1'>
                            <label htmlFor="password" className='absolute left-2 top-[-8px] bg-white text-xs text-[#79747E] font-medium'>
                                Parol
                            </label>
                            <input
                                id="password"
                                name='password'
                                type={`${isPassword ? 'password' : 'text'}`}
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
                                {isPassword ? <IoEyeOff /> : <IoEye />}
                            </button>
                        </div>
                        {/* Remember Me & Forgot Password */}
                        <div className='mt-4 flex justify-between items-center'>
                            <div className='flex items-center gap-2'>
                                <input
                                    type="checkbox"
                                    className='w-4 h-4 border-[0.7px] border-[#313131]'
                                />
                                <p className='text-xs text-[#313131]'>Parolni saqlash</p>
                            </div>
                            <Link
                                to={'/password-reset'}
                                className='text-xs text-[#001E57]'
                            >
                                Parolni unutdingizmi?
                            </Link>
                        </div>
                        {/* Login Button */}
                        <button
                            className='py-3 w-full mt-6 bg-[#3869EB] text-white font-semibold text-xs rounded-md hover:bg-[#2c58b3] transition-all'
                        >
                            Tizimga kirish
                        </button>
                    </form>
                    {/* Sign Up Link */}
                    <div className='mt-4 text-center mb-2 md:mb-0'>
                        <p
                            className='font-medium text-xs text-[#001E57]'
                        >
                            Hisobingiz yo’qmi? <Link
                                to={'/signup'}
                                className='text-[#001EDF]'
                            >
                                Ro’yxatdan o’tish
                            </Link>
                        </p>
                    </div>
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

export default Login;
