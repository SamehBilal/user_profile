
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function SearchParamsComponent({setSearchTypeDropdownValue, setSearchValue, setCurrentPage, setPerPage}) {
  const [isMounted, setIsMounted] = useState(false)
    const searchParams = useSearchParams()

    useEffect(()=>{
      setIsMounted(true)
      if(isMounted){
        // fetch data
      }

      let forWhat = searchParams.get('for') ?? ''
      let search = searchParams.get('s') ?? ''
      let itemsPerPage = searchParams.get('i') ?? 12
      let pageNumber = searchParams.get('p') ?? 1
      // if(!searchParams.get('s')) location.href = '/'
      setSearchTypeDropdownValue(forWhat)
      setSearchValue(search)
      setPerPage(itemsPerPage)
      setCurrentPage(pageNumber)
    }, [])
  
  // OCSESSID
    return (
      <>
      </>
    )
  }