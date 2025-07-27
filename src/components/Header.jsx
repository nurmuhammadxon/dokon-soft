import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
// icons
import { RiMenu4Fill, RiCloseLine } from "react-icons/ri"
// constants
import { siteSections } from '../constants'
// components
import SelectLanguageList from './SelectLanguageList'
// i18next
import { useTranslation } from 'react-i18next'
import i18n from '../locale/i18n';

const HeaderNavList = ({ data }) => {
    const pathName = useLocation().hash
    const { t } = useTranslation()

    return (
        <ul className='flex flex-col lg:flex-row gap-6'>
            {
                data.map(({ id, title, link }) => (
                    <li key={id}>
                        <a
                            href={link}
                            className={`text-lg ${pathName === link ? 'text-primaryYellow90 hover:text-primaryYellow70' : 'text-myBlack hover:text-primaryDarkBlue80'}`}
                        >
                            {t(title)}
                        </a>
                    </li>
                ))
            }
        </ul>
    )
}

function Header() {
    const [isOpenMenu, setIsOpenMenu] = useState(false)
    const { t } = useTranslation()

    const changeLang = (value) => {
        i18n.changeLanguage(value)
    }

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
                    <HeaderNavList data={siteSections} />
                    <SelectLanguageList changeLang={changeLang} />
                    <a
                        href="#"
                        className='header_btn text-myWhite bg-primaryDarkBlue100 hover:bg-primaryDarkBlue80'>
                        {t('signIn')}
                    </a>
                    <a
                        href="#"
                        className='header_btn text-myBlack bg-primaryYellow100 hover:bg-primaryYellow80'
                    >
                        {t('signUp')}
                    </a>
                </nav>

                {/* Mobile */}
                <div className='lg:hidden flex items-center gap-4'>
                    <SelectLanguageList changeLang={changeLang} />
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

                <HeaderNavList data={siteSections} onClickLink={() => setIsOpenMenu(false)} />

                <div className='mt-8 flex flex-col gap-4'>
                    <a
                        href="#"
                        className='header_btn text-myWhite bg-primaryDarkBlue100 hover:bg-primaryDarkBlue80'
                    >
                        {t('signIn')}
                    </a>
                    <a
                        href="#"
                        className='header_btn  text-myBlack bg-primaryYellow100 hover:bg-primaryYellow80'
                    >
                        {t('signUp')}
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
