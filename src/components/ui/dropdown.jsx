import {useEffect, useState, useMemo} from "react";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";
// import { Images } from "lucide-react";
import Image from "next/image";


function DropdownMenuItems({items=[], theItems=[], initialIndex = 51, selectedIndex=51, setSelectedIndex, selectedValue}) {
    const [selectedKeys, setSelectedKeys] = useState(new Set([theItems[initialIndex]]));

    const handleSelectionChange = (newSelectedKeys) => {
      // Get the index of the newly selected item
      const newSelectedKeysArr = Array.from(newSelectedKeys)
      const newIndex = newSelectedKeysArr[0];
      setSelectedIndex(newIndex);
      setSelectedKeys(newSelectedKeysArr);
    };
  
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button 
          variant="bordered" 
          className="capitalize dark:text-black flex items-center justify-center h-12 rounded-none"
        >
          <span>{selectedValue}</span>
          <Image src={items[selectedIndex].flag} alt={theItems[selectedIndex]} width={24} height={24} 
          className="text-xl text-default-500 pointer-events-none flex-shrink-0" />
          
        </Button>
      </DropdownTrigger>
      <DropdownMenu 
        aria-label="Single selection with icons"
        variant="flat"
        disallowEmptySelection
        selectionMode="single"
        selectedKeys={selectedKeys}
        onSelectionChange={handleSelectionChange}
        className="max-h-96 overflow-y-scroll"
      >
        {theItems.map((item, i)=>{
            return <DropdownItem key={i}
            startContent={<Image src={items[i].flag} alt={item} width={24} height={24} className="text-xl text-default-500 pointer-events-none flex-shrink-0" />}>
                {item}
            </DropdownItem>
        })}
      </DropdownMenu>
    </Dropdown>
  )
}

export default DropdownMenuItems