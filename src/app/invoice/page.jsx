"use client"
import React from 'react'
import Image from 'next/image'
import CardBg from '@/../public/geming-stuff/card-bg1.png'
import CharacterImg from '@/../public/geming-stuff/character.png'
import RegionImg1 from '@/../public/geming-stuff/top.png'
import RegionImg2 from '@/../public/geming-stuff/jungler.png'
import RegionImg3 from '@/../public/geming-stuff/mid.png'
import RegionImg4 from '@/../public/geming-stuff/carry.png'
import RegionImg5 from '@/../public/geming-stuff/roamer.png'
import Item1 from '@/../public/geming-stuff/item1.png'

const PlayerComponent = ({player, isFlipped=false}) => {
    const circles = Array(6).fill(0);
    return <div className={`flex items-center justify-between gap-2 ${isFlipped?'flex-row-reverse':''}`}>
    <Image src={player.img} alt="Character image" className="w-32 h-16 p-1" />
    <p className="font-bold">{player.gold}</p>
    <div className="flex gap-0.5">
        {circles.map((circle, index) => {
        return <div key={index} className="size-8 border-2 border-gold rounded-full border-solid bg-slate-950 overflow-hidden" >
            {player.items[index] && <Image src={player.items[index]} alt={`item-${index}`} className='size-8 object-cover' />}
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
    <div className="flex items-center justify-center bg-black text-[#D9C98D] p-4 min-h-screen w-screen">
        <div className="flex flex-col items-center justify-between bg-center"
        style={{
            backgroundImage: `url(${CardBg.src})`,
            backgroundSize: '100% 100%'
        }}>
            {data.map((_, i)=>{
                return <div key={i} className='flex items-center justify-between gap-8' >
                    <PlayerComponent player={_.player1} />
                    <Image src={_.img} alt='position' className='size-8 object-contain' />
                    <PlayerComponent player={_.player2} isFlipped={true} />
                </div>
            })}
        </div>
    </div>
  );
};

export default Page;