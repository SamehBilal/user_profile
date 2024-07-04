"use client"
import { useState, useEffect } from 'react'
import React from 'react'
import { Search, X } from 'lucide-react'
import { en, ar } from '@/public/strings_manager'

function SearchSection() {
  const [searchValue, setSearchValue] = useState('')
  
  return (
    <div className="flex items-center justify-center bg-zinc-200 rounded-3xl ">
          <div className="rounded-3xl text-zinc-700 h-10 pr-4 flex items-center justify-center">
            <Search strokeWidth={1} className='p-1' />
          </div>
        <div className="rounded-3xl flex items-center justify-between">
          <input id='search_value' name='search_value'
          className="border-0 outline-0 pr-0 pb-1 ml-4 bg-transparent text-sm placeholder:text-zinc-700 focus:border-0 focus-within:border-0 focus-visible:border-0 dark:text-white dark:placeholder:text-white placeholder:font-light" 
          type="text" value={searchValue} onChange={(e)=>setSearchValue(e.target.value)}
          placeholder={ar.navbar.searchPlaceholder}/>
          <button type='button' disabled={searchValue==''} onClick={()=>setSearchValue('')}
            className=' disabled:opacity-0'>
            <X strokeWidth={1} className='p-1' />
          </button>
          <div className="bg-primary rounded-3xl text-white h-10 px-4 flex items-center justify-center">
            <Search strokeWidth={3} className='p-1' />
          </div>
        </div>
    </div>
  )
}

export default SearchSection