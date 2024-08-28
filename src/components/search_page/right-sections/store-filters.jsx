import React from 'react'
import {Accordion, AccordionItem} from "@nextui-org/react";
import FastFilter from './filters/fast-filter';
import PriceFilter from './filters/price-filter';
import AdvanceFilter from './filters/advance-filter';

function StoreFilters({maxWidth, isStoreTabOpen=false}) {
  
  return (<>
    {isStoreTabOpen && <div className={`space-y-4 w-full`}
    style={maxWidth?{maxWidth}:{}}>
      <FastFilter />
      <PriceFilter />
      <AdvanceFilter />
    </div>}
    </>)
}

export default StoreFilters