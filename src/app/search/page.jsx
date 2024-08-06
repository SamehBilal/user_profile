"use client"
import AppBar from "@/components/appbar";
import SearchPage from "@/components/search_page";
import { searchData } from "@/components/search_page/data";
import { useState } from "react";

export default function Psge({}) {
  const [bgImg, setBgImg] = useState(searchData[0].backgroundImg)
  
  return (
    <main className="py-12 w-full min-h-screen relative">
      
      <div
        className="absolute inset-0 size-full"
        style={{
          backgroundImage: `url(${bgImg?.src || bgImg})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'repeat-y',
          filter: 'saturate(0.5) brightness(0.85) blur(5px)',
        }}
      />
      <AppBar shadow='transparent' bgTransparent={false} />
      <SearchPage data={searchData} setBgImg={setBgImg} />
    </main>
  );
}
