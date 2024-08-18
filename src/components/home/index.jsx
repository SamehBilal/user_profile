"use client"
import { useEffect } from "react";
import Image from "next/image";
import Logo from '@/public/images/logo.png'

function CommingSoon() {
    // const router = useRouter()
  
    useEffect(()=>{
      const countDownDate = new Date("Sep 30, 2024 00:00:00").getTime();

      window.addEventListener('message', function(event) {
        // List of allowed origins
        const allowedOrigins = ['http://localhost:5500', 'https://arabhardware.net', 'https://d042-41-187-66-132.ngrok-free.app'];
        console.log('allowedOrigins', allowedOrigins)
        if (!allowedOrigins.includes(event.origin)) { 
          console.log('not an origin')
          return; // Ignore messages from unknown origins
        }
        if (event.data === 'getJWTToken') {
            console.log('getJWTToken...')
            const token = localStorage.getItem('jwt_token');
            event.source.postMessage({ jwt_token: token }, event.origin);
        }
    });
    
      const x = setInterval(function () {
        const now = new Date().getTime();
        const distance = countDownDate - now; // Calculate the time remaining
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
        // Display the countdown in the HTML
        document.getElementById("days").innerHTML = days;
        document.getElementById("hours").innerHTML = hours;
        document.getElementById("minutes").innerHTML = minutes;
        document.getElementById("seconds").innerHTML = seconds;
    
        if (distance < 0) { // If the countdown is over, display a message
          clearInterval(x);
          document.getElementById("countdown").innerHTML = "EXPIRED";
        }
      }, 1000);
    }, [])
    
    return (
  <div className="h-screen w-full flex flex-col justify-center items-center bg-gray-900 dark:bg-gradient-to-r from-red-400 to-rose-300">
    <div className="absolute animate-bounce z-10 w-full h-[50%] flex justify-center items-end bg-gray-900 dark:bg-gradient-to-r from-red-400 to-rose-300">
      <h1 className="sm:text-9xl text-7xl font-extrabold animate-[wiggle_1s_ease-in-out_infinite] text-primary font-mono">
        هنشوفك</h1>
    </div>
    <div className="absolute w-full h-[50%] flex items-end justify-center bg-gray-900 dark:bg-gradient-to-r from-red-400 to-rose-300">
      <h1 className="sm:text-7xl text-5xl animate-[wiggle_1s_ease-in-out_infinite] text-center text-white dark:text-gray-600 font-extrabold">
        عن قريب</h1>
    </div>
  
    <div id="countdown"
      className="absolute top-20 flex items-center justify-center text-gray-200 dark:text-white sm:text-5xl text-3xl gap-4">
        <div className="">
          <span id="days" ></span>
          <span className="text-primaryLight font-semibold pr-2">يوم</span>
        </div>
        <div className="">
          <span id="hours"></span>
          <span className="text-secondary font-semibold pr-2">ساعة</span>
        </div>
        <div className="">
          <span id="minutes"></span>
          <span className="text-tritory font-semibold pr-2">دقيقة</span>
        </div>
        <div className="">
          <span id="seconds"></span>
          <span className="text-yellow-500 font-semibold pr-2">ثانية</span>
        </div>
    </div>
    <Image src={Logo} alt="arabhardware" className="absolute w-24 top-[5%] right-[10%] z-10" />
  </div>
    );
}

export default CommingSoon