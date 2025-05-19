import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import ModalMessage from '../../Components/ModalMessage';
import loginImage from '../../assets/login.png';
import logoLight from '../../assets/light_logo.png';
import AuthButton from '../../Components/AuthButton';
import LoadingModal from '../../Components/LoadingModal';

function VerifyEmail() {
    const navigate = useNavigate()
    const [timeLeft, setTimeLeft] = useState(300);
    const [isExpired, setIsExpired] = useState(false);
    const [loading, setLoading] = useState(false)
    const [modal, setModal] = useState({
        isOpen: false,
        message: '',
        type: 'error',
    });
    const [value, setValue] = useState({
        first_name: '',
        last_name: '',
        phone_number: '',
        password: '',
        email: '',
        verifyCode: ''
    });

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev <= 1) {
                    clearInterval(timer);
                    setIsExpired(true);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        const registerValue = JSON.parse(sessionStorage.getItem('registerData'))

        if (registerValue) {
            setValue(prev => ({
                ...prev,
                first_name: registerValue.firstName,
                last_name: registerValue.lastName,
                password: registerValue.password,
                phone_number: registerValue.phone,
                email: registerValue.email
            }));
        }
    }, []);

    const formatTime = (seconds) => {
        const min = Math.floor(seconds / 60);
        const sec = seconds % 60;
        return `${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
    };

    const closeModal = () => {
        setModal(prev => ({ ...prev, isOpen: false }));
    };

    const handleInput = (e) => {
        const { name, value: inputVal } = e.target;
        setValue((prev) => ({ ...prev, [name]: inputVal }));
    };

    const fetchVerifyEmail = async () => {
        setLoading(true)
        try {
            const res = await axios.post(
                'https://backend-production-612a.up.railway.app/users/verify/',
                {
                    first_name: value.first_name,
                    last_name: value.last_name,
                    email: value.email,
                    phone_number: value.phone_number,
                    password: value.password,
                    otp: value.verifyCode
                },
                { headers: { "Content-Type": "application/json" } }
            );
            sessionStorage.setItem('access_token', res.data.access_token);
            sessionStorage.setItem('refresh_token', res.data.refresh_token);
            navigate('/')
            setModal({
                isOpen: true,
                message: 'Email muvaffaqiyatli tasdiqlandi.',
                type: 'success'
            });
        } catch (error) {
            console.error("Xatolik:", error.response);
            setModal({
                isOpen: true,
                message: error?.response?.data?.error || "Xatolik yuz berdi.",
                type: 'error',
            });
        } finally {
            setLoading(false)
        }
    };

    const resendCode = async (e) => {
        e.preventDefault();
        setLoading(true)
        try {
            await axios.post(
                "https://backend-production-612a.up.railway.app/users/register/",
                {
                    first_name: value.first_name,
                    last_name: value.last_name,
                    password: value.password,
                    phone_number: value.phone_number,
                    email: value.email,
                },
                { headers: { "Content-Type": "application/json" } }
            );
            setTimeLeft(300);
            setIsExpired(false);
            setModal({
                isOpen: true,
                message: "Tasdiqlash kodi qayta yuborildi.",
                type: "success",
            });
        } catch (error) {
            console.error("Resend error:", error.response);
            setModal({
                isOpen: true,
                message: error.response.data.error,
                type: "error",
            });
        } finally {
            setLoading(false)
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isExpired) {
            setModal({
                isOpen: true,
                message: 'Tasdiqlash vaqti tugadi. Qayta kod yuboring.',
                type: 'error',
            });
            return;
        }
        fetchVerifyEmail();
    };

    return (
        <>
            <ModalMessage
                isOpen={modal.isOpen}
                message={modal.message}
                type={modal.type}
                onClose={closeModal}
            />
            <LoadingModal isLoading={loading} />
            <div className='w-screen h-screen flex items-center justify-center font-poppins bg-[#F5F5F5] px-5 overflow-x-hidden'>
                <div className='max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl w-full mx-auto rounded-3xl py-2 sm:py-5 md:py-10 md:px-6 flex gap-10 bg-white shadow-lg'>
                    <div className='w-full md:w-1/2 px-5'>
                        <img src={logoLight} alt="logo" className='size-20 md:size-24 mb-3' />
                        <div className='mb-4'>
                            <Link
                                to={'/login'}
                                className='text-[#313131] text-xs font-medium hover:text-blue-600'
                            >
                                &lt; Login sahifasiga qaytish
                            </Link>
                            <h2 className='font-medium text-sm text-[#313131] mt-1.5'>
                                Tasdiqlash kodi emailingizga yuborildi. Spam qutisini ham tekshirib ko‘ring.
                            </h2>
                        </div>
                        <h1 className='font-semibold text-lg text-[#313131] mb-4'>Emailni tasdiqlash</h1>
                        <form onSubmit={handleSubmit} className='w-full'>
                            <div className='relative w-full rounded-lg border-[0.4px] border-[#79747E] bg-white py-1'>
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
                                    readOnly={!!sessionStorage.getItem('email')}
                                    required
                                />
                            </div>
                            <div className='relative w-full mt-5 rounded-lg border-[0.4px] border-[#79747E] bg-white py-1'>
                                <label htmlFor="verifyCode" className='absolute left-2 top-[-8px] bg-white text-xs text-[#79747E] font-medium'>
                                    Tasdiqlash kodi
                                </label>
                                <div className='flex items-center'>
                                    <input
                                        id="verifyCode"
                                        name='verifyCode'
                                        type='text'
                                        className='w-full px-4 py-2 bg-transparent text-xs text-[#1C1B1F] outline-none'
                                        placeholder='Email orqali yuborilgan kod'
                                        value={value.verifyCode}
                                        onChange={handleInput}
                                        required
                                    />
                                    <span
                                        className={`font-semibold pr-1.5 ${timeLeft <= 60 ? 'text-red-500' : 'text-gray-800'
                                            }`}
                                    >
                                        {formatTime(timeLeft)}
                                    </span>
                                </div>
                            </div>
                            <div className='mt-4 flex items-center gap-1'>
                                <p className='text-xs text-[#313131]'>Kodni olmadingizmi?</p>
                                <button
                                    className='text-xs text-[#001EDF] cursor-pointer'
                                    onClick={resendCode}
                                    type='button'
                                    disabled={!isExpired}
                                >
                                    Qayta yuborish
                                </button>
                            </div>
                            <AuthButton title="Emailni tasdiqlash" />
                        </form>
                    </div>
                    <div className='w-1/2 hidden md:block'>
                        <img src={loginImage} alt="login" className='w-full h-full object-cover rounded-lg' />
                    </div>
                </div>
            </div>
        </>
    );
}

export default VerifyEmail;