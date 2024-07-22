"use client"
import {Tabs, Tab, Chip} from "@nextui-org/react";
import { Images } from "lucide-react";
import CardsComponent from "./cardsComponent";

const TabsComponent = ({ tabs }) => {
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
          tabContent: "group-data-[selected=true]:text-primary group-data-[hover-unselected]:text-black text-black"
        }}
        items={tabs}>
        {(item) => (
          <Tab key={item.id} title={
            <div className="flex items-center space-x-2">
              <span>{item.label}</span>
            </div>
          }>
            <CardsComponent cards={item.cards} />
          </Tab>
        )}
        </Tabs>
    </div>
  );
};

export default TabsComponent;