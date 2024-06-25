import React from 'react'
import { Search } from 'lucide-react'

function SearchSection() {
  return (
    <div className="flex gap-2 items-center justify-center flex-grow">
        <Search strokeWidth={1} />
        <input className="border-l flex-grow p-2 border-gray-300 bg-transparent text-sm pl-4 placeholder:text-black dark:text-white dark:placeholder:text-white placeholder:font-light focus-visible:border-primary focus-visible:!ring-primary focus:border-primary focus:!ring-primary" 
        type="text"
        placeholder="What do you need today"/>
    </div>
  )
}

export default SearchSection