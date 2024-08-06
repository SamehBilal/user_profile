"use client"
import {Tabs, Tab} from "@nextui-org/react";
import CardsComponent from "./cardsComponent";
import { useState, useEffect } from "react";
import { useTheme } from 'next-themes';
import RightSectoin from "./right-section";

const TabsComponent = ({ data = [], setBgImg=()=>{console.log('define setBgImg ')}  }) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0)
  const { theme, setTheme } = useTheme(); // 'light' : 'dark'

  const handleTabChange = (newTab) => {
    const newTabIndex = data.map((_)=>_.id)?.findIndex(element => element === newTab)
    setActiveTabIndex(newTabIndex ?? 0)
    if(data[newTabIndex]?.backgroundImg){
      setBgImg(data[newTabIndex ?? 0]?.bgImg[theme])
    }
  };

  useEffect(()=>{
    setBgImg(data[activeTabIndex]?.bgImg[theme])
  }, [theme])
  
  return (
    <div className="w-full grid grid-cols-5 mx-auto">
      <div className="col-span-5 xl:col-span-4">
        <Tabs 
        variant="underlined" 
        aria-label="Arabhardware Companies" 
        color="primary"
        classNames={{
          tabList: "gap-6 w-full relative p-0",
          cursor: "w-2/5 bg-primary",
          tab: "max-w-fit px-0 h-8",
          tabContent: "group-data-[selected=true]:text-primary group-data-[hover-unselected]:text-black text-black dark:group-data-[hover-unselected]:text-white dark:text-white "
        }}
        onSelectionChange={handleTabChange}
        onChange={()=>console.log('hello')}
        items={data}>
        {(item) => (
          <Tab key={item.id} title={
            <div className="flex items-center space-x-2">
              <span>{item.label}</span>
            </div>
          }>
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