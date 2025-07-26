import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
// icons
import { RiMenu4Fill, RiCloseLine } from "react-icons/ri"
// constants
import { headerMenu, selectLanguage } from '../constants'
// components
import SelectLanguageList from './SelectLanguageList'

const HeaderNavList = ({ data }) => {
    const pathName = useLocation().hash
    console.log(pathName);

    return (
        <ul className='flex flex-col lg:flex-row gap-6'>
            {
                data.map(({ id, title, link }) => (
                    <li key={id}>
                        <a
                            href={link}
                            className={`text-lg ${pathName === link ? 'text-primaryYellow90 hover:text-primaryYellow70' : 'text-myBlack hover:text-primaryDarkBlue80'}`}
                        >
                            {title}
                        </a>
                    </li>
                ))
            }
        </ul>
    )
}

function Header() {
    const [isOpenMenu, setIsOpenMenu] = useState(false)

    return (
        <header className='px-6 lg:px-10 xl:px-14 py-3.5 w-full fixed top-0 left-0 bg-white z-50 shadow'>
            <div className='w-full flex items-center justify-between'>
                <a href='/'>
                    <img
                        src='/Logo.svg'
                        alt='Logo'
                        className='w-[130px] h-[45px] object-cover'
                    />
                </a>

                {/* Desktop */}
                <nav className='hidden lg:flex items-center gap-6'>
                    <HeaderNavList data={headerMenu} />
                    <SelectLanguageList data={selectLanguage} />
                    <a
                        href="#"
                        className='inline-block font-medium text-base xl:text-lg xl:leading-7 rounded-xl transition-all duration-300 text-myWhite bg-primaryDarkBlue100 hover:bg-primaryDarkBlue80 p-3 text-center'
                    >
                        Tizimga kirish
                    </a>
                    <a
                        href="#"
                        className='inline-block font-medium text-base xl:text-lg xl:leading-7 rounded-xl transition-all duration-300 text-myBlack bg-primaryYellow100 hover:bg-primaryYellow80 p-3 text-center'
                    >
                        Ro'yxatdan o'tish
                    </a>
                </nav>

                {/* Mobile */}
                <div className='lg:hidden flex items-center gap-4'>
                    <SelectLanguageList data={selectLanguage} />
                    <button onClick={() => setIsOpenMenu(true)}>
                        <RiMenu4Fill size={32} className='text-myBlack' />
                    </button>
                </div>
            </div>

            {/* Slide-in Mobile Menu */}
            <div
                className={`fixed top-0 right-0 h-full w-[300px] bg-white shadow-lg z-50 px-6 py-5 transition-transform duration-300 ease-in-out
                ${isOpenMenu ? 'translate-x-0' : 'translate-x-full'}
                lg:hidden`}
            >
                <div className='flex justify-end mb-6'>
                    <button onClick={() => setIsOpenMenu(false)}>
                        <RiCloseLine size={30} className='text-myBlack' />
                    </button>
                </div>

                <HeaderNavList data={headerMenu} onClickLink={() => setIsOpenMenu(false)} />

                <div className='mt-8 flex flex-col gap-4'>
                    <a
                        href="#"
                        className='inline-block font-medium text-base xl:text-lg xl:leading-7 rounded-xl transition-all duration-300 text-myWhite bg-primaryDarkBlue100 hover:bg-primaryDarkBlue80 p-3 text-center'
                    >
                        Tizimga kirish
                    </a>
                    <a
                        href="#"
                        className='inline-block font-medium text-base xl:text-lg xl:leading-7 rounded-xl transition-all duration-300 text-myBlack bg-primaryYellow100 hover:bg-primaryYellow80 p-3 text-center'
                    >
                        Ro'yxatdan o'tish
                    </a>
                </div>
            </div>
            {/* Background overlay */}
            {
                isOpenMenu && (
                    <div
                        className='fixed inset-0 bg-black/40 z-40 lg:hidden'
                        onClick={() => setIsOpenMenu(false)}
                    ></div>
                )
            }
        </header>
    )
}

export default Header
