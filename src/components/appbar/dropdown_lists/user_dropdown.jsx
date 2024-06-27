import Link from "next/link"
import { en, ar } from "@/public/strings_manager"

function UserDropdown({userDropdownPopoverShow=false, }) {
  return (
    <Link href={`/login`}
    className={`max-h-44 flex justify-center items-center gap-0 absolute rtl:left-10 ltr:right-10 top-12 bg-gray-200 rounded-l-lg rounded-br-lg text-black 
    ${userDropdownPopoverShow?'':'hidden'}`}>
        <div className="flex items-center justify-center cursor-pointer hover:bg-gray-400 rounded-l-lg rounded-br-lg p-4">
          {ar.navbar.login}
        </div>
    </Link>
  )
}

export default UserDropdown