import React from 'react'
import LatestBlogs from './latest_blogs'
import Form from './form'
import { en, ar } from '@/public/strings_manager'

function Middle() {
  return (
    <section className='ltr:ml-[calc(2.5rem+20%)] rtl:mr-[calc(2.5rem+20%)] space-y-8 mt-20'>

      <div className="space-y-4">
        <h2 className="text-4xl text-black dark:text-white tracking-tighter">{ar.middle.latestInBlogs}</h2>
        <LatestBlogs />
      </div>
      <div className="space-y-4">
        <h2 className="text-4xl text-black dark:text-white tracking-tighter">{ar.middle.latestInStore}</h2>
        <LatestBlogs />
      </div>
      <div className="space-y-4">
        <h2 className="text-4xl text-black dark:text-white tracking-tighter">{ar.middle.latestInGaming}</h2>
        <LatestBlogs />
      </div>

      <Form />
    </section>
  )
}

export default Middle