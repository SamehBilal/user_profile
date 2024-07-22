import React from 'react'
import Image from 'next/image'

function Page() {
  return (
    <div className=" max-w-3xl my-12 mx-auto bg-white p-5 shadow-sm">
        <header className="text-center">
            <h1 className=' text-2xl'>Payment Invoice</h1>
            <p className='my-1 text-sm'>No. KLLM 233-000023</p>
            <div className="flex items-center justify-center mt-2">
                <img src="./images/logo.png" alt="Cosmetics Logo" />
                <h2>COSMETICS</h2>
            </div>
        </header>
        <section className="flex justify-between my-5">
            <div className='w-[45%] space-y-1'>
                <p>Invoice to:</p>
                <h3>Jarod Brown</h3>
                <p>30th Street, Side Lake City</p>
                <p>(3445) 3444 4333</p>
            </div>
            <div className='w-[45%] space-y-1'>
                <p>Account No.: 0000 12345 67890</p>
                <p>Date: January 23, 2023</p>
            </div>
        </section>
        <table className="w-full border-collapse my-5">
            <thead>
                <tr>
                    <th className='border border-[#ddd] border-solid p-2 text-center bg-[#f2f2f2]'>No</th>
                    <th className='border border-[#ddd] border-solid p-2 text-center bg-[#f2f2f2]'>Item Description</th>
                    <th className='border border-[#ddd] border-solid p-2 text-center bg-[#f2f2f2]'>Price</th>
                    <th className='border border-[#ddd] border-solid p-2 text-center bg-[#f2f2f2]'>Qty.</th>
                    <th className='border border-[#ddd] border-solid p-2 text-center bg-[#f2f2f2]'>Total</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className='border border-[#ddd] border-solid p-2 text-center'>1.</td>
                    <td className='border border-[#ddd] border-solid p-2 text-center'>Lorem ipsum dolor</td>
                    <td className='border border-[#ddd] border-solid p-2 text-center'>$10</td>
                    <td className='border border-[#ddd] border-solid p-2 text-center'>1</td>
                    <td className='border border-[#ddd] border-solid p-2 text-center'>$10</td>
                </tr>
                <tr>
                    <td className='border border-[#ddd] border-solid p-2 text-center'>2.</td>
                    <td className='border border-[#ddd] border-solid p-2 text-center'>Lorem ipsum dolor</td>
                    <td className='border border-[#ddd] border-solid p-2 text-center'>$20</td>
                    <td className='border border-[#ddd] border-solid p-2 text-center'>1</td>
                    <td className='border border-[#ddd] border-solid p-2 text-center'>$20</td>
                </tr>
                <tr>
                    <td className='border border-[#ddd] border-solid p-2 text-center'>3.</td>
                    <td className='border border-[#ddd] border-solid p-2 text-center'>Lorem ipsum dolor</td>
                    <td className='border border-[#ddd] border-solid p-2 text-center'>$30</td>
                    <td className='border border-[#ddd] border-solid p-2 text-center'>1</td>
                    <td className='border border-[#ddd] border-solid p-2 text-center'>$30</td>
                </tr>
                <tr>
                    <td className='border border-[#ddd] border-solid p-2 text-center'>4.</td>
                    <td className='border border-[#ddd] border-solid p-2 text-center'>Lorem ipsum dolor</td>
                    <td className='border border-[#ddd] border-solid p-2 text-center'>$40</td>
                    <td className='border border-[#ddd] border-solid p-2 text-center'>1</td>
                    <td className='border border-[#ddd] border-solid p-2 text-center'>$40</td>
                </tr>
                <tr>
                    <td className='border border-[#ddd] border-solid p-2 text-center'>5.</td>
                    <td className='border border-[#ddd] border-solid p-2 text-center'>Lorem ipsum dolor</td>
                    <td className='border border-[#ddd] border-solid p-2 text-center'>$50</td>
                    <td className='border border-[#ddd] border-solid p-2 text-center'>1</td>
                    <td className='border border-[#ddd] border-solid p-2 text-center'>$50</td>
                </tr>
                <tr>
                    <td className='border border-[#ddd] border-solid p-2 text-center'>6.</td>
                    <td className='border border-[#ddd] border-solid p-2 text-center'>Lorem ipsum dolor</td>
                    <td className='border border-[#ddd] border-solid p-2 text-center'>$60</td>
                    <td className='border border-[#ddd] border-solid p-2 text-center'>1</td>
                    <td className='border border-[#ddd] border-solid p-2 text-center'>$60</td>
                </tr>
            </tbody>
        </table>
        <div className="text-right my-5 space-y-1">
            <p>Sub Total: $210</p>
            <p>Tax: 0.0%</p>
            <p>Total: $210</p>
        </div>
        <section className="fle justify-between my-5">
            <div className="w-[60%]">
                <h4>Terms & Condition</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
            </div>
            <div className="w-[35%] text-center">
                <p>Scan here for payment</p>
                <img src="./images/qrcode.png" alt="QR Code" className='w-full my-2' />
                <p>Scan to track</p>
            </div>
        </section>
        <footer className="text-center my-5">
            <p>Susan Kamel</p>
            <h4>Susan Kamelia</h4>
            <p>Branch Manager</p>
        </footer>
        <address className="text-center my-5 space-y-1">
            <p className='text-[#333]'>130th Street, Sky View</p>
            <p className='text-[#333]'>(2332) 23332 3233</p>
            <p className='text-[#333]'>
                <a href="mailto:youremail@example.com" className=''>youremail@example.com</a>
            </p>
        </address>
    </div>
  )
}

export default Page