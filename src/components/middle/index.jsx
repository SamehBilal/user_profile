import React from 'react'
import LatestBlogs from './latest_blogs'
import Form from './form'
import { en, ar } from '@/public/strings_manager'

function Middle() {
  return (
    <section className='ltr:ml-[calc(2.5rem+20%)] rtl:mr-[calc(2.5rem+20%)] space-y-8 mt-20 p-grid max-w-grid'>
      {/* <iframe src="https://myaccount.arabhardware.com/api/refresh" frameborder="0" className='hidden'></iframe> */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start">
            <span className={`h-8 ml-2 rounded-lg w-2 bg-primary dark:bg-primaryLight`}></span>
            <h2 className="text-2xl text-black dark:text-white tracking-tight">{ar.middle.latestInStore}</h2>
          </div>
          <p className="text-base text-zinc-700">عرض الكل</p>
        </div>
        <LatestBlogs />
      </div>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start">
            <span className={`h-8 ml-2 rounded-lg w-2 bg-primary dark:bg-primaryLight`}></span>
            <h2 className="text-2xl text-black dark:text-white tracking-tight">{ar.middle.latestInBlogs}</h2>
          </div>
          <p className="text-base text-zinc-700">عرض الكل</p>
        </div>
        <LatestBlogs />
      </div>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start">
            <span className={`h-8 ml-2 rounded-lg w-2 bg-primary dark:bg-primaryLight`}></span>
            <h2 className="text-2xl text-black dark:text-white tracking-tight">{ar.middle.latestInGaming}</h2>
          </div>
          <p className="text-base text-zinc-700">عرض الكل</p>
        </div>
        <LatestBlogs />
      </div>
    </section>
  )
}

export default Middle