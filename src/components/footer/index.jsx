import React, { useEffect, useMemo } from 'react'
import Image from 'next/image'
import { Divider } from '@nextui-org/react'
import LogoImg from '@/public/images/logo_icon.png'
import GooglePlay from '../ui/icons/google-play'
import AppStore from '../ui/icons/app-store'
import Facebook from '../ui/icons/facebook'
import Youtube from '../ui/icons/youtube'
import Instagram from '../ui/icons/instagram'
import LinkedIn from '../ui/icons/linkedin'
import Tiktok from '../ui/icons/tiktok'
import X from '../ui/icons/x'

function BoldText ({text}) {
    return <p className="font-bold text-white text-large">{text}</p>
}

function Footer() {
    const currentYear = useMemo(() => new Date().getFullYear(), []);
  return (
    <footer className='w-screen py-10 lg:py-16 flex flex-col items-start justify-center bg-black relative text-zinc-400'>
        <div className="p-grid max-w-grid w-full grid grid-cols-12 gap-4 items-center justify-center">
            <div className="space-y-2 col-span-12 lg:col-span-5 ml-4">
                <Image src={LogoImg} alt='arabhardware logo' className='size-24' />
                <BoldText text="عرب هاردوير" />
                <p>واحد من أكبر المجتمعات التقنية فى الشرق الأوسط تتحدث عن أحدث التقنيات فى مجال الهاردوير والألعاب والهواتف</p>
            </div>

            <div className="space-y-2 col-span-12 lg:col-span-4">
                <BoldText text='القائمة' />
                <div className="grid grid-cols-2 grid-rows-4 gap-4 items-center justify-center">
                    <p>عن عرب هاردوير</p>
                    <p>اتصل بنا</p>
                    <p>الرياضة الالكترونية</p>
                    <p>فريق التحرير</p>
                    <p>وثيقة الخصوصية</p>
                    <p>خريطة الموقع</p>
                </div>
            </div>

            <div className="space-y-4 col-span-12 lg:col-span-3">
                <div className="space-y-2">
                    <BoldText text='قريباً تطبيقات الموبايل' />
                    <div className="flex items-center gap-4">
                        <GooglePlay />
                        <AppStore />
                    </div>
                </div>
                <div className="space-y-2">
                    <BoldText text='تابعونا على' />
                    <div className="flex items-center gap-2 flex-wrap">
                        <Facebook size={30} />
                        <X size={30} />
                        <Youtube size={30} />
                        <Instagram size={30} />
                        <Tiktok size={30} />
                        <LinkedIn size={30} />
                    </div>
                </div>
            </div>
        </div>
        <Divider className="my-4" />
        <div className="p-grid max-w-grid w-full">
            <p className="">جميع الحقوق محفوظة لعرب هاردوير © 
            <span>{currentYear}</span>
            </p>
        </div>
    </footer>
  )
}

export default Footer