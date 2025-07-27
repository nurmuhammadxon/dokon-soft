import { v4 as uuidv4 } from 'uuid';
// icons import
import { FaInstagram, FaTelegramPlane, FaYoutube, FaFacebook } from "react-icons/fa";
// i18next
import { useTranslation } from 'react-i18next';

// site Sections
export const siteSections = [
    {
        id: uuidv4(),
        title: 'about',
        link: '#aboutUs',
    },
    {
        id: uuidv4(),
        title: 'advantage',
        link: '#ourAdvantages',
    },
    {
        id: uuidv4(),
        title: 'faq',
        link: '#faq',
    },
];

// advantages section
export const useAdvantagesData = () => {
    const { t } = useTranslation();

    const advantagesTop = [
        {
            id: uuidv4(),
            bgColorType: 'yellow80',
            title: t('advantagesTop.0.title'),
            des: t('advantagesTop.0.des'),
            img: 'taking-a-mobile-photo.png',
        },
        {
            id: uuidv4(),
            bgColorType: 'blue10',
            title: t('advantagesTop.1.title'),
            des: t('advantagesTop.1.des'),
            img: 'Group.png',
        },
    ];

    const advantagesRight = [
        {
            id: uuidv4(),
            bgColorType: 'blue10',
            title: t('advantagesRight.0.title'),
            des: t('advantagesRight.0.des'),
            img: 'filling-survey.png',
        },
        {
            id: uuidv4(),
            bgColorType: 'yellow80',
            title: t('advantagesRight.1.title'),
            des: t('advantagesRight.1.des'),
            img: 'change-setting.png',
        },
        {
            id: uuidv4(),
            bgColorType: 'blue60',
            title: t('advantagesRight.2.title'),
            des: t('advantagesRight.2.des'),
            img: 'business-presentation.png',
        },
        {
            id: uuidv4(),
            bgColorType: 'yellow80',
            title: t('advantagesRight.3.title'),
            des: t('advantagesRight.3.des'),
            img: 'security-shield.png',
        },
    ];

    return { advantagesTop, advantagesRight };
};

// networkType section
export const useNetworkTypeData = () => {
    const { t } = useTranslation();

    const networkTypeMenu = [
        {
            id: uuidv4(),
            title: t("networkType.0.title"),
            des: t("networkType.0.des"),
            imgUrl: 'iconamoon_store.png',
            isBgColor: true,
        },
        {
            id: uuidv4(),
            title: t("networkType.1.title"),
            des: t("networkType.1.des"),
            imgUrl: 'lets-icons_materials-light.png',
            isBgColor: false,
        },
        {
            id: uuidv4(),
            title: t("networkType.2.title"),
            des: t("networkType.2.des"),
            imgUrl: 'streamline-plump_warehouse-1.png',
            isBgColor: true,
        },
        {
            id: uuidv4(),
            title: t("networkType.3.title"),
            des: t("networkType.3.des"),
            imgUrl: 'lucide_hotel.png',
            isBgColor: false,
        },
        {
            id: uuidv4(),
            title: t("networkType.4.title"),
            des: t("networkType.4.des"),
            imgUrl: 'proicons_book.png',
            isBgColor: true,
        },
        {
            id: uuidv4(),
            title: t("networkType.5.title"),
            des: t("networkType.5.des"),
            imgUrl: 'hugeicons_restaurant-01.png',
            isBgColor: false,
        },
        {
            id: uuidv4(),
            title: t("networkType.6.title"),
            des: t("networkType.6.des"),
            imgUrl: 'iconoir_pharmacy-cross-tag.png',
            isBgColor: true,
        },
        {
            id: uuidv4(),
            title: t("networkType.7.title"),
            title: t("networkType.7.title"),
            imgUrl: 'mdi-light_truck.png',
            isBgColor: false,
        },
        {
            id: uuidv4(),
            title: t("networkType.7.title"),
            des: t("networkType.7.des"),
            imgUrl: 'hugeicons_service.png',
            isBgColor: true,
        },
    ];

    return { networkTypeMenu };
};

// FAQ section
export const useFAQData = () => {
    const { t } = useTranslation()

    const faqList = [
        {
            id: uuidv4(),
            question: t('faqTranslation.0.question'),
            answer: t('faqTranslation.0.answer')
        },
        {
            id: uuidv4(),
            question: t('faqTranslation.1.question'),
            answer: t('faqTranslation.1.answer')
        },
        {
            id: uuidv4(),
            question: t('faqTranslation.2.question'),
            answer: t('faqTranslation.2.answer')
        },
        {
            id: uuidv4(),
            question: t('faqTranslation.3.question'),
            answer: t('faqTranslation.3.answer')
        },
        {
            id: uuidv4(),
            question: t('faqTranslation.4.question'),
            answer: t('faqTranslation.4.answer')
        },
        {
            id: uuidv4(),
            question: t('faqTranslation.5.question'),
            answer: t('faqTranslation.5.answer')
        },
        {
            id: uuidv4(),
            question: t('faqTranslation.6.question'),
            answer: t('faqTranslation.6.answer')
        },
        {
            id: uuidv4(),
            question: t('faqTranslation.7.question'),
            answer: t('faqTranslation.7.answer')
        },
        {
            id: uuidv4(),
            question: t('faqTranslation.8.question'),
            answer: t('faqTranslation.8.answer')
        },
        {
            id: uuidv4(),
            question: t('faqTranslation.9.question'),
            answer: t('faqTranslation.9.answer')
        },
    ];

    return { faqList }
}

export const socialLinks = [
    {
        id: uuidv4(),
        name: 'Facebook',
        icon: FaFacebook,
        url: '#',
    },
    {
        id: uuidv4(),
        name: 'Instagram',
        icon: FaInstagram,
        url: '#',
    },
    {
        id: uuidv4(),
        name: 'Telegram',
        icon: FaTelegramPlane,
        url: '#',
    },
    {
        id: uuidv4(),
        name: 'Youtube',
        icon: FaYoutube,
        url: '#',
    },
];