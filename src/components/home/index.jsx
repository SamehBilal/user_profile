"use client"
import { useEffect } from "react";
import Image from "next/image";
import Logo from '@/public/images/logo.png'

function CommingSoon() {
    // const router = useRouter()
  
    useEffect(()=>{
      // Set the date we're counting down to (adjust the date and time)
      const countDownDate = new Date("Sep 30, 2024 00:00:00").getTime();
    
      // Update the countdown every 1 second
      const x = setInterval(function () {
        // Get the current date and time
        const now = new Date().getTime();
    
        // Calculate the time remaining
        const distance = countDownDate - now;
    
        // Calculate days, hours, minutes, and seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
        // Display the countdown in the HTML
        document.getElementById("days").innerHTML = days;
        document.getElementById("hours").innerHTML = hours;
        document.getElementById("minutes").innerHTML = minutes;
        document.getElementById("seconds").innerHTML = seconds;
    
        // If the countdown is over, display a message
        if (distance < 0) {
          clearInterval(x);
          document.getElementById("countdown").innerHTML = "EXPIRED";
        }
      }, 1000);
    }, [])
    
    return (
  <div className="h-screen w-full flex flex-col justify-center items-center bg-gray-900 dark:bg-gradient-to-r from-red-400 to-rose-300">
    <div className="absolute animate-bounce z-10 w-full h-[50%] flex justify-center items-end bg-gray-900 dark:bg-gradient-to-r from-red-400 to-rose-300">
      <h1 className="sm:text-9xl text-7xl font-extrabold animate-[wiggle_1s_ease-in-out_infinite] text-primary font-mono">
        Coming</h1>
    </div>
    <div className="absolute w-full h-[50%] flex items-end justify-center bg-gray-900 dark:bg-gradient-to-r from-red-400 to-rose-300">
      <h1 className="sm:text-7xl text-5xl animate-[wiggle_1s_ease-in-out_infinite] text-center text-white dark:text-gray-600 font-extrabold">
        Soon</h1>
    </div>
  
    <div id="countdown"
      className="absolute top-20 flex items-center justify-center text-gray-200 dark:text-white sm:text-5xl text-3xl gap-4">
        <div className="">
          <span className="text-primaryLight font-semibold pr-2">D</span>
          <span id="days" ></span>
        </div>
        <div className="">
          <span className="text-secondary font-semibold pr-2">H</span>
          <span id="hours"></span>
        </div>
        <div className="">
          <span className="text-tritory font-semibold pr-2">M</span>
          <span id="minutes"></span>
        </div>
        <div className="">
          <span className="text-yellow-500 font-semibold pr-2">S</span>
          <span id="seconds"></span>
        </div>
    </div>
    <Image src={Logo} alt="arabhardware" className="absolute w-24 top-[5%] right-[10%] z-10" />
  </div>
    );
}

export default CommingSoon