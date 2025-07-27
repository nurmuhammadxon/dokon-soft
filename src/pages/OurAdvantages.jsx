import React from 'react';
import { useTranslation } from 'react-i18next';
import { useAdvantagesData } from '../constants/index'

const TextCardBottom = ({ title, des, img, bgColorType }) => {
    let bgColor = '';

    switch (bgColorType) {
        case 'yellow80':
            bgColor = 'bg-primaryYellow80 text-myBlack';
            break;
        case 'blue10':
            bgColor = 'bg-primaryDarkBlue10 text-myBlack';
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
            sm:h-[315px]`}
        >
            <div className="relative z-10">
                <h3 className="font-semibold text-xl sm:text-2xl md:text-3xl">{title}</h3>
                <p className="font-normal text-sm sm:text-base mt-3.5">{des}</p>
            </div>
            <img
                src={img}
                alt={title}
                className="absolute bottom-0 right-0 object-contain w-52"
            />
        </div>
    );
};

function OurAdvantages() {
    const { advantagesTop, advantagesRight } = useAdvantagesData();
    const { t } = useTranslation()

    return (
        <section
            className="responsive-padding"
            id='ourAdvantages'
        >
            <h2 className="font-bold text-3xl sm:text-4xl text-myBlack">
                {t('titleAdvantages')}
            </h2>
            {/* Contents */}
            <div className="grid grid-cols-1 lg:grid-cols-2 sm:gap-4 mt-4">
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
                                {t('titleCardFirst')}
                            </h3>
                            <p className="font-normal text-sm sm:text-base text-myWhite mt-3.5">
                                {t('desCardFirst')}
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
                        title={t('titleCardSecond')}
                        des={t('desCardFirst')}
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
