"use client"
import { useState, useEffect } from 'react';
import { Accordion, AccordionItem } from "@nextui-org/react";
import { Range, getTrackBackground } from 'react-range';
import { CheckSquareIcon, TruckIcon, ShieldCheckIcon, ChevronLeft } from 'lucide-react';

function PriceFilter({ min = 12, max = 48, minPriceVal = 0, maxPriceVal = 25000 }) {
  const [screenSize, setScreenSize] = useState(12);
  const [values, setValues] = useState([minPriceVal, maxPriceVal]);

  const generateValues = (min, max, count) => {
    const step = (max - min) / (count - 1);
    return Array.from({ length: count }, (_, i) => min + i * step).reverse();
  };

  const handleScreenSizeChange = (event) => {
    setScreenSize(Number(event.target.value));
  };

  return (
    <div className={`bg-gray-200/70 dark:bg-black/70 shadow-medium transition w-full rounded-large p-2 space-y-2`}>
      <Accordion isCompact>
        <AccordionItem key="1" aria-label="price filter" title="الأسعار واحجام الشاشة" indicator={<ChevronLeft />}>
          <div className="flex flex-col items-center w-full p-4">

            {/* Price Range Slider */}
            <div className="flex flex-col items-center w-full pt-6">
              <Range
                values={values}
                step={1}
                min={minPriceVal}
                max={maxPriceVal}
                onChange={(values) => setValues(values)}
                renderTrack={({ props, children }) => (
                  <div {...props}
                  className='h-1 w-full'
                    style={{
                      ...props.style,
                      direction: 'ltr',
                      background: getTrackBackground({
                        values,
                        colors: ['#ccc', '#f55661', '#ccc'],
                        min: minPriceVal,
                        max: maxPriceVal,
                      }),
                    }}
                  >
                    {children}
                  </div>
                )}
                renderThumb={({ index, props }) => (
                  <div {...props}
                    className='size-4 border-3 border-solid dark:border-gray-200 rounded-full flex items-center justify-center bg-primaryLight'
                    style={{ ...props.style, }}
                  >
                    <div className='absolute -top-8 px-1 border border-double rounded-md bg-white/50 dark:bg-black/50'>
                      {values[index]}
                    </div>
                  </div>
                )}
              />
              <div className="mt-2 text-center">
                <p>Price</p>
              </div>
            </div>

            {/* Screen Size Slider */}
            <div className="flex flex-col items-center w-full mt-6">
              <div className="flex justify-between w-full mb-2">
                {generateValues(min, max, 10).map((size) => (
                  <span key={size} className="text-xs">{size}</span>
                ))}
              </div>
              <Range
                step={1}
                min={min}
                max={max}
                values={[screenSize]}
                onChange={(values) => handleScreenSizeChange({ target: { value: values[0] } })}
                renderTrack={({ props, children }) => (
                  <div
                    {...props}
                    className="w-full h-1 rounded-lg cursor-pointer"
                    style={{
                      direction: 'ltr',
                      background: `linear-gradient(to right, #f55661 ${((screenSize - min) / (max - min)) * 100}%, #e5e7eb ${((screenSize - min) / (max - min)) * 100}%)`
                    }}
                  >
                    {children}
                  </div>
                )}
                renderThumb={({ props }) => (
                  <div
                    {...props}
                    className="size-4 border-3 border-solid border-gray-700 dark:border-gray-200 bg-primaryLight rounded-full shadow"
                  />
                )}
              />
              <div className="mt-2 text-center">
                <p>Screen Size</p>
              </div>
            </div>
          </div>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default PriceFilter;
