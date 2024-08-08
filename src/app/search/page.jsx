"use client"
import AppBar from "@/components/appbar";
import Footer from "@/components/footer";
import SearchPage from "@/components/search_page";
import { searchData, statusData } from "@/components/search_page/data";
import { useState } from "react";

export default function Psge({}) {
  const [bgImg, setBgImg] = useState(searchData[0].backgroundImg)
  
  return (
    <main className="pt-12 w-full min-h-screen relative overflow-hidden">
      
      <div className="absolute inset-0 w-full h-[70vh] bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(${bgImg?.src || bgImg})`,
          filter: 'blur(80px)',
        }}
      >
        <div className="size-full absolute bg-gradient-to-b from-white/5 to-white dark:from-black/5 dark:to-black" />
      </div>

      <AppBar shadow='transparent' bgTransparent={false} />
      <SearchPage data={searchData} setBgImg={setBgImg} statusData={statusData} />
      <Footer />
    </main>
  );
}
