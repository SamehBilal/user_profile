
import Logo from '@/public/images/logo.png'
import AhwLogo from '@/public/images/logos/ahw_logo.svg'
import AhwBusinessLogo from '@/public/images/logos/ahw_business.png'
import AhwStoreLogo from '@/public/images/logos/ahw_store.png'
import AhwGamingLogo from '@/public/images/logos/ahw_gaming.png'
import Image from 'next/image'

const AhwNet = () => {
    return <div className="flex items-center justify-center cursor-pointer hover:bg-zinc-400 rounded-lg p-2">
    <Image src={AhwLogo} alt='ArabHardware net' className='size-12 object-contain' />
    </div>
}
const AhwGaming = () => {
    return <div className="flex items-center justify-center cursor-pointer hover:bg-zinc-400 rounded-lg p-2">
    <Image src={AhwGamingLogo} alt='ArabHardware net' className=' size-12 object-contain' />
    </div>
}
const AhwBusiness = () => {
    return <div className="flex items-center justify-center cursor-pointer hover:bg-zinc-400  rounded-lg p-2">
    <Image src={AhwBusinessLogo} alt='ArabHardware business' className='size-12 object-contain' />
    </div>
}
const AhwStore = () => {
    return <div className="flex items-center justify-center cursor-pointer hover:bg-zinc-400 rounded-lg p-2">
    <Image src={AhwStoreLogo} alt='ArabHardware store' className=' size-12 object-contain' />
    </div>
}
export const moreData = [
    [AhwNet, AhwGaming, AhwBusiness, AhwStore],
    {
        title: "عرب هاردوير", 
        list: [
            {title: "اخبار"},
            {title: "مقالات"},
            {title: "مراجعات"},
            {title: "رياضات إلكترونية"},
            {title: "ذكاء صناعي"},
        ],
    },
    {
        title: "المتجر", 
        list: [
            {title: "تجميعات عرب هاردوير"},
            {title: "ملحقات الكمبيوتر"},
            {title: "أجهزة التخزين"},
            {title: "الاكسسوارات"},
            {title: "خدمات عرب هاردوير"},
            {title: "لابتوب"},
            {title: "بلاي ستيشن"},
            {title: "كراسي جيمنج"},
            {title: "الشبكات"},
            {title: "اوبن بوكس"},
        ],
    },
    {
        title: "اعمال عرب هاردوير", 
        list: [
            {title: "عن عرب هاردوير"},
            {title: "الخدمات"},
            {title: "المشاريع"},
            {title: "الاستوديو"},
            {title: "الشركاء"},
        ],
    },
    {
        title: "تواصل معنا", 
        list: [
            {title: "فريق الاعمال"},
            {title: "مكتب القاهرة"},
            {title: "مكتب دبي"},
            {title: "فريق المحتوى"},
            {title: "المتجر"},
            {title: "فريق التطوير"},
            {title: "مكتب التوظيف"},
        ],
    },
]

// if email
// if registered
// generate token
// send mail
// url 