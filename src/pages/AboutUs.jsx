import React from 'react';
// i18next
import { useTranslation } from 'react-i18next';

function AboutUs() {
    const { t } = useTranslation()

    return (
        <section
            className='responsive-padding'
            id='aboutUs'
        >
            <h2 className='text-myBlack font-bold text-3xl sm:text-4xl text-left'>
                {t('titleAbout')}
            </h2>
            <div className='pt-4'>
                {/* Img */}
                <div className='w-full h-auto overflow-hidden rounded-xl'>
                    <img
                        src="/Frame36.png"
                        alt="image about us"
                        className='w-full h-full object-cover max-h-[400px]'
                    />
                </div>

                {/* content */}
                <div className='flex flex-col sm:flex-row items-start justify-between w-full gap-2.5 md:gap-6 mt-6'>
                    <div className='w-full sm:w-[48%]'>
                        <p className='font-normal text-base sm:text-lg text-primaryDarkBlue50 text-left sm:text-left'>
                            {t('textLeft')}
                        </p>
                    </div>
                    <div className='w-full sm:w-[48%]'>
                        <p className='font-normal text-base sm:text-lg text-primaryDarkBlue50 text-left sm:text-right'>
                            {t('textRight')}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutUs;
