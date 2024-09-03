import SingleCard from "./singleCard";
import { useState, useEffect } from "react";
import { Link } from "@nextui-org/react";
import { StoreIcon, ArrowUpLeft, ArrowDownLeft } from "lucide-react";

const CardComponent = ({id, category, openStatus, setVidDis, setCurrentVid, setIsBlogPopupOpen, setCurrentBlog, changeTab}) => {
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

    const handleChangeTab = ()=>{
        window.scrollTo({ top: 200, behavior: 'smooth' });
        changeTab(category[0]?.type)
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
                openStatus={openStatus} setVidDis={setVidDis} setCurrentVid={setCurrentVid} moreVideos={_.moreVideos} comments={_.comments} 
                publishAt={_.publishAt} title={_.title} subTitle={_.subTitle} desc={_.desc}
                type={_.type} imgUrl={_.imgUrl} setIsBlogPopupOpen={setIsBlogPopupOpen} setCurrentBlog={setCurrentBlog}
                price={_.price} inStock={_.inStock} url={_.url} youtubeId={_.youtubeId} author={_.author} likes={_.likes} views={_.views} />
                })
            }
        </div>
        
        {/* link to more in all */}
        {category[0]?.type && id=='all' && category[0]?.type!='products' &&
        <button onClick={handleChangeTab}
        className="font-bold text-small rounded-lg w-full flex items-center justify-center text-black dark:text-white py-8 bg-black/15 shadow-medium">
            <span>عرض المزيد</span>
            <ArrowDownLeft />
        </button>}
        {category[0]?.type == 'products' && <button onClick={handleChangeTab}
        className="absolute top-0 left-8 text-black dark:text-white p-2">
            <ArrowUpLeft />
        </button>}

        {/* pupup in blogs/how/reviews/news */}
        {category[0]?.type && id!='all' &&
        <div onClick={()=>{
            // load more data
        }}
        className="font-bold text-small rounded-lg w-full flex items-center justify-center text-black dark:text-white py-8 bg-black/15 shadow-medium">
            <span>عرض المزيد</span>
            <ArrowDownLeft />
        </div>}

    </div>
}

export default CardComponent
