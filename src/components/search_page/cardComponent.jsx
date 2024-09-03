import SingleCard from "./singleCard";
import { useState, useEffect } from "react";
import { Link } from "@nextui-org/react";
import { StoreIcon, ArrowUpLeft, ArrowDownLeft } from "lucide-react";

const CardComponent = ({id, category, openStatus, setVidDis, setCurrentVid}) => {
    const titles = {
      blogs:  "أحدث المقالات", 
      products: "أحدث المنتجات", 
      videos: "أحدث الفيديوهات", 
      news: "أحدث الأخبار", 
      reviews: "أحدث المراجعات",
      how: "كيف؟",
    }
    const links = {
      blogs: "https://arabhardware.net/articles",
      products: "https://ahw.store",
      videos: "https://www.youtube.com/@Arabhardware",
      news: "https://arabhardware.net/news",
      reviews: "https://arabhardware.net/reviews",
      how: "https://arabhardware.net/how",
    }
    
  
    return <div className={`space-y-8 rounded-md relative py-8 ${category[0]?.type && category[0]?.type == 'products'? 'bg-black/5 dark:bg-white/5 px-[2%] pb-12':''}`}>
        {/* title */}
        {category[0]?.type &&
        <div className="col-span-6 relative flex items-center justify-start gap-2">
        {category[0]?.type=='products' && <StoreIcon className="size-6" />}
        <p className="font-bold text-3xl">
            {titles[category[0]?.type]}
        </p>
        </div>}

        {/* cards */}
        <div className="grid grid-cols-6 gap-4 items-center justify-between">
            {category && category?.length > 0 && category.map((_, i)=>{
                return <SingleCard key={i} index={i}
                openStatus={openStatus} setVidDis={setVidDis} setCurrentVid={setCurrentVid}
                type={_.type} title={_.title} subTitle={_.subTitle} imgUrl={_.imgUrl} moreVideos={_.moreVideos} comments={_.comments}
                desc={_.desc} price={_.price} inStock={_.inStock} url={_.url} youtubeId={_.youtubeId} />
                })
            }
        </div>
        
        {/* link to more */}
        {category[0]?.type && id=='all' && category[0]?.type!='products' &&
        <Link href={links[category[0]?.type]} isExternal
        className="font-bold text-small rounded-lg w-full flex items-center justify-center text-black dark:text-white py-8 bg-black/15 shadow-medium">
            <span>عرض المزيد</span>
            <ArrowDownLeft />
        </Link>}
        {category[0]?.type == 'products' && <Link href={links[category[0]?.type]} isExternal
        className="absolute top-0 left-8 text-black dark:text-white p-2">
            <ArrowUpLeft />
        </Link>}
    </div>
}

export default CardComponent
