"use client"
import {Tabs, Tab} from "@nextui-org/react";
import CardsComponent from "./cardsComponent";
import { useState, useEffect } from "react";
import { useTheme } from 'next-themes';
import RightSectoin from "./right-sections/right-section";
import StatusBar from "./status-bar";
import { Loader2Icon } from "lucide-react";

const TabsComponent = ({ data=null, setBgImg=()=>{console.log('define setBgImg ')}, setVidDis, trendingData, tagsData, setCurrentVid,
setActiveVidIndex, setCurrentPage, setIsBlogPopupOpen, setCurrentBlog, hasMore, totalPages, currentPage, 
statusData=[], searchValue, openStatus, activeTabIndex, setActiveTabIndex, searchDropdownValue, weather, dailyNews, rates,
currencyValue, setCurrencyValue, }) => {
  const { theme, setTheme } = useTheme(); // 'light' : 'dark'
  const [activeTab, setActiveTab] = useState('all')

  const handleTabChange = (newTab) => {
    const newTabIndex = data.map((_)=>_.id)?.findIndex(element => element === newTab)
    setActiveTabIndex(newTabIndex ?? 0)
    setActiveTab(newTab)
  };

  useEffect(()=>{
    if(data)
    setBgImg(data[activeTabIndex]?.cards[0]?.imgUrl || data[activeTabIndex]?.bgImg[theme])
  }, [activeTabIndex, data])

  useEffect(()=>{
    if(searchDropdownValue && data){ 
      let newTabIndex = data.map((_)=>_.label)?.findIndex(element => element === searchDropdownValue)
      // console.log('searchDropdownValue', searchDropdownValue)
      // console.log('newTabIndex', newTabIndex)
      // console.log('data[newTabIndex]?.id', data[newTabIndex]?.id)
      handleTabChange(data[newTabIndex]?.id || 'all')
    }
  }, [searchDropdownValue, data])

  return (
    <div className="w-full grid grid-cols-5 mx-auto">
      <div className="col-span-5 xl:col-span-4 relative">

        <div className="h-10 relative w-full">
          {/* <p className="font-bold text-tiny">نتائج البحث عن:</p> */}
          <p className="absolute inset-0 z-10 text-large text-ellipsis md:line-clamp-1 space-x-2">
            <span className="font-bold">نتائج البحث عن : </span>
            {searchValue?.trim()=='' && <span></span>}
            <span>{searchValue}</span>
          </p>
        </div>
        {!data && <Loader2Icon className="size-20 text-primary animate-spin" />}
        {data && <Tabs 
        key={currentPage}
        variant="underlined" 
        aria-label="Arabhardware Companies" 
        color="prime"
        classNames={{
          tabList: "gap-6 w-full relative p-0 flex-wrap gap-y-1",
          cursor: "w-2/5 bg-prime",
          tab: "max-w-fit px-0 h-8",
          tabContent: "group-data-[selected=true]:text-prime drop-shadow-xl group-data-[hover-unselected]:text-black text-black dark:group-data-[hover-unselected]:text-white dark:text-white"
        }}
        onSelectionChange={handleTabChange}
        selectedKey={activeTab}
        items={data||[]}>
        {(item) => (
          <Tab key={item.id} title={
            <div className="flex items-center space-x-2">
              <span>{item.label}</span>
            </div>
          }>
          {statusData && statusData.length>0 && <div className="col-span-5 xl:col-span-4 w-full relative mb-4">
            <StatusBar statusData={statusData} openStatus={openStatus} setVidDis={setVidDis} setCurrentVid={setCurrentVid} setActiveVidIndex={setActiveVidIndex} />
          </div>}
            <CardsComponent cards={item.cards} id={item.id} openStatus={openStatus} setVidDis={setVidDis} setCurrentVid={setCurrentVid}
            setIsBlogPopupOpen={setIsBlogPopupOpen} setCurrentBlog={setCurrentBlog} changeTab={handleTabChange} 
            hasMore={hasMore} currentPage={currentPage} setCurrentPage={setCurrentPage} />
          </Tab>
        )}
        </Tabs>}
      </div>
      <div className="xl:col-span-1 hidden xl:block">
        <RightSectoin trendingData={trendingData} tagsData={tagsData} weather={weather} dailyNews={dailyNews} 
        rates={rates} currencyValue={currencyValue} setCurrencyValue={setCurrencyValue} isStoreTabOpen={activeTab=='products'} />
      </div>
    </div>
  );
};

export default TabsComponent;