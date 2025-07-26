import { v4 as uuidv4 } from 'uuid';
// icons import
import { FaInstagram, FaTelegramPlane, FaYoutube, FaFacebook } from "react-icons/fa";

export const headerMenu = [
    {
        id: uuidv4(),
        title: 'Biz haqimizda',
        link: '#aboutUs',
    },
    {
        id: uuidv4(),
        title: 'Afzalliklarimiz',
        link: '#ourAdvantages',
    },
    {
        id: uuidv4(),
        title: 'FAQ',
        link: '#faq ',
    },
]

export const selectLanguage = [
    {
        id: uuidv4(),
        language: 'UZ',
        value: 'uz'
    },
    {
        id: uuidv4(),
        language: 'RU',
        value: 'ru'
    },
]

export const advantagesTop = [
    {
        id: uuidv4(),
        bgColorType: 'yellow80',
        title: 'Mobil Moslik',
        des: 'Tizimni istalgan joydan, istalgan qurilmadan boshqarish imkoni mavjud.',
        img: 'taking-a-mobile-photo.png',
    },
    {
        id: uuidv4(),
        bgColorType: 'blue10',
        title: 'Hisobot va Tahlil Vositalari',
        des: 'Grafik tahlillar va jonli hisobotlar bilan tezroq qaror qabul qiling.',
        img: 'Group.png',
    },
];

export const advantagesRight = [
    {
        id: uuidv4(),
        bgColorType: 'blue10',
        title: 'Moslashtirilgan Yechimlar',
        des: 'ERP tizimi — aynan sizning ehtiyojlaringizga mos.',
        img: 'filling-survey.png',
    },
    {
        id: uuidv4(),
        bgColorType: 'yellow80',
        title: 'Avtomatlashtirilgan Jarayonlar',
        des: "Ortiqcha ishlar yo'q — faqat natija va tejalgan vaqt.",
        img: 'change-setting.png',
    },
    {
        id: uuidv4(),
        bgColorType: 'blue60',
        title: 'Rejalashtirish va Nazorat Imkoniyati',
        des: "Butun jarayon — bitta tizimda, to'liq nazorat bilan.",
        img: 'business-presentation.png',
    },
    {
        id: uuidv4(),
        bgColorType: 'yellow80',
        title: 'Xavfsizlik va Maxfiylik',
        des: "Himoyalangan tizim. Har kim faqat o'ziga tegishli bo'lgan ma'lumotga kira oladi.",
        img: 'security-shield.png',
    },
];

export const networkTypeMenu = [
    {
        id: uuidv4(),
        title: "Oziq-ovqat do'konlari",
        des: "Tez aylanma va ko'p mahsulot ERP orqali to'liq nazoratda. POS, ombor va xizmatlar yagona tizimda.",
        imgUrl: 'iconamoon_store.png',
        isBgColor: true,
    },
    {
        id: uuidv4(),
        title: "Qurilish materiallari do'konlari",
        des: "Narxlar, zakaz va yuklarni ERP tartibga soladi. Savdoda aniqlik va tezlik ta'minlanadi.",
        imgUrl: 'lets-icons_materials-light.png',
        isBgColor: false,
    },
    {
        id: uuidv4(),
        title: "Sklad / Ombor xizmatlari",
        des: "ERP orqali kirim-chiqim, zaxira va partiyalar doimiy nazoratda. Ombor samarali boshqariladi.",
        imgUrl: 'streamline-plump_warehouse-1.png',
        isBgColor: true,
    },
    {
        id: uuidv4(),
        title: "Mehmonxonalar",
        des: "Xonalar, rezervatsiya va to'lovlar yagona tizimda. Mijozlarga xizmat silliq yuradi.",
        imgUrl: 'lucide_hotel.png',
        isBgColor: false,
    },
    {
        id: uuidv4(),
        title: "O'quv markazlari / Kurslar",
        des: "O'quvchilar, jadval va to'lovlar ERP bilan boshqariladi. Davomat va natijalar avtomatik.",
        imgUrl: 'proicons_book.png',
        isBgColor: true,
    },
    {
        id: uuidv4(),
        title: "Kafe va restoranlar",
        des: "Buyurtma, POS va xizmat ERP bilan uyg'unlashadi. Tezkor va aniq boshqaruv.",
        imgUrl: 'hugeicons_restaurant-01.png',
        isBgColor: false,
    },
    {
        id: uuidv4(),
        title: "Dorixonalar",
        des: "Dori nomi, seriya va muddati ERP bilan nazoratda. Ombor va POS birlashtiriladi.",
        imgUrl: 'iconoir_pharmacy-cross-tag.png',
        isBgColor: true,
    },
    {
        id: uuidv4(),
        title: "Logistika va yetkazib berish",
        des: "Marshrutlar va yuk holati ERP orqali kuzatiladi. SMS va buyurtmalar avtomatlashtiriladi.",
        imgUrl: 'mdi-light_truck.png',
        isBgColor: false,
    },
    {
        id: uuidv4(),
        title: "Xizmat ko'rsatish servislar",
        des: "Yozilish, xizmatlar va mijozlar ERP orqali boshqariladi. CRM bilan sodiqlik oshadi.",
        imgUrl: 'hugeicons_service.png',
        isBgColor: true,
    },
]
export const faqList = [
    {
        id: uuidv4(),
        question: "ERP dasturi nima va u menga nima uchun kerak?",
        answer:
            "ERP (Enterprise Resource Planning) – bu kompaniyangizdagi barcha jarayonlarni (moliya, ombor, HR, sotuv va h.k.) yagona tizimda boshqaruvchi dastur. U orqali ish samaradorligini oshirasiz, xatoliklar kamayadi va qaror qabul qilish tezlashadi.",
    },
    {
        id: uuidv4(),
        question: "ERP o‘rnatish uchun mutaxassis keladimi?",
        answer:
            "Ha, ERP tizimini to‘g‘ri o‘rnatish uchun tajribali mutaxassis yoki jamoa kerak bo‘ladi. Ular tizimni sizning biznesingizga moslashtiradi, sozlaydi va ishga tushiradi.",
    },
    {
        id: uuidv4(),
        question: "Ma’lumotlarim xavfsiz saqlanadimi?",
        answer:
            "Albatta. Zamonaviy ERP tizimlari ma’lumotlarni shifrlash, foydalanuvchi huquqlarini boshqarish va server xavfsizligini ta’minlash kabi mexanizmlarga ega. Bulutli versiyalar ham doimiy xavfsizlik nazorati ostida bo‘ladi.",
    },
    {
        id: uuidv4(),
        question: "Dasturdan foydalanish uchun o‘rgatish shartmi?",
        answer:
            "Ha, ERP tizimi ko‘p funksiyali bo‘lgani uchun uni samarali ishlatish uchun qisqacha o‘quv yoki trening tavsiya etiladi. Ko‘pchilik ERP yetkazib beruvchilar o‘qitish xizmatini ham taklif qiladi.",
    },
    {
        id: uuidv4(),
        question: "Narxlar qanday belgilanadi?",
        answer:
            "ERP tizimining narxi funksiyalar soni, foydalanuvchilar soni, o‘rnatish turi (bulutli yoki lokal) va kompaniya o‘lchamiga qarab belgilanadi. Shuningdek, texnik xizmat va yangilanishlar ham narxga ta’sir qiladi.",
    },
    {
        id: uuidv4(),
        question: "Dasturdan qanday foydalanishni boshlayman?",
        answer:
            "Birinchi navbatda, ERP tizimi o‘rnatiladi va asosiy ma’lumotlaringiz kiritiladi. So‘ng sizga platformani qanday ishlatish bo‘yicha ko‘rsatma yoki trening beriladi. Shundan keyin real vaqt rejimida foydalanishni boshlashingiz mumkin.",
    },
    {
        id: uuidv4(),
        question: "Foydalanish uchun qo‘shimcha qurilma kerakmi?",
        answer:
            "Yo‘q, odatda alohida qurilma talab qilinmaydi. Kompyuter, planshet yoki hatto telefon orqali ham veb-brauzer yoki mobil ilova orqali ERP tizimidan foydalanish mumkin.",
    },
    {
        id: uuidv4(),
        question: "ERP dasturi qanday modullardan iborat?",
        answer:
            "ERP tizimi odatda quyidagi modullardan iborat: moliya, ombor, sotuv, xarid, HR (kadrlar), ishlab chiqarish, mijozlar bilan ishlash (CRM) va hisobotlar. Siz o‘z biznesingizga kerakli modullarni tanlashingiz mumkin.",
    },
    {
        id: uuidv4(),
        question: "ERP kichik biznesga ham mos keladimi?",
        answer:
            "Ha, ERP tizimlarining ko‘plab versiyalari aynan kichik va o‘rta biznes uchun mo‘ljallangan. Bu versiyalar oddiyroq, arzonroq va tez joriy etiladi.",
    },
    {
        id: uuidv4(),
        question: "Tizim yangilanib turadimi?",
        answer:
            "Ha, ERP tizimlari doimiy ravishda yangilanib boriladi. Yangilanishlar orqali yangi funksiyalar qo‘shiladi, xatoliklar tuzatiladi va xavfsizlik kuchaytiriladi.",
    },
]

export const footerMenu = [
    {
        id: uuidv4(),
        item: 'Biz haqimizda',
        linkId: '#aboutUs',
    },
    {
        id: uuidv4(),
        item: 'Afzalliklarimiz',
        linkId: '#ourAdvantages',
    },
    {
        id: uuidv4(),
        item: 'FAQ',
        linkId: '#faq',
    },
]

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
]