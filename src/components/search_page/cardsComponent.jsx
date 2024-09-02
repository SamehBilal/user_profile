import React from "react";
import SingleCard from "./singleCard";
import { useState, useEffect } from "react";
import { Link } from "@nextui-org/react";
import { StoreIcon } from "lucide-react";
import CardComponent from "./cardComponent";


// blogs: 0-4, products: 5-10, videos: 11-14, reviews: 15-19

export default function CardsComponent({cards=[], id='blogs', openStatus, setVidDis, setCurrentVid}) {
  const [categories, setCategories] = useState(null)

  useEffect(()=>{
    if(id == 'all'){
      const categories = {
        blogs: [0, 4],
        products: [5, 10],
        videos: [11, 14],
        news: [15, 19],
        reviews: [20, 24],
      };
      const sliceCardsIntoCategories = (cards, categories) => {
        const categorizedCards = {};
      
        for (const [category, [start, end]] of Object.entries(categories)) {
            categorizedCards[category] = cards.slice(start, end + 1);
        }
        return categorizedCards;
      };
      setCategories(sliceCardsIntoCategories(cards, categories));
    }else{
      setCategories([...cards])
    }
  }, [])
  
  return (
    <div className={`max-w-grid flex flex-col gap-8 items-center justify-between`}>
      {id=='all' 
      ?categories && Object.keys(categories).map((_, i)=>{
        return <CardComponent key={i} category={categories[_]} 
        id={id} openStatus={openStatus} setVidDis={setVidDis} setCurrentVid={setCurrentVid} />
      })
      :categories && <CardComponent category={categories} 
      id={id} openStatus={openStatus} setVidDis={setVidDis} setCurrentVid={setCurrentVid} />}
    </div>
  );
}
