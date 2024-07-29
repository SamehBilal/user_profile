import React from 'react'
import Image from 'next/image'
import InvoiceBg from '@/public/images/backgrounds/invoice-bg.png'
import Logo from '@/public/images/logos/ahw_store_logo_en.png'
import QR from '@/public/images/qr.png'
import Appbar from '@/components/appbar'
import { MapPin, Phone, Mail } from 'lucide-react'

const PriceWithCurrency = ({price, currency='EGP'}) => {
    return (<span className='grid grid-cols-2 gap-2 w-24'>
    <span>{price}</span>
    <span>{currency}</span>
</span>)
}

function Page() {
    const data = {
        headers: ['رقم', 'وصف المنتج', 'الكمية', 'سعر الوحدة باستثناء الضريبة',  'المجموع مع الضريبة'],
        rows: [
            ['AHW-3D-HS-HLD-B', 'Headphone Desk Stand 3D Printed - Black', '1', '195.00', '195.00'],
            ['AHW-3D-PS-CNT-B', 'Under Desk Mount for PS5/PS4 Controller 3D Printed - Black', '2', '32.00', '64.00'],
            ['التوصيل', 'استلام من المتجر', '1', '0.00', '0.00'],
        ]
    }

  return (
    <div className=" max-w-3xl w-full p-8 mx-auto bg-white text-black shadow-sm relative text-xxs min-h-[850px]"
    style={{
        backgroundColor: 'white', backgroundImage: ` url(${InvoiceBg.src})`, backgroundSize: 'cover', backgroundRepeat: 'repeat-y'}}>
        {/* <Image src={InvoiceBg} alt='retro environment' className='size-full object-cover' /> */}
        <p className='my-1 text-xxs absolute bottom-2 right-10'>صفحة 1/1</p>
        <div className="space-y-2">
            <header className="flex items-center justify-between">
                <div className="space-y-1">
                    <h2 className='text-lg font-bold grid grid-cols-2 justify-between'>
                        <span> رقم الطلب:</span>
                        <span>SO-050055</span>
                    </h2>
                    <h2 className='text-lg font-bold grid grid-cols-2'>
                        <span> تأكيد الطلب:</span>
                        <span>SO-007104</span>
                    </h2>
                    <p className='my-1 text-xs'>يوليو 17، 2024</p>
                </div>
                <Image src={Logo} alt="Arabhardware" className='h-12 object-contain object-center w-fit' />
            </header>
            <section className="grid grid-cols-3 justify-between items-center">
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
                <div className="space-y-1 mx-auto">
                    <p className="text-center">امسح للتتبع</p>
                    <Image src={QR} alt="QR Code" className='size-12' />
                </div>
            </section>
            <section className="flex justify-between items-start">
                <div className="space-y-1">
                    <p className="text-zinc-800 font-bold text-xs">طريقة التوصيل</p>
                    <p>الاستلام من المتجر</p>
                </div>
                {/* <div className="space-y-1">
                    <p className="text-zinc-800 font-bold text-xs">رقم العطاء</p>
                    <p>-</p>
                </div> */}
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
                                return <td key={i} className={`${(i==0 || i==1)&&'text-xs'}`}>
                                    {`${(i==4)?(parseFloat(_)+(parseFloat(_)*14/100)).toFixed(2):_}`}
                                </td>
                            })}
                        </tr>
                    })}
                </tbody>
            </table>
            <div className="text-right space-y-1 w-64">
                <p className="flex items-center justify-between">
                    <span>المجموع الجزئي: </span>
                    <PriceWithCurrency price="259.00" />
                </p>
                <p className="flex items-center justify-between">
                    <span>الضريبة 14%: </span>
                    <PriceWithCurrency price="36.26" />
                </p>
                <p className="flex items-center justify-between font-bold">
                    <span className='underline'>المجموع مع الضريبة: </span>
                    <PriceWithCurrency price="295.26" />
                </p>
                
                <p className="text-xs pt-2">ضريبة القيمة المضافة 14%</p>
            </div>
            
            <footer className="w-full flex justify-between items-start pt-8">
                <div className="space-y-4">
                    <div className=" w-[75%]">
                        <h4 className='text-xs font-bold'>الشروط والاحكام</h4>
                        <p>
                            في حالة وجود عيب صناعة في المنتج يمكنكم طلب الإستبدال او الإسترجاع في خلال 14 يوم من تاريخ الإستلام
                            -في حالة ظهور مشكلة في المنتج بعد فترة الـ14 يوم يمكنك التواصل معنا وسوف نكون الطرف الوسيط مع الوكـيل.
                            شكرا لاختياركم متجر عرب هاردوير
                        </p>
                    </div>
                    <div className=" text-zinc-800 space-y-4">
                        <div className="space-y-1">
                            <div className="grid grid-cols-5 items-center">
                                <div className="flex items-center justify-start gap-2">
                                    <Phone className='bg-black/50 rounded-lg p-0.5 size-4 text-white' strokeWidth={2} />
                                    <p className=''>0221203192</p>
                                </div>
                                <div className="flex items-center justify-start gap-2">
                                    <Phone className='bg-black/50 rounded-lg p-0.5 size-4 text-white' strokeWidth={2} />
                                    <p className=''>0221203192</p>
                                </div>
                                <div className="flex items-center justify-start gap-2">
                                    <Phone className='bg-black/50 rounded-lg p-0.5 size-4 text-white' strokeWidth={2} />
                                    <p className=''>0221203192</p>
                                </div>
                                <div className="flex items-center justify-start gap-2">
                                    <Mail className='bg-black/50 rounded-lg p-0.5 size-4 text-white' strokeWidth={2} />
                                    <a href="mailto:info@ahw.store" className=''>info@ahw.store</a>
                                </div>
                                <div className="flex items-center justify-start gap-2">
                                    <MapPin className='bg-black/50 rounded-lg p-0.5 size-4 text-white' strokeWidth={2} />
                                    <a href='https://ahw.store' target='_blank' className=''>ahw.store</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    </div>
  )
}

export default Page