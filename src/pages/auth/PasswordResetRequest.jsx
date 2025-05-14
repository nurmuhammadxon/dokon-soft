import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import ModalMessage from '../../Components/ModalMessage';
import AuthButton from '../../Components/AuthButton';
import LoadingModal from '../../Components/LoadingModal';
import loginImage from '../../assets/login.png';
import logoLight from '../../assets/light_logo.png';

function PasswordResetRequest() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [verifyCodeSent, setVerifyCodeSent] = useState(false);
    const [timeLeft, setTimeLeft] = useState(300);
    const [isExpired, setIsExpired] = useState(false);
    const [modal, setModal] = useState({
        isOpen: false,
        message: '',
        type: 'error',
    });
    const [form, setForm] = useState({
        email: '',
        verifyCode: '',
    });

    useEffect(() => {
        if (verifyCodeSent) {
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
        }
    }, [verifyCodeSent]);

    const formatTime = (seconds) => {
        const min = String(Math.floor(seconds / 60)).padStart(2, '0');
        const sec = String(seconds % 60).padStart(2, '0');
        return `${min}:${sec}`;
    };

    const closeModal = () => setModal(prev => ({ ...prev, isOpen: false }));

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const EmailENterCode = async () => {
        setLoading(true);
        try {
            const res = await axios.post(
                'https://backend-production-612a.up.railway.app/users/send-otp/',
                { email: form.email },
                { headers: { "Content-Type": "application/json" } }
            );
            setVerifyCodeSent(true);
            setTimeLeft(300);
            setIsExpired(false);
            console.log(res);

            setModal({
                isOpen: true,
                message: 'Tasdiqlash kodi emailingizga yuborildi.',
                type: 'success',
            });
        } catch (error) {
            setModal({
                isOpen: true,
                message: error?.response?.data?.error || 'Kod yuborilmadi.',
                type: 'error',
            });
        } finally {
            setLoading(false);
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!verifyCodeSent) {
            EmailENterCode()
        } else {
            if (isExpired) {
                return setModal({
                    isOpen: true,
                    message: 'Kod muddati tugagan. Qayta yuboring.',
                    type: 'error',
                });
            }
            setLoading(true);
            try {
                const res = await axios.post(
                    'https://backend-production-612a.up.railway.app/users/verify/',
                    {
                        email: form.email,
                        otp: form.verifyCode
                    },
                    { headers: { "Content-Type": "application/json" } }
                );
                const token = res?.data?.access_token;
                if (token) {
                    sessionStorage.setItem('reset_token', token);
                    sessionStorage.setItem('reset_email', form.email);
                    navigate('/reset-password');
                } else {
                    throw new Error("Token olinmadi");
                }
            } catch (error) {
                setModal({
                    isOpen: true,
                    message: error?.response?.data?.error || 'Xatolik yuz berdi.',
                    type: 'error',
                });
                console.log('Xatolik' + error);
            } finally {
                setLoading(false);
            }
        }
    };

    return (
        <>
            <ModalMessage {...modal} onClose={closeModal} />
            <LoadingModal isLoading={loading} />

            <div className='w-screen h-screen flex items-center justify-center bg-[#F5F5F5] px-5 font-poppins'>
                <div className='max-w-3xl w-full bg-white rounded-3xl shadow-lg flex p-6 md:p-10 gap-8'>
                    <div className='w-full md:w-1/2'>
                        <img src={logoLight} alt="logo" className='size-20 md:size-24 mb-3' />
                        <Link to="/login" className='text-xs text-[#313131] hover:text-blue-600'>&lt; Login sahifasiga qaytish</Link>
                        <h1 className='text-lg font-semibold text-[#313131] mt-3 mb-4'>Parolni tiklash</h1>

                        <form onSubmit={handleSubmit}>
                            <div className='relative mb-5'>
                                <label htmlFor="email" className='text-xs text-[#79747E] absolute bg-white px-1 top-[-8px] left-2'>Email</label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    className='w-full border border-[#79747E] rounded-lg px-4 py-2 text-sm outline-none'
                                    required
                                />
                            </div>

                            <div className='relative mb-5'>
                                <label htmlFor="verifyCode" className='text-xs text-[#79747E] absolute bg-white px-1 top-[-8px] left-2'>Tasdiqlash kodi</label>
                                <div className='flex items-center gap-2 border border-[#79747E] rounded-lg px-4 py-2'>
                                    <input
                                        id="verifyCode"
                                        name="verifyCode"
                                        type="text"
                                        value={form.verifyCode}
                                        onChange={handleChange}
                                        className='w-full text-sm outline-none'
                                        required={verifyCodeSent}
                                    />
                                    {verifyCodeSent && (
                                        <span className={`text-sm font-medium ${timeLeft <= 60 ? 'text-red-500' : 'text-gray-600'}`}>
                                            {formatTime(timeLeft)}
                                        </span>
                                    )}
                                </div>
                            </div>
                            <div className='mt-4 flex items-center gap-1'>
                                <p className='text-xs text-[#313131]'>Kodni olmadingizmi?</p>
                                <button
                                    className='text-xs text-[#001EDF] cursor-pointer'
                                    onClick={EmailENterCode}
                                    type='button'
                                >
                                    Qayta yuborish
                                </button>
                            </div>
                            <AuthButton
                                title={
                                    loading
                                        ? "Yuklanmoqda..."
                                        : verifyCodeSent
                                            ? "Emailni tasdiqlash"
                                            : "Kod yuborish"
                                }
                            />
                        </form>
                    </div>

                    <div className='w-1/2 hidden md:block'>
                        <img src={loginImage} alt="login" className='w-full h-full object-cover rounded-xl' />
                    </div>
                </div>
            </div>
        </>
    );
}

export default PasswordResetRequest;
