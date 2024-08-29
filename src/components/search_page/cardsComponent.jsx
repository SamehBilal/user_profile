import React from "react";
import SingleCard from "./singleCard";
import { useState, useEffect } from "react";
import { Link } from "@nextui-org/react";


const CardComponent = ({i=0, id, card, cardTypeLastIndex, cardTypeIndex, openStatus, setVidDis, setCurrentVid}) => {
  // page consts
  const titles = {
    blogs:  "أحدث المقالات", 
    products: "أحدث المنتجات", 
    videos: "أحدث الفيديوهات", 
    reviews: "أحدث المراجعات"
  }
  const toLinks = {
    blogs:  "المزيد من المقالات", 
    products: "المزيد من المنتجات", 
    videos:"المزيد من الفيديوهات", 
    reviews: "المزيد من المراجعات"
  }
  const links = {
    blogs: "https://arabhardware.net/articles",
    products: "https://ahw.store",
    videos: "https://www.youtube.com/@Arabhardware",
    reviews: "https://arabhardware.net/reviews"
  }
  const maxLengthPreviewAll = {
    blogs: 5,
    products: 6,
    videos: 4,
    reviews: 5
  }

  // get the index of the card
  const getIndex = (type, i) => {
    const theIndex = i - cardTypeIndex[type]
    return theIndex
  }

  return <>
  {/* title */}
  {i==cardTypeIndex[card.type] && 
  <div className="col-span-6 h-14 relative mb-2">
    <p className="absolute inset-0 font-bold text-3xl top-2/3 -translate-y-1/2">
      {titles[card.type]}
    </p>
  </div>}
  {/* cards */}
  {(id!='all' || getIndex(card.type, i)<maxLengthPreviewAll[card.type]) && //في الصفحة الرئيسية، رندر بس اللعدد المحدد
  <SingleCard key={i} index={id!='all'?i:getIndex(card.type, i)}
  openStatus={openStatus} setVidDis={setVidDis} setCurrentVid={setCurrentVid}
  type={card.type} title={card.title} subTitle={card.subTitle} imgUrl={card.imgUrl} moreVideos={card.moreVideos} comments={card.comments}
  desc={card.desc} price={card.price} inStock={card.inStock} url={card.url} youtubeId={card.youtubeId} />}

  {/* link to more */}
  {i==cardTypeLastIndex[card.type]&& 
  <div className="col-span-6 h-8 relative w-full">
      <Link
      className="absolute left-0 font-bold text-small top-1/3 -translate-y-1/2 w-fit"
      isExternal
      showAnchorIcon
      href={links[card.type]}
    >
      {toLinks[card.type]}
    </Link>
  </div>}
  </>
}

export default function CardsComponent({cards=[], id='blogs', openStatus, setVidDis, setCurrentVid}) {
  const [cardTypeIndex, setCardTypeIndex] = useState({blogs: 0, products: 1, videos: 2, reviews: 3})
  const [cardTypeLastIndex, setCardTypeLastIndex] = useState({blogs: 0, products: 1, videos: 2, reviews: 3})

  useEffect(()=>{
    const getEachCardTypeIndex = () => {
      const blogIndex = cards.findIndex(card => card.type === 'blogs');
      const productIndex = cards.findIndex(card => card.type === 'products');
      const vedioIndex = cards.findIndex(card => card.type === 'videos');
      const reviewIndex = cards.findIndex(card => card.type === 'reviews');
      setCardTypeIndex({
        blogs: blogIndex, products: productIndex, videos: vedioIndex, reviews: reviewIndex
      })
      setCardTypeLastIndex({
        blogs:(productIndex-1), 
        products: (vedioIndex-1), 
        videos: (reviewIndex-1), 
        reviews: (cards.length-1)
      })
    }
    getEachCardTypeIndex()
  }, [])
  
  return (
    <div className={`max-w-grid grid grid-cols-6 gap-4 items-center justify-between`}>
      {cards.map((card, i)=>{
        return <CardComponent key={i} i={i} card={card} cardTypeLastIndex={cardTypeLastIndex}
        cardTypeIndex={cardTypeIndex} id={id} openStatus={openStatus} setVidDis={setVidDis} setCurrentVid={setCurrentVid} />
      })}
    </div>
  );
}
