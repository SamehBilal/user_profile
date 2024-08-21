"use client"
import { useState, useEffect } from 'react'
import React from 'react'
import { Search, X } from 'lucide-react'
import { en, ar } from '@/public/strings_manager'
import { ChevronDown } from 'lucide-react'
import SearchDropdown from './dropdown_lists/search_dropdown'

function SearchSection({isExpanded, setIsExpanded, typeValue, setTypeValue, searchValue, setSearchValue}) {
  const [searchCachValue, setSearchCachValue] = useState(null)

  const handleSearchBtnClick = (e) => {
    e.preventDefault()
    if(searchCachValue?.length > 1){
      setSearchValue(searchCachValue)
      location.href = `/search?for=${typeValue}&s=${searchCachValue}`
    }
  }
  
  return (
    <form onSubmit={handleSearchBtnClick}
    className="flex items-center justify-center bg-zinc-200 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-200 rounded-3xl relative">
      <button type='submit' onClick={()=>handleSearchBtnClick}
      className="rounded-3xl size-10 flex items-center justify-center">
        <Search strokeWidth={1} className='p-1' />
      </button>
      <div className="rounded-3xl flex items-center justify-between">
        <input id='search_value' name='search_value'
        className="border-0 outline-0 pr-0 pb-1 ml-4 bg-transparent text-sm placeholder:text-zinc-700 focus:border-0 focus-within:border-0 focus-visible:border-0 dark:text-white dark:placeholder:text-white placeholder:font-light" 
        type="text" value={searchCachValue==null? searchValue: searchCachValue} onChange={(e)=>setSearchCachValue(e.target.value)}
        placeholder={ar.navbar.searchPlaceholder}/>
        <button type='button' disabled={searchValue==''} onClick={()=>setSearchCachValue('')}
          className=' disabled:opacity-0'>
          <X strokeWidth={1} className='p-1' />
        </button>
        <div id='search_dropdown_btn' className="bg-primary dark:bg-primaryLight rounded-3xl text-white h-10 px-4 flex items-center justify-center cursor-pointer"
        onClick={()=>setIsExpanded(prev=>!prev)}>
          <div className="text-xs flex items-center justify-center gap-1">
            <ChevronDown className='size-4' />
            <span className='pb-1 '>{typeValue? typeValue:ar.navbar.searchAbout.title}</span>
          </div>
        </div>
      </div>

      <SearchDropdown isExpanded={isExpanded} setIsExpanded={setIsExpanded} setValue={setTypeValue} />
    </form>
  )
}

export default SearchSection