
function CloseBackBtn({setIsPopupOpen}) {
  return (
    <div id="close-back-icon"  onClick={()=>setIsPopupOpen(false)}
    className="absolute z-50 top-10 right-10 size-12 rotate-0 transition duration-500 ease-in-out cursor-pointer group/closebtn">
        <span className='block absolute left-1 group-hover/closebtn:-left-[1px] top-4 group-hover/closebtn:top-4 h-2 w-1/2 bg-white rounded rotate-45 group-hover/closebtn:rotate-[135deg] transition ease-in-out'></span>
        <span className='block absolute left-0 top-6 h-2 w-full bg-white rounded -rotate-45 group-hover/closebtn:rotate-0 transition ease-in-out'></span>
        <span className='block absolute left-5 group-hover/closebtn:-left-[1px] top-8 group-hover/closebtn:top-8 h-2 w-1/2 bg-white rounded rotate-45  transition ease-in-out'></span>
    </div>
  )
}

export default CloseBackBtn