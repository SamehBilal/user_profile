import {useEffect, useState, useMemo} from "react";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";
import { Images } from "lucide-react";


function DropdownMenuItems({items=[]}) {
    const theItems = items.map(item=>item.ar)
    const [selectedKeys, setSelectedKeys] = useState(theItems);
    console.log('selectedKeys', typeof selectedKeys)

    const selectedValue = useMemo(
        () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
        [selectedKeys]
      );
  
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button 
          variant="bordered" 
          className="capitalize"
        >
          {selectedValue}
        </Button>
      </DropdownTrigger>
      <DropdownMenu 
        aria-label="Single selection with icons"
        variant="flat"
        disallowEmptySelection
        selectionMode="single"
        selectedKeys={selectedKeys}
        onSelectionChange={setSelectedKeys}
        className="max-h-96 overflow-y-scroll"
      >
        {theItems.map((item, i)=>{
            return <DropdownItem key={i}
            startContent={<Images className="text-xl text-default-500 pointer-events-none flex-shrink-0" />}>
                {item}
            </DropdownItem>
        })}
      </DropdownMenu>
    </Dropdown>
  )
}

export default DropdownMenuItems