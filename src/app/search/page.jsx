"use client"
import AppBar from "@/components/appbar";
import Footer from "@/components/footer";
import SearchPage from "@/components/search_page";
import { searchData, statusData } from "@/components/search_page/data";
import { useState } from "react";
import MediaPlayer from "./media-player";
import SearchParamsComponent from "./searchParamsComponent";


export default function Psge({}) {
  const [bgImg, setBgImg] = useState(searchData[0].backgroundImg)
  const [searchValue, setSearchValue] = useState('')
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const [actionDropdownValue, setActionDropdownValue] = useState(0)
  const [activeTabIndex, setActiveTabIndex] = useState(0)
  const [searchTypeDropdownValue, setSearchTypeDropdownValue] = useState(0)
  
  return (
    <main className="pt-12 w-full min-h-screen relative overflow-hidden">
      <SearchParamsComponent setSearchTypeDropdownValue={setSearchTypeDropdownValue} setSearchValue={setSearchValue} />
      
      <div className="absolute inset-0 w-full h-[70vh] bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(${bgImg?.src || bgImg})`,
          filter: 'blur(80px)',
        }}
      >
        <div className="size-full absolute bg-gradient-to-b from-white/5 to-white dark:from-black/5 dark:to-black" />
      </div>
 
      <AppBar shadow='transparent' bgTransparent={false} searchValue={searchValue} setSearchValue={setSearchValue}
      activeTabIndex={activeTabIndex} setActiveTabIndex={setActiveTabIndex}
      searchTypeDropdownValue={searchTypeDropdownValue} setSearchTypeDropdownValue={setSearchTypeDropdownValue} />
      <SearchPage data={searchData} setBgImg={setBgImg} statusData={statusData} searchDropdownValue={searchTypeDropdownValue}
      searchValue={searchValue} openStatus={setIsPopupOpen} activeTabIndex={activeTabIndex} setActiveTabIndex={setActiveTabIndex} /> 
      <MediaPlayer isPopupOpen={isPopupOpen} setIsPopupOpen={setIsPopupOpen} isExpanded={isExpanded} 
      setIsExpanded={setIsExpanded} actionDropdownValue={actionDropdownValue} setActionDropdownValue={setActionDropdownValue} />
      <Footer />
    </main>
  );
}
