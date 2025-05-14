import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoEye, IoEyeOff } from "react-icons/io5";
import AuthButton from '../../Components/AuthButton';
import ModalMessage from '../../Components/ModalMessage';
import LoadingModal from '../../Components/LoadingModal';
import resetPasswordImage from '../../assets/resetPassword.png';
import logoLight from '../../assets/light_logo.png';
import axios from 'axios';

function PasswordReset() {
    const navigate = useNavigate();
    const [isPassword, setIsPassword] = useState(true);
    const [isConfirmPassword, setIsConfirmPassword] = useState(true);
    const [loading, setLoading] = useState(false);
    const [modal, setModal] = useState({
        isOpen: false,
        message: '',
        type: 'error',
    });

    const [value, setValue] = useState({
        password: '',
        confirmPassword: ''
    });

    const [accessToken, setAccessToken] = useState('');
    const [email, setEmail] = useState('');

    useEffect(() => {
        const token = sessionStorage.getItem('reset_token');
        const userEmail = sessionStorage.getItem('reset_email');
        if (!token || !userEmail) {
            navigate('/password-reset-request');
        } else {
            setAccessToken(token);
            setEmail(userEmail);
        }
    }, [navigate]);

    const handleInput = (e) => {
        const { name, value } = e.target;
        setValue((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const closeModal = () => setModal(prev => ({ ...prev, isOpen: false }));

    const fetchResetPassword = async () => {
        setLoading(true);
        try {
            const res = await axios.patch(
                'https://backend-production-612a.up.railway.app/users/reset-password/',
                {
                    email: email,
                    password: value.password
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${accessToken}`
                    }
                }
            );
            setModal({
                isOpen: true,
                message: 'Parol muvaffaqiyatli o\'zgartirildi!',
                type: 'success'
            });

            sessionStorage.removeItem('reset_token');
            sessionStorage.removeItem('reset_email');

            setTimeout(() => navigate('/login'), 2000);
        } catch (error) {
            setModal({
                isOpen: true,
                message: error?.response?.data?.error || 'Xatolik yuz berdi!',
                type: 'error'
            });
            console.log('Xatolik', error);

        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!value.password || !value.confirmPassword) {
            return setModal({
                isOpen: true,
                message: 'Iltimos, barcha maydonlarni to‘ldiring.',
                type: 'error'
            });
        }

        if (value.password !== value.confirmPassword) {
            return setModal({
                isOpen: true,
                message: 'Parollar mos emas.',
                type: 'error'
            });
        }

        fetchResetPassword();
    };

    return (
        <>
            <ModalMessage {...modal} onClose={closeModal} />
            <LoadingModal isLoading={loading} />

            <div className='w-screen h-screen flex items-center justify-center font-poppins bg-[#F5F5F5] px-5 overflow-x-hidden'>
                <div className='max-w-3xl w-full mx-auto rounded-3xl py-5 md:py-10 md:px-6 flex gap-10 bg-white shadow-lg'>
                    {/* Form */}
                    <div className='w-full md:w-1/2 px-5'>
                        <img src={logoLight} alt="logo" className='size-20 md:size-24 mb-4' />

                        <h1 className='font-semibold text-lg text-[#313131] mb-2'>Parolni o’rnatish</h1>
                        <p className='text-[#313131] text-xs mb-4'>Yangi parolni kiritib tasdiqlang.</p>

                        <form onSubmit={handleSubmit}>
                            {/* Parol */}
                            <div className='relative mt-4'>
                                <label htmlFor="password" className='absolute bg-white px-1 text-xs text-[#79747E] top-[-8px] left-2'>
                                    Parol
                                </label>
                                <input
                                    id="password"
                                    name="password"
                                    type={isPassword ? 'password' : 'text'}
                                    value={value.password}
                                    onChange={handleInput}
                                    className='w-full border border-[#79747E] rounded-lg px-4 py-2 text-sm outline-none'
                                    required
                                />
                                <button
                                    className='absolute right-4 top-1/2 -translate-y-1/2'
                                    onClick={(e) => { e.preventDefault(); setIsPassword(prev => !prev); }}
                                >
                                    {isPassword ? <IoEyeOff /> : <IoEye />}
                                </button>
                            </div>

                            {/* Parolni qayta kiriting */}
                            <div className='relative mt-4'>
                                <label htmlFor="confirmPassword" className='absolute bg-white px-1 text-xs text-[#79747E] top-[-8px] left-2'>
                                    Parolni qayta kiriting
                                </label>
                                <input
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    type={isConfirmPassword ? 'password' : 'text'}
                                    value={value.confirmPassword}
                                    onChange={handleInput}
                                    className='w-full border border-[#79747E] rounded-lg px-4 py-2 text-sm outline-none'
                                    required
                                />
                                <button
                                    className='absolute right-4 top-1/2 -translate-y-1/2'
                                    onClick={(e) => { e.preventDefault(); setIsConfirmPassword(prev => !prev); }}
                                >
                                    {isConfirmPassword ? <IoEyeOff /> : <IoEye />}
                                </button>
                            </div>

                            <AuthButton title="Parolni o'zgartirish" />
                        </form>
                    </div>

                    {/* Image */}
                    <div className='w-1/2 hidden md:block'>
                        <img
                            src={resetPasswordImage}
                            alt="reset password"
                            className='w-full h-full object-cover object-center rounded-lg'
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default PasswordReset;
