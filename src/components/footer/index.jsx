"use client"
import React, { useEffect, useMemo, useState } from 'react'
import Image from 'next/image'
import OfficeBg from '@/public/images/backgrounds/office.jpg'
import Logo from '@/public/images/logos/footer-logo.png'
import FooterBg from '@/public/images/footer/footer-bg.png'
import { footerData } from './data'
import { Divider } from '@nextui-org/react'
import { useTheme } from 'next-themes'

import xIcon from '@/public/images/icons/x.svg'
import facebookIcon from '@/public/images/icons/facebook.svg'
import instagramIcon from '@/public/images/icons/instagram.svg'
import linkedinIcon from '@/public/images/icons/linkedin.svg'
import tiktokIcon from '@/public/images/icons/tiktok.svg'
import youtubeIcon from '@/public/images/icons/youtube.svg'
import LeftSlider from './left-slider'


function Footer() {
    const currentYear = useMemo(() => new Date().getFullYear(), []);
    const [currentActive, setCurrentActive] = useState(0)
    const {theme, setTheme} = useTheme();

    const socialIcons = [
        {icon: youtubeIcon, title: "youtube", href:"https://www.youtube.com/@Arabhardware"}, 
        {icon: xIcon, title: "x", href:"https://x.com/arabhardware"}, 
        {icon: tiktokIcon, title: "tiktok", href:"https://www.tiktok.com/@arabhardware"}, 
        {icon: linkedinIcon, title: "linkedin", href:"https://www.linkedin.com/company/arabhardware.net"}, 
        {icon: instagramIcon, title: "instagram", href:"https://www.instagram.com/arabhardware/"}, 
        {icon: facebookIcon, title: "facebook", href:"https://www.facebook.com/arabhardware/"}, 
    ]

  return (
    <footer className='w-screen py-10 lg:py-16 h-svh bg-black relative text-zinc-400'
    style={{backgroundImage: `url(${OfficeBg.src})`}}>
        <div className="bg-gradient-to-b dark:from-black from-white from-10% dark:to-[#031d26]/10 to-black/10 absolute inset-0 backdrop-blur-sm" />

        <div className="absolute inset-0 flex flex-col items-center justify-between max-w-grid p-grid">
            <div className="flex items-end justify-between w-full my-8 flex-1 max-w-[1252px]">
                
                <div className="flex justify-between items-start flex-col w-full gap-4 mb-10">
                    <Image src={Logo} alt='arabhardware logo' className='size-24 object-contain dark:filter dark:invert' />
                    <div className="flex items-center justify-between text-black dark:text-white gap-8 text-lg">
                        {footerData?.map((_, i)=>{
                            return <p key={i} onClick={()=>setCurrentActive(i)}
                            className='relative cursor-pointer overflow-visible' >
                                <span>{_.title}</span>
                                <span className={`absolute h-1 w-2/5 min-w-6 left-1/2 -translate-x-1/2 top-[calc(100%+8px)] bg-primaryLight overflow-visible ${currentActive==i?'':'hidden'}`}>
                                    <span className={`absolute size-2 bg-white dark:bg-black -top-0.5 -right-1 dark:right-auto dark:-left-1 z-10 transition-all`}></span>
                                </span>
                            </p>
                        })}
                    </div>
                </div>
                <Divider orientation='vertical' className='bg-black dark:bg-white h-52'/>
                <div className="w-full h-full">
                    <LeftSlider data={footerData[currentActive]?.sections} />
                </div>
            </div>

            {/* red card */}
            <div className="p-4 w-full rounded-lg my-8 h-44 max-w-[1212px] bg-cover bg-right-top bg-no-repeat flex items-center justify-center relative"
            style={{
                backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 0.63) 0%, rgba(132, 132, 132, 0.126) 100%), url(${FooterBg.src})`,
            }}>
                <div className="flex items-center justify-between p-grid text-white w-full">
                    <div className="flex items-center justify-center gap-4">
                        <p>وثيقة الخصوصية</p>
                        <Divider orientation='vertical' className='bg-white w-0.5 h-6' />
                        <p>فريق التحرير</p>
                        <Divider orientation='vertical' className='bg-white w-0.5 h-6' />
                        <p>خريطة الموقع</p>
                    </div>

                    <div className="flex items-center justify-center xl:gap-8 gap-4 text-white">
                        {socialIcons.map((_, i)=>{
                            return <a key={i} href={_.href} target="_blank" rel="noopener noreferrer">
                                <Image src={_.icon} alt={_.title} className='xl:size-10 size-6' />
                            </a>
                        })}
                    </div>
                </div>

                
                <div className=" absolute w-fit left-1/2 -translate-x-1/2 bottom-4 text-white">
                    <p className="">جميع الحقوق محفوظة لعرب هاردوير © 
                    <span>{currentYear}</span>
                    </p>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer