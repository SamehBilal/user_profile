"use client"
import {Tabs, Tab} from "@nextui-org/react";
import CardsComponent from "./cardsComponent";
import { useState, useEffect } from "react";
import { useTheme } from 'next-themes';
import RightSectoin from "./right-sections/right-section";
import StatusBar from "./status-bar";

const TabsComponent = ({ data = [], setBgImg=()=>{console.log('define setBgImg ')}, statusData=[], searchValue, openStatus }) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0)
  const { theme, setTheme } = useTheme(); // 'light' : 'dark'
  // console.log('searchValue', searchValue)

  const handleTabChange = (newTab) => {
    const newTabIndex = data.map((_)=>_.id)?.findIndex(element => element === newTab)
    setActiveTabIndex(newTabIndex ?? 0)
  };

  useEffect(()=>{
    setBgImg(data[activeTabIndex]?.cards[0]?.imgUrl || data[activeTabIndex]?.bgImg[theme])
  }, [activeTabIndex])
  
  return (
    <div className="w-full grid grid-cols-5 mx-auto">
      <div className="col-span-5 xl:col-span-4 relative">
        
        <div className="h-10 relative w-full">
          {/* <p className="font-bold text-tiny">نتائج البحث عن:</p> */}
          <p className="absolute inset-0 z-10 text-large text-ellipsis md:line-clamp-1 space-x-2">
            <span className="font-bold">نتائج البحث عن : </span>
            {searchValue.trim()=='' && <span>لينوفو</span>}
            <span>{searchValue}</span>
            
          </p>
        </div>
        <Tabs 
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
        items={data}>
          
        {(item) => (
          <Tab key={item.id} title={
            <div className="flex items-center space-x-2">
              <span>{item.label}</span>
            </div>
          }>
          <div className="col-span-5 xl:col-span-4 w-full h-14 relative">
            <StatusBar statusData={statusData} openStatus={openStatus} />
          </div>
            <CardsComponent cards={item.cards} id={item.id} />
          </Tab>
        )}
        </Tabs>
      </div>
      <div className="xl:col-span-1 hidden xl:block">
        <RightSectoin />
      </div>
    </div>
  );
};

export default TabsComponent;