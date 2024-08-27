"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Img1 from '@/public/images/footer/home1.gif'
import Img2 from '@/public/images/footer/home2.png'
import Img3 from '@/public/images/footer/home3.png'
import Img4 from '@/public/images/footer/home4.png'
import Img5 from '@/public/images/footer/home5.png'

const CarouselCard = ({
  titles,
  images=[Img1, Img2, Img3, Img4, Img5], 
  timing=3000
}) => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevIndex) => {
        if(prevIndex >= images.length-1) return 0
        else return prevIndex+1
      });
    }, timing);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
    {titles && <div className="h-52 w-full max-w-80 overflow-hidden rounded-large relative border-b border-solid shadow-2xl">
        <Image
          src={images[currentImage]}
          alt="Dynamic Image"
          className='object-cover h-2/3 w-full'
          width={1280}
          height={853}
          priority
        />
        <div className="relative h-1/3 w-full overflow-hidden">
            <p style={{'--timing': `${timing}ms`}} className="rotating-text absolute bottom-6 left-0 w-full px-4 line-clamp-1">
                {titles && titles[currentImage]}
            </p>
        </div>
    </div>}
    </>
  );
};

export default CarouselCard;
