
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import axios from "axios";
import { storeSession } from "@/config/api";
import { getCookie } from 'cookies-next';

export default function SearchParamsComponent({setSearchTypeDropdownValue, setSearchValue}) {
  const [isMounted, setIsMounted] = useState(false)
    const searchParams = useSearchParams()

    useEffect(()=>{
      setIsMounted(true)
      if(isMounted){
        // fetch data
      }

      let forWhat = searchParams.get('for')
      let search = searchParams.get('search')
      setSearchTypeDropdownValue(forWhat)
      setSearchValue(search)
    }, [])
  
  // OCSESSID
    return (
      <>
      </>
    )
  }