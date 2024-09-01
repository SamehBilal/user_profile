"use client"
import React from 'react'
import Image from 'next/image'
import CardBg from '@/../public/geming-stuff/card-bg1.png'
import CharacterBg from '@/../public/geming-stuff/character-bg.png'
import BackBg from '@/../public/geming-stuff/back-bg.png'
import CharacterImg from '@/../public/geming-stuff/character.png'
import RegionImg1 from '@/../public/geming-stuff/top.png'
import RegionImg2 from '@/../public/geming-stuff/jungler.png'
import RegionImg3 from '@/../public/geming-stuff/mid.png'
import RegionImg4 from '@/../public/geming-stuff/carry.png'
import RegionImg5 from '@/../public/geming-stuff/roamer.png'
import Item1 from '@/../public/geming-stuff/item1.png'
import BoxesBg from '@/components/ui/boxes-bg'

const PlayerComponent = ({player, isFlipped=false}) => {
    const circles = Array(6).fill(0);
    return <div className={`flex items-center justify-center gap-2 relative w-full ${isFlipped?'flex-row-reverse':''}`}>
        <Image src={CharacterBg} alt="Character image" className={`absolute -z-10 top-0 ${isFlipped? 'rotate-180 left-0': 'right-0'}`} />
        
        <Image src={player.img} alt="Character image" className={`${isFlipped?'':'-scale-x-100'} p-1 h-10 object-fill`} />
        <p className="font-bold">{player.gold}</p>
        <div className="flex gap-0.5">
            {circles.map((circle, index) => {
            return <div key={index} className="size-4 border-2 border-gold rounded-full border-solid bg-slate-950 overflow-hidden" >
                {player.items[index] && <Image src={player.items[index]} alt={`item-${index}`} className='size-4 object-cover' />}
            </div>
            })}
        </div>
        <p className="font-bold">{player.status}</p>
    </div>
}

const Page = () => {

  const data = [
    {
        img: RegionImg1, 
        player1: {img:CharacterImg, items: [Item1], gold: '3.8k', status: '3/1/0'},
        player2: {img:CharacterImg, items: [Item1], gold: '3.8k', status: '3/1/0'},
    },
    {
        img: RegionImg2, 
        player1: {img:CharacterImg, items: [Item1], gold: '3.8k', status: '3/1/0'},
        player2: {img:CharacterImg, items: [Item1], gold: '3.8k', status: '3/1/0'},
    },
    {
        img: RegionImg3, 
        player1: {img:CharacterImg, items: [Item1], gold: '3.8k', status: '3/1/0'},
        player2: {img:CharacterImg, items: [Item1], gold: '3.8k', status: '3/1/0'},
    },
    {
        img: RegionImg4, 
        player1: {img:CharacterImg, items: [Item1], gold: '3.8k', status: '3/1/0'},
        player2: {img:CharacterImg, items: [Item1], gold: '3.8k', status: '3/1/0'},
    },
    {
        img: RegionImg5, 
        player1: {img:CharacterImg, items: [Item1], gold: '3.8k', status: '3/1/0'},
        player2: {img:CharacterImg, items: [Item1], gold: '3.8k', status: '3/1/0'},
    },
  ]

  return (
    <div className="relative bg-black text-[#D9C98D] p-4 h-screen w-screen">
        <BoxesBg />
        {/* <Image src={BackBg} alt='back background' className='size-full object-fill absolute inset-0' />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[24%] w-[55%] flex flex-col items-center justify-between bg-center"
        style={{
            backgroundImage: `url(${CardBg.src})`,
            backgroundSize: '100% 100%'
        }}>
            {data.map((_, i)=>{
                return <div key={i} className='flex items-center justify-center gap-8 w-full' >
                    <PlayerComponent player={_.player1} />
                    <Image src={_.img} alt='position' className='size-4 object-contain' />
                    <PlayerComponent player={_.player2} isFlipped={true} />
                </div>
            })}
        </div> */}
    </div>
  );
};

export default Page;