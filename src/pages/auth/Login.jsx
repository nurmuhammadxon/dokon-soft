import React, { useState, useEffect } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
// icons
import { IoEye, IoEyeOff } from "react-icons/io5";
// components
import ModalMessage from '../../Components/ModalMessage';
import PhoneNumber from '../../Components/PhoneNumber';
import AuthButton from '../../Components/AuthButton';
import LoadingModal from '../../Components/LoadingModal';
// image
import loginImage from '../../assets/login.png';
import logoLight from '../../assets/light_logo.png';

function Login() {
    const [isPassword, setIsPassword] = useState(true);
    const [isRememberMeChecked, setIsRememberMeChecked] = useState(() => {
        return sessionStorage.getItem('rememberMe') === 'true';
    });
    const [loading, setLoading] = useState(false)
    const [modal, setModal] = useState({
        isOpen: false,
        message: '',
        type: 'error',
    });
    const [value, setValue] = useState({
        phone: '',
        password: ''
    });
    const navigate = useNavigate()

    useEffect(() => {
        const storedPhone = sessionStorage.getItem('phone');
        const storedPassword = sessionStorage.getItem('password');
        if (storedPhone && storedPassword) {
            setValue({
                phone: storedPhone,
                password: storedPassword,
            });
        }
    }, []);

    const handleCheckboxChange = () => {
        setIsRememberMeChecked(prev => {
            const newValue = !prev;
            if (newValue) {
                sessionStorage.setItem('rememberMe', newValue);
            } else {
                sessionStorage.removeItem('rememberMe');
            }
            return newValue;
        });
    };

    const closeModal = () => {
        setModal(prev => ({ ...prev, isOpen: false }));
    };

    const handleInput = (e) => {
        const { name, value: inputVal } = e.target;
        setValue((prev) => ({ ...prev, [name]: inputVal }));
    };

    const fetchLogin = async () => {
        setLoading(true)
        try {
            const response = await axios.post(
                'https://backend-production-612a.up.railway.app/users/login/',
                {
                    phone_number: value.phone,
                    password: value.password
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
            if (sessionStorage.getItem('rememberMe')) {
                sessionStorage.setItem('phone', value.phone);
                sessionStorage.setItem('password', value.password);
            } else {
                sessionStorage.removeItem('phone', value.phone);
                sessionStorage.removeItem('password', value.password);
            }
            sessionStorage.setItem('access_token', response.data.access_token);
            sessionStorage.setItem('refresh_token', response.data.refresh_token);
            navigate('/')
        } catch (error) {
            console.error("Xatolik:", error.response);
            setModal({
                isOpen: true,
                message: error.response.data.error,
                type: 'error',
            });
        } finally {
            if (!sessionStorage.getItem('rememberMe')) {
                setValue({
                    phone: '',
                    password: ''
                })
            }
            setLoading(false)
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchLogin();
    };

    return (
        <>
            {/* modal */}
            <ModalMessage
                isOpen={modal.isOpen}
                message={modal.message}
                type={modal.type}
                onClose={closeModal}
            />
            {/* Loading */}
            <LoadingModal isLoading={loading} />
            <div className='w-screen h-screen flex items-center justify-center font-poppins bg-[#F5F5F5] px-5 overflow-x-hidden'>
                <div className='max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl w-full mx-auto rounded-3xl py-2 sm:py-5 md:py-10 md:px-6 flex gap-10 bg-white shadow-lg'>
                    <div className='w-full md:w-1/2 px-5'>
                        <img src={logoLight} alt="logo" className='size-20 md:size-24 mb-3' />
                        <h1 className='font-semibold text-lg text-[#313131] mb-4'>Tizimga kirish</h1>
                        <form onSubmit={handleSubmit} className='w-full'>
                            <div className='relative w-full rounded-lg border-[0.4px] border-[#79747E] bg-white py-1'>
                                <label htmlFor="phone" className='absolute left-2 top-[-8px] bg-white text-xs text-[#79747E] font-medium'>
                                    Telefon raqam
                                </label>
                                <span className='flex items-center bg-transparent text-xs text-[#1C1B1F] px-4'>
                                    <span>+998</span>
                                    <PhoneNumber
                                        value={value}
                                        handleInput={handleInput}
                                    />
                                </span>
                            </div>
                            <div className='relative w-full mt-5 rounded-lg border-[0.4px] border-[#79747E] bg-white py-1'>
                                <label htmlFor="password" className='absolute left-2 top-[-8px] bg-white text-xs text-[#79747E] font-medium'>
                                    Parol
                                </label>
                                <input
                                    id="password"
                                    name='password'
                                    type={isPassword ? 'password' : 'text'}
                                    className='w-full px-4 py-2 bg-transparent text-xs text-[#1C1B1F] outline-none'
                                    placeholder='****'
                                    value={value.password}
                                    onChange={handleInput}
                                    required
                                />
                                <button
                                    onClick={(e) => { e.preventDefault(); setIsPassword(prev => !prev); }}
                                    className='absolute right-4 top-1/2 -translate-y-1/2 text-lg cursor-pointer'
                                >
                                    {isPassword ? <IoEyeOff /> : <IoEye />}
                                </button>
                            </div>

                            <div className='mt-4 flex justify-between items-center'>
                                <div className='flex items-center gap-2'>
                                    <input
                                        type="checkbox"
                                        className='w-4 h-4 border-[0.7px] border-[#313131] cursor-pointer'
                                        checked={isRememberMeChecked}
                                        onChange={handleCheckboxChange}
                                    />
                                    <p className='text-xs text-[#313131]'>Parolni saqlash</p>
                                </div>
                                <Link to={'/password-reset-request'} className='text-xs text-[#001E57]'>
                                    Parolni unutdingizmi?
                                </Link>
                            </div>
                            <AuthButton title='Tizimga kirish' />
                        </form>

                        <div className='mt-4 text-center mb-2 md:mb-0'>
                            <p className='font-medium text-xs text-[#001E57]' >
                                Hisobingiz yo’qmi? <Link to={'/signup'} className='text-[#001EDF]'>Ro’yxatdan o’tish</Link>
                            </p>
                        </div>
                    </div>

                    <div className='w-1/2 hidden md:block'>
                        <img src={loginImage} alt="login" className='w-full h-full object-cover rounded-lg' />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;
