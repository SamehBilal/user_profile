"use client"
import AppBar from "@/components/appbar";
import Footer from "@/components/footer";
import SearchPage from "@/components/search_page";
import { searchData, statusData } from "@/components/search_page/data";
import { useState, useEffect } from "react";
import MediaPlayer from "./media-player";
import SearchParamsComponent from "./searchParamsComponent";
import axios from "axios";
import { ApiBaseNet } from "@/config/api";
import toast from 'react-hot-toast';
import ToasterComponent from "@/components/toaster_top"

export default function Psge({}) {
  const [bgImg, setBgImg] = useState(searchData[0].backgroundImg)
  const [searchValue, setSearchValue] = useState('')
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const [actionDropdownValue, setActionDropdownValue] = useState(0)
  const [activeTabIndex, setActiveTabIndex] = useState(0)
  const [searchTypeDropdownValue, setSearchTypeDropdownValue] = useState(0)
  const [vidDis, setVidDis] = useState('full') //full / small
  const [currentVid, setCurrentVid] = useState(null)
  const [isMounted, setIsMounted] = useState(false)

  const [fetchedData, setFechedData] = useState(null)
  const [newSearchData, setNewSearchData] = useState(null)
  const [temprature, setTemprature] = useState(null)
  const [terndingData, setTrendingData] = useState(null)

  function getYouTubeVideoInfo(url) {
    const regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);

    if (match && match[2].length === 11) {
        const videoId = match[2];
        const isShorts = url.includes("/shorts/");
        const contentType = isShorts ? "shorts" : "full";

        return { videoId, contentType };
    } else if (url.includes("/shorts/")) {
        // Extract video ID from YouTube Shorts URL
        const videoId = url.split("/shorts/")[1];
        return { videoId, contentType: "shorts" };
    } else {
        console.log('The supplied URL is not a valid YouTube URL:', url);
        return { videoId: 'l_1sVxt6ric', contentType: "full" };
    }
}

  const processPosts = (cards) => {
    const processed = cards?.map((card, index)=>{ // keeping the same sturcutre and number of elements
      return{
        type: 'blogs', 
        ty: card?.type,
        title: card?.title,
        desc: card?.excerpt,
        imgUrl: card?.thumbnail,
        url: card?.slug
      }
    }).filter(card=>card.ty!='reviews'&&card.ty!='videos') || []
    // console.log('posts: ', processed)
    return processed
  }
  const processStore = (cards) => {
    const processed = cards?.map((card, index)=>{ // keeping the same sturcutre and number of elements
      return{
        type: 'products', 
        title: card?.name,
        price: card?.price,
        inStock: card?.quantity>0,
        imgUrl: card?.image,
        url: `https://ahw.store/${card?.url}`
      }
    })|| []
    // console.log('store: ', processed)
    return processed
  }
  const processvideos = (cards) => {
    const processed = cards?.map((card, index)=>{ // keeping the same sturcutre and number of elements
      const videoInfo = getYouTubeVideoInfo(card?.url)
      return{
        type: 'videos', 
        ty: videoInfo.contentType,
        title: card?.title,
        youtubeId: videoInfo.videoId,
        imgUrl: `https://img.youtube.com/vi/${videoInfo.videoId}/hqdefault.jpg`,
        url: card?.url
      }
    })|| []
    console.log('videos: ', processed)
    return processed
  }
  const processReviews = (cards) => {
    const processed = cards?.map((card, index)=>{ // keeping the same sturcutre and number of elements
      return{
        type: 'reviews', 
        ty: card?.type,
        title: card?.title,
        desc: card?.excerpt,
        imgUrl: card?.thumbnail,
        url: card?.slug
      }
    }).filter(card=>card.ty=='reviews')|| []
    // console.log('reviews: ', processed)
    return processed
  }

  const processData = ({results}) => {
    const newRes = [...searchData];
      newRes[1].cards = results.posts //for posts / blogs
      newRes[2].cards = results.store //for store / products
      newRes[3].cards = results.videos //for videos / videos
      newRes[4].cards = results.posts //for posts / reviews
      newRes[1].cards = processPosts(results.posts)
      newRes[2].cards = processStore(results.store)
      newRes[3].cards = processvideos(results.videos)
      newRes[4].cards = processReviews(results.posts)
      newRes[0].cards = newRes[1].cards.slice(0, 5).concat(newRes[2].cards, newRes[3].cards.slice(0, 4), newRes[4].cards.slice(0, 5))

      return newRes
  }

  const getfetchedData = async () => {
      await axios.get(`${ApiBaseNet}/search?s=${searchValue}&perPage=8`)
      .then(res=>{
        const results = res.data?.results
        console.log('results', results)
        setFechedData(results)
        const newSearchRes = processData({results})
        setNewSearchData(newSearchRes)
      }).catch(e=>{
        console.error(e)
        setFechedData([])
        toast.error(e.message)
      })
  }
  const getTempData = async ({ latitude, longitude }) => {
    // console.log('getTempData', { latitude, longitude })
      await axios.get(`${ApiBaseNet}/weather?lat=${latitude}&long=${longitude}`)
      .then(res=>{
        const results = res.data
        setTemprature(results?.current?.temperature)
      }).catch(e=>{
        console.error(e)
        toast.error(e.message)
        setTemprature('0')
      })
  }
  const getTrendingData = async () => {
      await axios.get(`${ApiBaseNet}/trends`)
      .then(res=>{
        const results = res.data
        setTrendingData(Array.isArray(results) ? results : [])
      }).catch(e=>{
        console.error(e)
        toast.error(e.message)
        setTrendingData([])
      })
  }

  const checkLocation = () => {
    if ('geolocation' in navigator) {
      let latitude='', longitude=''
      navigator.geolocation.getCurrentPosition(
        (position) => {
          latitude = position.coords.latitude; 
          longitude = position.coords.longitude;
        },
        (error) => {
          console.error(error.message);
        },
        {
          enableHighAccuracy: true,
          timeout: 5000,
          maximumAge: 0,
        }
      );
      // console.log('location ', { latitude, longitude })
      getTempData({ latitude, longitude })
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }

  useEffect(()=>{
    setIsMounted(true)
    
    if(isMounted && searchValue && searchValue?.length > 1 && searchTypeDropdownValue?.length>1){
      console.log('fetchingData...')
      getfetchedData()
      checkLocation()
      getTrendingData()
    }
  }, [isMounted])
  console.log('newSearchData', newSearchData)

  return (
    <main className="pt-12 w-full min-h-screen relative overflow-hidden">
      <SearchParamsComponent setSearchTypeDropdownValue={setSearchTypeDropdownValue} setSearchValue={setSearchValue} />
      <ToasterComponent />
      
      <div className="absolute inset-0 w-full h-[70vh] bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(${bgImg?.src || bgImg})`,
          filter: 'blur(80px)',
        }}
      >
        <div className="size-full absolute bg-gradient-to-b from-white/5 to-white dark:from-black/5 dark:to-black" />
      </div>
 
      <AppBar shadow='transparent' bgTransparent={false} searchValue={searchValue} setSearchValue={setSearchValue}
      activeTabIndex={activeTabIndex} setActiveTabIndex={setActiveTabIndex}
      searchTypeDropdownValue={searchTypeDropdownValue} setSearchTypeDropdownValue={setSearchTypeDropdownValue} />
      <SearchPage data={newSearchData} setBgImg={setBgImg} searchDropdownValue={searchTypeDropdownValue} setVidDis={setVidDis}
      statusData={newSearchData? newSearchData[3]?.cards?.filter(card=>card.ty=='shorts'): []} setCurrentVid={setCurrentVid}
      searchValue={searchValue} openStatus={setIsPopupOpen} activeTabIndex={activeTabIndex} setActiveTabIndex={setActiveTabIndex}
      trendingData={terndingData} tagsData={fetchedData?.tags} /> 
      <MediaPlayer isPopupOpen={isPopupOpen} setIsPopupOpen={setIsPopupOpen} isExpanded={isExpanded} vidDis={vidDis} 
      setVidDis={setVidDis} setCurrentVid={setCurrentVid} currentVid={currentVid}
      setIsExpanded={setIsExpanded} actionDropdownValue={actionDropdownValue} setActionDropdownValue={setActionDropdownValue} />
      <Footer />
    </main>
  );
}
