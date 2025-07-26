import React from 'react'
import { Link } from 'react-router-dom'
import { footerMenu, socialLinks } from '../constants'

const Footer = () => {
    return (
        <footer className="w-full bg-primaryDarkBlue10 px-5 md:px-10 lg:px-14 py-10">
            <div className="flex flex-col md:flex-row justify-between gap-4 sm:gap-6 md:gap-10 flex-wrap">

                {/* Company logo and description */}
                <div className="max-w-full md:max-w-[400px]">
                    <a href="/" className="inline-block">
                        <img
                            src="/Logo.svg"
                            alt="Company Logo"
                            className="w-[130px] h-[45px] object-cover"
                        />
                    </a>
                    <p className="mt-5 text-base md:text-lg font-normal text-myBlack">
                        Savdo, Moliya, Ombor, HR – barchasi yagona DSOFT ERP/CRM tizimida. Ish jarayonlarini avtomatlashtiring, savdoni oshiring.
                    </p>
                </div>

                {/* Navigation links */}
                <ul className="flex flex-col gap-3">
                    {footerMenu.map(({ id, item, linkId }) => (
                        <li key={id}>
                            <a
                                href={linkId}
                                className="text-base md:text-lg font-normal text-myBlack hover:text-primaryDarkBlue90 transition-colors duration-150"
                            >
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Contact info and social links */}
                <div className="flex flex-col gap-2.5 sm:gap-4">
                    <div>
                        <p className="text-base md:text-lg font-normal text-myBlack">
                            Biz bilan bog'lanish uchun:
                        </p>
                        <p className="text-base md:text-lg font-normal text-primaryDarkBlue90">
                            +998 99 999 99 99
                        </p>
                    </div>

                    <div className="mt-2">
                        <p className="text-base md:text-lg font-normal text-myBlack">
                            Ijtimoiy tarmoqlar:
                        </p>
                        <ul className="flex items-center gap-4 mt-3">
                            {socialLinks.map(({ id, name, icon: Icon, url }) => (
                                <li
                                    key={id}
                                    className="size-10 md:size-11 flex items-center justify-center rounded-xl bg-primaryDarkBlue100 hover:scale-105 transition-transform duration-200"
                                >
                                    <a
                                        href={url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={name}
                                        className="text-white hover:text-primaryYellow transition-colors duration-200"
                                    >
                                        <Icon size={18} className="md:size-5" />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Footer bottom section */}
            <div className="flex flex-col md:flex-row items-center justify-between mt-12 gap-5">
                <p className="text-sm font-normal text-myBlack text-center md:text-left">
                    © {new Date().getFullYear()} Barcha huquqlar himoyalangan
                </p>
                <div className="flex flex-wrap gap-5">
                    <Link
                        to="#"
                        className="text-sm font-normal text-myBlack hover:text-primaryDarkBlue90 transition-colors duration-150"
                    >
                        Foydalanuvchi qoidalari
                    </Link>
                    <Link
                        to="#"
                        className="text-sm font-normal text-myBlack hover:text-primaryDarkBlue90 transition-colors duration-150"
                    >
                        Maxfiylik siyosati
                    </Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer
