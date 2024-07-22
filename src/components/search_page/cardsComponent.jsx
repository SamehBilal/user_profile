import React from "react";
import SingleCard from "./singleCard";

export default function CardsComponent({cards=[]}) {
  return (
    <div className="max-w-grid gap-2 grid grid-cols-12 grid-rows-2 px-8 items-center justify-between">
      {cards.map((card, i)=>{
        return <SingleCard key={i} type={card.type} header={card.header} subHeader={card.subHeader} imgUrl={card.imgUrl}
        desc={card.desc} subDesc={card.subDesc} action={card.action} iconUrl={card.iconUrl} />
      })}
    </div>
  );
}
