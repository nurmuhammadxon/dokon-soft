import React from 'react'
// import data
import { useNetworkTypeData } from '../constants/index'
// i18next
import { useTranslation } from 'react-i18next'

const Card = ({ title, des, imgUrl, isBgColor = true }) => {

    return (
        <div className='sm:max-w-[350px] lg:max-w-[430px] w-full bg-primaryDarkBlue10 rounded-2xl p-5 md:p-7 hover:scale-105 transition-all duration-300'>
            <div className={`size-[100px] ${isBgColor ? 'bg-primaryDarkBlue80' : 'bg-primaryYellow80'} rounded-2xl flex items-center justify-center`}>
                <img
                    src={imgUrl}
                    alt={`${title} image`}
                    className='size-[50px]'
                    loading="lazy"
                />
            </div>
            <div className='w-full mt-2 s,:mt-5'>
                <h3 className='font-semibold text-lg md:text-2xl text-myBlack leading-8'>
                    {title}
                </h3>
                <p className='font-normal text-sm text-myBlack leading-5 sm:mt-5'>
                    {des}
                </p>
            </div>
        </div>
    )
}

function NetworkTypesPage() {
    const { t } = useTranslation()
    const { networkTypeMenu } = useNetworkTypeData()
    return (
        <section className='responsive-padding pt-10!'>
            <h2 className="sectionTitle">
                {t('titleNetworkType')}
            </h2>
            {/* content */}
            <div className='w-full grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3 justify-items-center my-4 sm:my-8'>
                {networkTypeMenu.map(({ title, des, imgUrl, isBgColor, id }) => (
                    <Card
                        key={id}
                        title={title}
                        des={des}
                        imgUrl={imgUrl}
                        isBgColor={isBgColor}
                    />
                ))}
            </div>
        </section>
    )
}

export default NetworkTypesPage