import React from 'react'
import { getSession } from "next-auth/react"

// export async function getServerSideProps(context) {
//     const session = await getSession(context)
  
//     if (!session) {
//       return {
//         redirect: {
//           destination: "/login",
//           permanent: false
//         }
//       }
//     }
  
//     return {
//       props: {
//         user: session.user
//       }
//     }
//   }

function Page({user}) {
  return (
    <div className='w-full h-full max-w-grid pr-grid'>
        <p>User details</p>
        <p>{user}</p>
    </div>
  )
}

export default Page