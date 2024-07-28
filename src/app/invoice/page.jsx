import React from 'react'
import Image from 'next/image'
import InvoiceBg from '@/public/images/backgrounds/invoice-bg.png'
import Logo from '@/public/images/logos/ahw_store_logo.png'
import QR from '@/public/images/qr.png'
import Appbar from '@/components/appbar'
import { MapPin, Phone, Mail } from 'lucide-react'

function Page() {
    const data = {
        headers: ['رقم', 'وصف المنتج', 'الكمية', 'سعر الوحدة باستثناء الضريبة', 'الضريبة%',  'المجموع باستثناء الضريبة'],
        rows: [
            ['AHW-3D-HS-HLD-B', 'Headphone Desk Stand 3D Printed - Black', '1', '195.00', '14', '195.00'],
            ['AHW-3D-PS-CNT-B', 'Under Desk Mount for PS5/PS4 Controller 3D Printed - Black', '2', '32.00', '14', '64.00'],
            ['التوصيل', 'استلام من المتجر', '1', '0.00', '14', '0.00'],
        ]
    }

  return (
    <div className=" max-w-3xl my-12 mx-auto bg-white text-black shadow-sm relative text-sm"
    style={{
        backgroundColor: 'white', backgroundImage: ` url(${InvoiceBg.src})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
        {/* <Image src={InvoiceBg} alt='retro environment' className='size-full object-cover' /> */}
        <div className="p-10 space-y-4">
            <header className="flex items-top justify-between">
                <div className="space-y-1">
                    <h1 className='text-2xl font-bold'>تأكيد الطلب: SO-007104</h1>
                    <p className='my-1 text-xs'>يوليو 17، 2024</p>
                    <p className='my-1 text-xs'>صفحة 1/1</p>
                </div>
                <div className="">
                    <Image src={Logo} alt="Arabhardware" className='h-12 object-contain object-center w-fit' />
                    <Image src={QR} alt="QR Code" className='w-12 mt-2 ml-2 mr-auto' />
                </div>
            </header>
            <section className="flex justify-between items-start">
                <div className='w-fit'>
                    <p className=' text-zinc-800 font-bold text-xs flex items-center gap-4'>Ibrahim Hamdy
                    </p>
                    <p>01210699991</p>
                    <div className=" -space-y-1">
                        <p className=''>6 اكتوبر</p>
                        <p className='space-x-2'>
                            <span>الجيزة  </span>
                            <span>-</span>
                            <span>مصر</span>
                        </p>
                    </div>
                </div>
                <div className='w-44'>
                    <p className=' text-zinc-800 font-bold text-xs'>متجر عرب هاردوير</p>
                    <div className="space-y-1">
                        <p className=''>6 اكتوبر، 98 المنطقة السياحية</p>
                        <p className='flex gap-2'>
                            <span>الجيزة 11432  </span>
                            <span>-</span>
                            <span>مصر</span>
                        </p>
                    </div>
                </div>
            </section>
            <section className="flex justify-between items-start">
                <div className="space-y-1">
                    <p className="text-zinc-800 font-bold text-xs">طريقة التوصيل</p>
                    <p>الاستلام من المتجر</p>
                </div>
                <div className="space-y-1">
                    <p className="text-zinc-800 font-bold text-xs">رقم الملاحظة</p>
                    <p></p>
                </div>
                <div className="space-y-1 w-44">
                    <p className="text-zinc-800 font-bold text-xs">رقم الملف الخارجي</p>
                    <p>DEMOSTORE-6496</p>
                </div>
            </section>
            <table className="w-full border-collapse">
                <thead>
                    <tr className='[&>*]:border [&>*]:border-solid [&>*]:border-[#ddd] [&>*]:bg-[#f2f2f2] [&>*]:p-2 [&>*]:text-center'>
                        {data.headers.map((_, i)=>{
                            return <th key={i} className=''>{_}</th>
                        })}
                    </tr>
                </thead>
                <tbody>
                    {/* <th className=''>{`${index}.`}</th> */}
                    {data.rows.map((row, index)=>{
                        return <tr key={index} 
                        className='[&>*]:border [&>*]:border-solid [&>*]:border-[#ddd] [&>*]:p-2 [&>*]:text-center'>
                            {row.map((_, i)=>{
                                return <td key={i} className={`${(i==0 || i==1)&&'text-xs'}`}>{_}</td>
                            })}
                        </tr>
                    })}
                </tbody>
            </table>
            <div className="text-right space-y-1 w-52">
                <p className="flex items-center justify-between">
                    <span>المجموع الجزئي: </span>
                    <span>259.00</span>
                </p>
                <p className="flex items-center justify-between">
                    <span>الضريبة 14%: </span>
                    <span>36.26</span>
                </p>
                <p className="flex items-center justify-between font-bold">
                    <span className='underline'>المجموع مع الضريبة: </span>
                    <span>295.26</span>
                </p>
            </div>
            <section className="w-4/5">
                <h4 className='text-xs font-bold'>الشروط والاحكام</h4>
                <p>
                شكراً لتسوقكم مع متجر عرب هاروير. نرجو ملاحظة أنه يمكنكم تبديل أو ترجيع البضاعة المباعة في حال كانت مُغلفة بشكل جيد ولم تُستخدم. نسعى دائماً لرضاكم ونهدف إلى تقديم أفضل خدمة.
                </p>
            </section>
            <footer className=" text-zinc-800 space-y-4">
                <div className="flex justify-between items-center gap-12">
                    <div className="flex items-center justify-start gap-2 w-1/4">
                        <MapPin className='bg-black/50 rounded-lg p-1 size-6 text-white' strokeWidth={2} />
                        <a href='https://ahw.store' target='_blank' className=''>ahw.store</a>
                    </div>
                    <div className="flex items-center justify-start gap-2 w-1/4">
                        <Phone className='bg-black/50 rounded-lg p-1 size-6 text-white' strokeWidth={2} />
                        <p className=''>0238250220</p>
                    </div>
                    <div className="flex items-center justify-start gap-2 w-1/4">
                        <Mail className='bg-black/50 rounded-lg p-1 size-6 text-white' strokeWidth={2} />
                        <a href="mailto:info@ahw.store" className=''>info@ahw.store</a>
                    </div>
                </div>
                <div className="flex justify-between gap-12">
                    <div className="w-1/4">
                        <p className="text-xs text-zinc-800">IBAN</p>
                        <p className=''>EG360010020000000100052081488</p>
                    </div>
                    <div className="w-1/4">
                        <p className="text-xs text-zinc-800">SWIFT Code</p>
                        <p className=''>CIBEEGCX200</p>
                    </div>
                    <div className="w-1/4">
                        <p className="text-xs text-zinc-800">Giro No.</p>
                        <p className=''></p>
                    </div>
                </div>
            </footer>
        </div>
    </div>
  )
}

export default Page