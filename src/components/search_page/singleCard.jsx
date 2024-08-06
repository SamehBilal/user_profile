import React from 'react'
import {Card, CardHeader, CardBody, CardFooter, Image, Button} from "@nextui-org/react";
import BlogsCard from './cards/blogs-card';
import ProductsCard from './cards/products-card';
import VediosCard from './cards/vedios-card';
import ReviewsCard from './cards/reviews-card';

function SingleCard({
    type='blogs', index=0, title='', subTitle='', imgUrl='https://nextui.org/images/card-example-3.jpeg',
    url='#', youtubeId='#', price=0, inStock=true,
    desc='', subDesc='', action='', iconUrl='https://nextui.org/images/breathing-app-icon.jpeg'
  }) {
  return (
    <>
    {/* blogs */}
    {type=='blogs' && <BlogsCard index={index} title={title} subTitle={subTitle} imgUrl={imgUrl} desc={desc} />}
    {/* products */}
    {type=='products' && <ProductsCard index={index} title={title} subTitle={subTitle} imgUrl={imgUrl} price={price} inStock={inStock} />}
    {/* vedios */}
    {type=='vedios' && <VediosCard index={index} title={title} subTitle={subTitle} imgUrl={imgUrl}
     url={url} youtubeId={youtubeId} />}
    {/* reviews */}
    {type=='reviews' && <ReviewsCard index={index} title={title} subTitle={subTitle} imgUrl={imgUrl} desc={desc} />}
    </>
  )
}

export default SingleCard