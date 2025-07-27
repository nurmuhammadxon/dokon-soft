import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { translationsUz } from '../locale/translationsUz';
import { translationsRu } from '../locale/translationsRu';

i18n.use(initReactI18next).init({
    resources: {
        uz: { translation: translationsUz },
        ru: { translation: translationsRu }
    },
    lng: 'uz',
    fallbackLng: 'uz',
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;
