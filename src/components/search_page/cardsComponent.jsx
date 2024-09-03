import React from "react";
import SingleCard from "./singleCard";
import { useState, useEffect } from "react";
import { Link } from "@nextui-org/react";
import { StoreIcon } from "lucide-react";
import CardComponent from "./cardComponent";

export default function CardsComponent({cards=[], id='blogs', openStatus, setVidDis, setCurrentVid, setIsBlogPopupOpen, 
  setCurrentBlog, changeTab, hasMore, currentPage, setCurrentPage}) {
  const [categories, setCategories] = useState(null)

  useEffect(()=>{
    if(id == 'all'){
      const maxCardsPerCategory = {
        blogs: 5,
        products: 6,
        videos: 4,
        news: 5,
        reviews: 5,
        how: 5,
      };
      const categories = Object.keys(maxCardsPerCategory); // categories array
      const categorizedCards = categories.reduce((cat, i) => { 
        cat[i] = []; return cat; 
      }, {}); // object with catigories & an initial value of []
      
      cards.forEach(card => {
        if (categorizedCards[card.type] && categorizedCards[card.type].length < maxCardsPerCategory[card.type]) {
          categorizedCards[card.type].push(card);
        }
      });
      setCategories(categorizedCards);
    }else{
      setCategories([...cards])
    }
  }, [])
  // console.log('categories', categories)
  
  return (
    <div className={`max-w-grid flex flex-col gap-8 items-center justify-between`}>
      {id=='all' 
      ?categories && Object.keys(categories).map((_, i)=>{
        return <CardComponent key={i} category={categories[_]} setIsBlogPopupOpen={setIsBlogPopupOpen} setCurrentBlog={setCurrentBlog}
        id={id} openStatus={openStatus} setVidDis={setVidDis} setCurrentVid={setCurrentVid} 
        changeTab={changeTab} hasMore={hasMore} currentPage={currentPage} setCurrentPage={setCurrentPage} />
      })
      :categories && <CardComponent category={categories} setIsBlogPopupOpen={setIsBlogPopupOpen} setCurrentBlog={setCurrentBlog}
      id={id} openStatus={openStatus} setVidDis={setVidDis} setCurrentVid={setCurrentVid} 
      changeTab={changeTab} hasMore={hasMore} currentPage={currentPage} setCurrentPage={setCurrentPage} />}
    </div>
  );
}
