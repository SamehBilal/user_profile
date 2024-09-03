import React from 'react'
import {Card, CardHeader, CardBody, CardFooter, Image, Button} from "@nextui-org/react";
import BlogsCard from './cards/blogs-card';
import ProductsCard from './cards/products-card';
import VideosCard from './cards/videos-card';
import ReviewsCard from './cards/reviews-card';

function SingleCard({
    type='blogs', index=0, title='', subTitle='', imgUrl='https://nextui.org/images/card-example-3.jpeg', setCurrentBlog, setIsBlogPopupOpen,
    url, youtubeId, price=0, inStock=true, openStatus, setVidDis, moreVideos, comments, desc='', setCurrentVid, author, likes, views, publishAt
  }) {
  return (
    <>
    {/* blogs */}
    {type=='blogs' && <ReviewsCard index={index} title={title} subTitle={subTitle} imgUrl={imgUrl} desc={desc} url={url}
    setIsBlogPopupOpen={setIsBlogPopupOpen} setCurrentBlog={setCurrentBlog} author={author} likes={likes} views={views} publishAt={publishAt} />}
    {/* products */}
    {type=='products' && <ProductsCard index={index} title={title} subTitle={subTitle} imgUrl={imgUrl} price={price} inStock={inStock} url={url} />}
    {/* videos */}
    {type=='videos' && <VideosCard moreVideos={moreVideos} comments={comments}
    index={index} title={title} subTitle={subTitle} imgUrl={imgUrl} openStatus={openStatus}
     youtubeId={youtubeId} setVidDis={setVidDis} setCurrentVid={setCurrentVid} />}
     {/* news */}
     {type=='news' && <ReviewsCard index={index} title={title} subTitle={subTitle} imgUrl={imgUrl} desc={desc} url={url}
    setIsBlogPopupOpen={setIsBlogPopupOpen} setCurrentBlog={setCurrentBlog} author={author} likes={likes} views={views} publishAt={publishAt} />}
    {/* reviews */}
    {type=='reviews' && <ReviewsCard index={index} title={title} subTitle={subTitle} imgUrl={imgUrl} desc={desc} url={url}
    setIsBlogPopupOpen={setIsBlogPopupOpen} setCurrentBlog={setCurrentBlog} author={author} likes={likes} views={views} publishAt={publishAt} />}
     {/* how */}
     {type=='how' && <ReviewsCard index={index} title={title} subTitle={subTitle} imgUrl={imgUrl} desc={desc} url={url}
    setIsBlogPopupOpen={setIsBlogPopupOpen} setCurrentBlog={setCurrentBlog} author={author} likes={likes} views={views} publishAt={publishAt} />}
    </>
  )
}

export default SingleCard