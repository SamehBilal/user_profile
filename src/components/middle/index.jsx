import React from 'react'
import LatestBlogs from './latest_blogs'

function Middle() {
  return (
    <section className='ml-[calc(2.5rem+20%)] space-y-4 mt-20'>

        <h2 className="text-5xl text-black tracking-tighter">Profile:</h2>
        <LatestBlogs />
    </section>
  )
}

export default Middle