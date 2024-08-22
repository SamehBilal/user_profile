import { ShoppingBag, BriefcaseBusiness, Newspaper, SquarePlay, SquareGanttChart } from "lucide-react"

export const ar = {
    navbar: {
        "greeting": "صباح الفل",
        "searchPlaceholder": "عن ماذا تبحث اليوم",
        "searchAbout": {
            title: "",
            smallTitle: "",
            items: [
                {title: "المتجر", desc: "ابحث عن منتجات في المتجر", icon: ShoppingBag, link:'/search?for=المتجر'},
                {title: "المقالات", desc: "ابحث عن احدث المقالات", icon: Newspaper, link:'/search?for=المقالات'},
                {title: "الفيديوهات", desc: "ابحث عن احدث الفيديوهات", icon: SquarePlay, link:'/search?for=الفيديوهات'},
                {title: "المراجعات", desc: "ابحث عن احدث المراجعات", icon: SquareGanttChart, link:'/search?for=المراجعات'},
            ]
        },
        "login": "تسجيل دخول",
        "logout": "تسجيل خروج"
    },
    middle: {
        latestInStore: "الأحدث في المتجر:",
        latestInBlogs: "أحدث المدونات:",
        latestInGaming: "أحدث اخبار الألعاب:",
        imageMessage: "اكتشف المزيد لدينا"
    },
    login: {
        title: "مرحبا بك في عرب هاردوير",
        subTitle1: "ليس لديك حساب؟",
        subTitle2: "اعمل حساب",
        subTitle3: "",
        email: "البريد الالكتروني",
        password: "كلمة السر",
        password1: "ادخل كلمة المرور",
        password1Error: "يجب ان تحتوي كلمة السر على حرف كبير، وحرف صغير، ورمز ورقم، وان تكون على الاقل 8 احرف.",
        password2: "اعد ادخال كلمة المرور",
        password2Error: "كلمة المرور لا تتطابق.",
        loginFrom: "أو عن طريق",
        btn: "تسجيل الدخول",
        lost: "نسيت كلمة المرور؟ ادخل بريدك الالكتروني وسنقوم بارسال رسالة اليك لتعيين كلمة مرور جديدة.",
        back: "العودة لصفحة تسجيل الدخول",
        forgetBtn: "ارسال",
        forget: "نسيت كلمة المرور؟"
    },
    register: {
        title: "تسجيل حساب جديد في عرب هاردوير",
        subTitle1:"لديك حساب؟",
        subTitle2: "تسجيل الدخول.",
        email: "البريد الالكتروني",
        phone: "رقم التلفون",
        password: "كلمة السر",
        firstName: "الاسم الاول",
        lastName: "الاسم الاخير",
        terms: "اقبل الاحكام وشروط الاستخدام",
        registerFrom: "أو عن طريق",
        btn: "التسجيل",
    }
}

export const en = {
    navbar: {
        "greeting": "Good Morning",
        "searchPlaceholder": "What do you need today",
        "searchAbout": {
            title: "topic",
            items: [
                {title: "store", desc: "products in store", icon: ShoppingBag},
                {title: "business", desc: "work in business", icon: BriefcaseBusiness},
                {title: "news", desc: "articles in news", icon: Newspaper},
            ]
        },
        "login": "Login",
        "logout": "Logout"
    },
    middle: {
        latestInStore: "Latest in store:",
        latestInBlogs: "Latest in blogs:",
        latestInGaming: "Latest in gaming:",
        imageMessage: "There is more to discover"
    },
    login: {
        title: "Login",
        subTitle1: "Don`t have an account?",
        subTitle2: "Create your account",
        subTitle3: "it takes less than one minutes",
        email: "Email",
        password: "Password",
        password1: "Enter your new password",
        password1Error: "password didn't match",
        password2: "Re-Enter your new password",
        password2Error: "password didn't match",
        registerFrom: "or by",
        btn: "Login",
        lost: "Lost your password? Please enter your email address. You will receive a link to create a new password.",
        back: "Back to login page",
        forgetBtn: "Send",
        forget: "Forget Passord?"
    },
    register: {
        title: "Register",
        subTitle1: "Already have an account?",
        subTitle2: "Login to your account",
        email: "Email",
        phone: "Mobile Number",
        password: "Password",
        firstName: "First Name",
        lastName: "Last Name",
        terms: "I Accept terms and conditions",
        registerFrom: "or by",
        btn: "Register",
    }
}