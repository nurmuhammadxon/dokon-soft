import React, { useState } from 'react'
import { Link } from 'react-router-dom';
// icons
import { IoEye, IoEyeOff } from "react-icons/io5";
// images
import signupImage from '../../assets/signup.png';
import logoLight from '../../assets/light_logo.png';

function Register() {
    const [isPassword, setIsPassword] = useState(true);
    const [isConfirmPassword, setIsConfirmPassword] = useState(true);
    const [value, setValue] = useState({
        lastName: '',
        firstName: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: ''
    });

    const handleInput = (e) => {
        const { name, value } = e.target;
        setValue((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const formatPhoneNumber = (phone) => {
        const digits = phone.replace(/\D/g, '').slice(0, 9);
        if (digits.length < 9) return digits;
        return `+998 (${digits.slice(0, 2)}) ${digits.slice(2, 5)}-${digits.slice(5, 7)}-${digits.slice(7, 9)}`;
    };


    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const togglePasswordVisibility = (e) => {
        e.preventDefault();
        setIsPassword((prev) => !prev);
    };

    const toggleConfirmPasswordVisibility = (e) => {
        e.preventDefault();
        setIsConfirmPassword((prev) => !prev);
    };

    return (
        <div className='w-screen h-screen flex items-center justify-center font-poppins bg-[#F5F5F5] px-5'>
            <div
                className='max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl w-full mx-auto rounded-3xl py-1 sm:py-5 md:py-10 md:px-6 flex gap-10 bg-white shadow-lg'
            >
                {/* Left Side - image */}
                <div className='w-1/2 hidden md:block'>
                    <img
                        src={signupImage}
                        alt="login image"
                        className='w-full h-full object-cover object-center rounded-lg'
                    />
                </div>
                {/* Right Side - Form */}
                <div className='w-full md:w-1/2 px-5'>
                    <div className='flex justify-end'>
                        <img
                            src={logoLight}
                            alt="logo"
                            className='size-20 md:size-24'
                        />
                    </div>
                    <div className='mb-4'>
                        <h1 className='font-semibold text-lg text-[#313131] mb-2'>
                            Ro’yxatdan o’tish
                        </h1>
                        <p className='text-[#313131] text-[10px]'>
                            Biznesingizni raqamlashtirmoqchimisiz unda, quyidagi kataklarni to’ldiring!
                        </p>
                    </div>
                    <form onSubmit={handleSubmit} className='w-full'>
                        <div className='w-full flex flex-wrap gap-2'>
                            <div className='relative w-36 rounded-lg border-[0.4px] border-[#79747E] bg-white py-1'>
                                <label htmlFor="lastName" className='absolute left-2 top-[-8px] bg-white text-xs text-[#79747E] font-medium'>
                                    Familyangiz
                                </label>
                                <input
                                    id="lastName"
                                    name='lastName'
                                    type="text"
                                    className='w-full px-4 py-2 bg-transparent text-xs text-[#1C1B1F] outline-none'
                                    placeholder='Familya'
                                    value={value.lastName}
                                    onChange={handleInput}
                                    required
                                />
                            </div>
                            <div className='relative w-36 rounded-lg border-[0.4px] border-[#79747E] bg-white py-1'>
                                <label htmlFor="firstName" className='absolute left-2 top-[-8px] bg-white text-xs text-[#79747E] font-medium'>
                                    Ismingiz
                                </label>
                                <input
                                    id="firstName"
                                    name='firstName'
                                    type="text"
                                    className='w-full px-4 py-2 bg-transparent text-xs text-[#1C1B1F] outline-none'
                                    placeholder='Ism'
                                    value={value.firstName}
                                    onChange={handleInput}
                                    required
                                />
                            </div>
                            <div className='relative w-36 mt-2 rounded-lg border-[0.4px] border-[#79747E] bg-white py-1'>
                                <label htmlFor="email" className='absolute left-2 top-[-8px] bg-white text-xs text-[#79747E] font-medium'>
                                    Elektron pochta
                                </label>
                                <input
                                    id="email"
                                    name='email'
                                    type="email"
                                    className='w-full px-4 py-2 bg-transparent text-xs text-[#1C1B1F] outline-none'
                                    placeholder='Email'
                                    value={value.email}
                                    onChange={handleInput}
                                    required
                                />
                            </div>
                            <div className='relative w-36 mt-2 rounded-lg border-[0.4px] border-[#79747E] bg-white py-1'>
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
                        </div>
                        <div className='relative w-full mt-5 rounded-lg border-[0.4px] border-[#79747E] bg-white py-1'>
                            <label htmlFor="confirmPassword" className='absolute left-2 top-[-8px] bg-white text-xs text-[#79747E] font-medium'>
                                Parol
                            </label>
                            <input
                                id="confirmPassword"
                                name='confirmPassword'
                                type={`${isPassword ? 'password' : 'text'}`}
                                className='w-full px-4 py-2 bg-transparent text-xs text-[#1C1B1F] outline-none'
                                placeholder='****'
                                value={value.confirmPassword}
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
                        <div className='relative w-full mt-5 rounded-lg border-[0.4px] border-[#79747E] bg-white py-1'>
                            <label htmlFor="password" className='absolute left-2 top-[-8px] bg-white text-xs text-[#79747E] font-medium'>
                                Parolni qayta kiritish
                            </label>
                            <input
                                id="password"
                                name='password'
                                type={`${isConfirmPassword ? 'password' : 'text'}`}
                                className='w-full px-4 py-2 bg-transparent text-xs text-[#1C1B1F] outline-none'
                                placeholder='****'
                                value={value.password}
                                onChange={handleInput}
                                required
                            />
                            <button
                                className='absolute right-4 top-1/2 -translate-y-1/2 text-lg cursor-pointer'
                                onClick={(e) => toggleConfirmPasswordVisibility(e)}
                            >
                                {isConfirmPassword ? <IoEyeOff /> : <IoEye />}
                            </button>
                        </div>
                        <div className='mt-4 flex justify-between items-center'>
                            <div className='flex items-center gap-2'>
                                <input
                                    type="checkbox"
                                    className='w-4 h-4 border-[0.7px] border-[#313131]'
                                />
                                <p className='text-xs text-[#313131]'>
                                    Men barcha saytning <Link to={'#'} className='text-[#001EDF]'>qoidalariga</Link> amal qilishga roziman
                                </p>
                            </div>
                        </div>
                        <button
                            className='py-3 w-full mt-6 bg-[#3869EB] text-white font-semibold text-xs rounded-md hover:bg-[#2c58b3] transition-all'
                            onClick={(e) => handleSubmit(e)}
                        >
                            Hisob yaratish
                        </button>
                    </form>
                    <div className='mt-4 text-center'>
                        <p className='font-medium text-xs text-[#001E57]'>
                            Ro’yxatdan o’tganmisiz? <Link
                                to={'/login'}
                                className='text-[#001EDF]'
                            >
                                tizimga kiring
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register