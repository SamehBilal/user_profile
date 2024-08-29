"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const CarouselCard = ({titles, images = [], urls=[],timing = 3000}) => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    if (titles && titles.length > 0 && images.length > 0) {
      const interval = setInterval(() => {
        setCurrentImage((prevIndex) => {
          // console.log(images, images.length, prevIndex)
          if (prevIndex >= images.length - 1) return 0
          else return prevIndex + 1
        });
      }, timing);
      return () => clearInterval(interval); // Clear interval on component unmount
    }
  }, [titles, images, timing]);

  return (
    <>
      {titles && titles.length > 0 && images.length > 0 && (
        <a target='_blank' href={urls[currentImage] ?? '#'}
        className="block h-52 w-full max-w-80 overflow-hidden rounded-large relative border-b border-solid shadow-2xl text-tiny cursor-pointer">
          {images[currentImage] && (
            <Image
              src={images[currentImage]}
              alt="Dynamic Image"
              className='object-cover h-2/3 w-full'
              width={1280}
              height={853}
              loading='lazy'
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/wcAAgAB/ax5LkAAAAAASUVORK5CYII="
            />
          )}
          <div className="relative h-1/3 w-full overflow-hidden bg-white/50 dark:bg-black/50 drop-shadow-md">
            <p style={{ '--timing': `${timing}ms` }} className="rotating-text absolute w-full h-8 left-0 bottom-4 px-4 line-clamp-2">
                {titles[currentImage]}
            </p>
          </div>
        </a>
      )}
    </>
  );
};

export default CarouselCard;
