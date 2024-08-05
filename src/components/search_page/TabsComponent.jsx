"use client"
import {Tabs, Tab, Chip} from "@nextui-org/react";
import { Images } from "lucide-react";
import CardsComponent from "./cardsComponent";
import { useState, useMemo } from "react";
import Image from "next/image";

const TabsComponent = ({ data = [], setBgImg=()=>{console.log('define setBgImg ')}  }) => {
  const handleTabChange = (newTab) => {
    const newTabIndex = data.map((_)=>_.id)?.findIndex(element => element === newTab)
    if(data[newTabIndex]?.backgroundImg)
    setBgImg(data[newTabIndex]?.backgroundImg)
  };
  
  return (
    <div className="">
        <Tabs 
        variant="underlined" 
        aria-label="Arabhardware Companies" 
        color="primary"
        classNames={{
          tabList: "gap-6 w-full relative p-0",
          cursor: "w-2/5 bg-primary",
          tab: "max-w-fit px-0 h-8",
          tabContent: "group-data-[selected=true]:text-primary dark:group-data-[hover-unselected]:text-white text-white"
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
  );
};

export default TabsComponent;