import Link from "next/link"
import { en, ar } from "@/public/strings_manager"
import { getCookie, deleteCookie } from "cookies-next"
import { thisDomain } from "@/config/api"

function UserDropdown({userDropdownPopoverShow=false, setUserDropdownPopoverShow, user }) {
  console.log('user', user)
  const logoutFunction = () => {
    deleteCookie("user", {domain: thisDomain, path: '/login'})
    deleteCookie("token", {domain: thisDomain, path: '/login'})
    setUserDropdownPopoverShow(prev=>!prev)
  }
  return (
    <div
    className={`max-h-44 flex flex-col justify-center items-center gap-0 absolute rtl:left-10 ltr:right-10 top-12 bg-zinc-200 rounded-l-lg rounded-br-lg text-black 
    ${userDropdownPopoverShow?'':'hidden'}`}>
      {!user
      ?<Link href={`/login`} 
      className="flex items-center justify-center cursor-pointer hover:bg-zinc-400 rounded-l-lg rounded-br-lg p-4">
        {ar.navbar.login}
      </Link>
      :<div onClick={logoutFunction}
      className="flex items-center justify-center cursor-pointer hover:bg-zinc-400 rounded-l-lg rounded-br-lg p-4">
      {ar.navbar.logout}
      </div>}
        
        
    </div>
  )
}

export default UserDropdown