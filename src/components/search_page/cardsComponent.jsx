import React from "react";
import SingleCard from "./singleCard";
import { useState, useEffect } from "react";

export default function CardsComponent({cards=[], id='blogs'}) {
  const [cardTypeIndex, setCardTypeIndex] = useState({blogs: 0, products: 1, vedios: 2, reviews: 3})

  let additionalClasses = ''
  if(id=='blogs' || id=='reviews' || id=='vedios' || id=='all') additionalClasses='grid-cols-6'
  else additionalClasses='grid-cols-1'

  useEffect(()=>{
    const getEachCardTypeIndex = () => {
      const blogIndex = cards.findIndex(card => card.type === 'blogs');
      const productIndex = cards.findIndex(card => card.type === 'products');
      const vedioIndex = cards.findIndex(card => card.type === 'vedios');
      const reviewIndex = cards.findIndex(card => card.type === 'reviews');
      setCardTypeIndex({
        blogs: blogIndex, products: productIndex, vedios: vedioIndex, reviews: reviewIndex
      })
    }
    getEachCardTypeIndex()
  }, [])

  const getIndex = (type, i) => {
    const theIndex = i - cardTypeIndex[type]
    console.log(id, i, cardTypeIndex[type], 'the index= ', theIndex)
    return theIndex
  }
  
  return (
    <div className={`max-w-grid gap-2 grid ${additionalClasses} gap-4 px-8 items-center justify-between`}>
      {cards.map((card, i)=>{
        return <SingleCard key={i} index={id!='all'?i:getIndex(card.type, i)} 
        type={card.type} title={card.title} subTitle={card.subTitle} imgUrl={card.imgUrl}
        desc={card.desc} price={card.price} inStock={card.inStock} url={card.url} youtubeId={card.youtubeId} />
      })}
    </div>
  );
}
