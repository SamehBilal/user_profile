import React from 'react'
import Image from 'next/image'
import InvoiceBg from '@/public/images/backgrounds/invoice-bg.png'
import Logo from '@/public/images/logos/ahw_logo.svg'
import QR from '@/public/images/qr.png'
import Appbar from '@/components/appbar'
import { MapPin, Phone, Mail } from 'lucide-react'

function Page() {
    const data = {
        headers: ['رقم', 'وصف المنتج', 'السعر', 'الكمية', 'المجموع'],
        rows: [
            ['لوريم ايبسوم', '$10', '1', '$10'],
            ['لوريم ايبسوم', '$20', '1', '$20'],
            ['لوريم ايبسوم', '$30', '1', '$30'],
            ['لوريم ايبسوم', '$40', '1', '$40'],
            ['لوريم ايبسوم', '$50', '1', '$50'],
            ['لوريم ايبسوم', '$50', '1', '$50'],
        ]
    }

  return (
    <div className=" max-w-3xl my-12 mx-auto bg-white text-black shadow-sm relative">
        <Image src={InvoiceBg} alt='retro environment' className='size-full object-cover' />
        <div className="absolute inset-0 z-10 p-10 space-y-6">
            <header className="text-center flex items-center justify-between">
                <div className="space-y-1">
                    <h1 className=' text-2xl font-bold'>تفاصيل الدفع</h1>
                    <p className='my-1 text-sm'>شارع رقم: 233-000023</p>
                </div>
                <div className="">
                    <Image src={Logo} alt="Arabhardware" className='size-12 object-center mx-auto' />
                    <h2 className='text-center'>عرب هاردوير</h2>
                </div>
            </header>
            <section className="flex justify-between items-end">
                <div className='w-[45%] space-y-1'>
                    <p className='font-bold'>فاتورة إلى</p>
                    <h3 className='text-primary'>حسن حسنين</h3>
                    <p>30 جامعة الدول، القاهرة</p>
                    <p>(020)34444333</p>
                </div>
                <div className='w-[45%] space-y-1'>
                    <p>
                        <span className='font-bold'>رقم الحساب: </span>
                        <span>2222 1111 3333 4444</span>
                    </p>
                    <p>
                        <span className='font-bold'>التاريخ: </span>
                        <span>23-01-2024</span>
                    </p>
                </div>
            </section>
            <table className="w-full border-separate">
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
                            <td className=''>{`${index+1}.`}</td>
                            {row.map((_, i)=>{
                                return <td key={i} className=''>{_}</td>
                            })}
                        </tr>
                    })}
                </tbody>
            </table>
            <div className="text-right space-y-1 w-52">
                <p className="flex items-center justify-between">
                    <span>المجموع الجزئي: </span>
                    <span>210$</span>
                </p>
                <p className="flex items-center justify-between">
                    <span>الضريبة: </span>
                    <span>0.0%</span>
                </p>
                <p className="flex items-center justify-between">
                    <span>المجموع: </span>
                    <span>210$</span>
                </p>
            </div>
            <section className="flex justify-between">
                <div className="w-[60%]">
                    <h4>الشروط والاحكام</h4>
                    <p>
                    طراف الأرضية والنرويج أي دول. أمّا إيطاليا بمعارضة و غير, ما الى أراضي اعتداء ويكيبيديا. السبب الأرضية اليابان أما ما, يرتبط وقوعها، تكتيكاً وفي مع. اعتداء وصافرات والكساد كل بحق. الا اكتوبر الطرفين من, أن حيث بفرض الأوربيين.
                    </p>
                </div>
                <div className="w-[35%] text-center">
                    <Image src={QR} alt="QR Code" className='w-20 my-2 mx-auto' />
                    <p>رمز التتبع</p>
                </div>
            </section>
            <footer className="text-center space-y-1 text-[#333] pt-10">
                <div className="flex items-center justify-start gap-2">
                    <MapPin className='bg-black rounded-lg p-1 size-6 text-white' strokeWidth={2} />
                    <p className=''>130th Street, Sky View</p>
                </div>
                <div className="flex items-center justify-start gap-2">
                    <Phone className='bg-black rounded-lg p-1 size-6 text-white' strokeWidth={2} />
                    <p className=''>(2332) 23332 3233</p>
                </div>
                <div className="flex items-center justify-start gap-2">
                    <Mail className='bg-black rounded-lg p-1 size-6 text-white' strokeWidth={2} />
                    <a href="mailto:youremail@example.com" className=''>youremail@example.com</a>
                </div>
            </footer>
        </div>
    </div>
  )
}

export default Page