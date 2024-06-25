import React from 'react'
import LatestBlogs from './latest_blogs'
import Form from './form'

function Middle() {
  return (
    <section className='ml-[calc(2.5rem+20%)] space-y-8 mt-20'>

      <div className="space-y-4">
        <h2 className="text-4xl text-black tracking-tighter">Latest in store:</h2>
        <LatestBlogs />
      </div>
      <div className="space-y-4">
        <h2 className="text-4xl text-black tracking-tighter">Latest in blogs:</h2>
        <LatestBlogs />
      </div>
      <div className="space-y-4">
        <h2 className="text-4xl text-black tracking-tighter">Latest in gaming:</h2>
        <LatestBlogs />
      </div>

      <Form />
    </section>
  )
}

export default Middle