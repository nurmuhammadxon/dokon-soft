import React from 'react';
import { advantagesRight, advantagesTop } from '../constants/index'

const TextCardBottom = ({ title, des, img, widthBig = false, heightBig = false, bgColorType }) => {
    let bgColor = '';

    switch (bgColorType) {
        case 'yellow80':
            bgColor = 'bg-primaryYellow80 text-myBlack';
            break;
        case 'blue10':
            bgColor = 'bg-primaryDarkBlue10 text-myWhite';
            break;
        case 'blue60':
            bgColor = 'bg-primaryDarkBlue60 text-myWhite';
            break;
        case 'blue80':
            bgColor = 'bg-primaryDarkBlue80 text-myWhite';
            break;
    }

    return (
        <div
            className={`relative w-full p-5 rounded-2xl overflow-hidden hover:-translate-y-2 transition-all duration-200 ${bgColor} 
            ${widthBig ? 'h-[315px] md:h-[650px]' : 'h-[315px]'} 
            sm:h-[315px] md:${heightBig ? 'h-[650px]' : 'h-[315px]'}`}
        >
            <div className="relative z-10">
                <h3 className="font-semibold text-xl sm:text-2xl md:text-3xl">{title}</h3>
                <p className="font-normal text-sm sm:text-base mt-3.5">{des}</p>
            </div>
            <img
                src={img}
                alt={title}
                className="absolute bottom-0 right-0 object-contain"
            />
        </div>
    );
};

function OurAdvantages() {
    return (
        <section
            className="px-4 sm:px-6 md:px-10 pt-4 md:pt-20"
            id='ourAdvantages'
        >
            <h2 className="font-bold text-3xl sm:text-4xl text-myBlack">
                Bizning afzalliklarimiz
            </h2>
            {/* Contents */}
            <div className="grid grid-cols-1 md:grid-cols-2 sm:gap-4 mt-4">
                {/* left content */}
                <div className="grid gap-2.5 sm:gap-4">
                    <div className="relative p-5 bg-primaryDarkBlue80 rounded-2xl overflow-hidden min-h-[350px] md:min-h-[650px] w-full hover:-translate-y-2 transition-all duration-200">
                        <img
                            src="/slang-to-the-moon.png"
                            alt="moon"
                            className="absolute top-0 right-0 w-40 sm:w-60 md:w-80 object-contain"
                        />
                        <div className="absolute bottom-7 left-6 right-6 z-10">
                            <h3 className="font-semibold text-2xl sm:text-3xl text-myWhite">
                                Yagona Platforma — Yagona Nazorat
                            </h3>
                            <p className="font-normal text-sm sm:text-base text-myWhite mt-3.5">
                                Barcha bo‘limlar va jarayonlarni bitta tizimda birlashtiramiz. Hisobotlar, savdo,
                                ombor, moliya va HR bir joyda boshqariladi.
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-4">
                        {advantagesTop.map((item) => (
                            <TextCardBottom key={item.id} {...item} />
                        ))}
                    </div>
                </div>
                {/* right content */}
                <div className="grid gap-2.5 sm:gap-4 mt-2.5 md:mt-0">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-4">
                        {advantagesRight.map((item) => (
                            <TextCardBottom key={item.id} {...item} />
                        ))}
                    </div>
                    <TextCardBottom
                        title="Doimiy Texnik Qo‘llab-quvvatlash"
                        des="Biz siz bilan hamkorlikda ishlaymiz. Har qanday muammoga tez va samarali yechim taqdim etamiz."
                        img="/designer-working.png"
                        widthBig={true}
                        bgColorType="blue80"
                    />
                </div>
            </div>
        </section>
    );
}

export default OurAdvantages;
