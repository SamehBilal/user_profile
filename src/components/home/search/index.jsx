import {useState} from 'react'
import { SearchIcon, ChevronDownIcon } from 'lucide-react'
import SearchDropdown from '@/components/appbar/dropdown_lists/search_dropdown';


function SearchSec({searchValue, setSearchValue}) {
    const [isExpanded, setIsExpanded] = useState(false)
    const [typeValue, setTypeValue] = useState('')

    const handleOnSubmit = (e) => {
        e.preventDefault();
    }

  return (
    <form onSubmit={handleOnSubmit}
    className='w-full flex items-center justify-between rounded-lg bg-white text-black relative overflow-visible'>
        <button type='submit' onClick={handleOnSubmit} 
        className='px-4'>
            <SearchIcon />
        </button>
        <div className="h-full flex-1">
            <textarea type="text" id='home-search' onChange={(e)=>setSearchValue(e.target.value)} value={searchValue}
            placeholder='كيف يمكننا مساعدتكم اليوم؟' rows={1}
            className='px-4 py-2 placeholder:text-gray-600 border-0 outline-0 focus:outline-0 focus:border-0 w-full bg-transparent h-full resize-none' ></textarea>
        </div>
        <button id='search_dropdown_btn' type='button' onClick={()=>setIsExpanded(prev=>!prev)} className='pr-4 pl-6' >
            <ChevronDownIcon
            className={`text-primary ${isExpanded?'rotate-180':''} transition-all`} />
        </button>
        <SearchDropdown isExpanded={isExpanded} setIsExpanded={setIsExpanded} setValue={setTypeValue} flexRow={true} />
    </form>
  )
}

export default SearchSec