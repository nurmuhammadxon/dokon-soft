import React from 'react';
// components
import Button from '../components/Button';
// i18next
import { Trans, useTranslation } from 'react-i18next';

const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

function HeroPage() {
    const { t } = useTranslation()

    return (
        <section className='relative overflow-hidden responsive-padding mt-8 md:mt-14  min-h-[400px] sm:min-h-[500px] flex items-center'>
            {/* Yellow background wave - Left side */}
            <div className="absolute top-10 left-[-100px] w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-primaryYellow20 rounded-full blur-[100px] z-0" />
            {/* Yellow background wave - Right side */}
            <div className="absolute bottom-0 right-[-100px] w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-primaryYellow20 rounded-full blur-[100px] z-0" />
            {/* Content */}
            <div className="relative z-10 w-full px-4 sm:px-6 md:px-10">
                <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-center text-myBlack leading-tight">
                    <Trans i18nKey="titleHero" components={{
                        1: <span className="text-primaryYellow100" />,
                        3: <br className="hidden sm:block" />
                    }} />
                </h1>
                <p className="text-center text-primaryDarkBlue50 mt-4 max-w-xl mx-auto text-base sm:text-lg">
                    {t('subtitleHero')}
                </p>
                <div className="flex items-center justify-center mt-6 sm:mt-8 gap-4">
                    <Button
                        title={t("buttonAbout")}
                        colorType="primaryDark"
                        onClickBtn={() => scrollToSection('aboutUs')}
                    />
                    <Button
                        title={t('buttonContact')}
                        colorType="primaryYellow"
                    />
                </div>
            </div>
        </section>
    );
}

export default HeroPage;
