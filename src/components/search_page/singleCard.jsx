import React from 'react'
import {Card, CardHeader, CardBody, CardFooter, Image, Button} from "@nextui-org/react";

function SingleCard({
    type='normal', header='', subHeader='', imgUrl='https://nextui.org/images/card-example-3.jpeg',
  desc='', subDesc='', action='', iconUrl='https://nextui.org/images/breathing-app-icon.jpeg'
  }) {
  return (
    <>
    {/* normal */}
    {type=='normal' && <Card className="col-span-12 sm:col-span-4 h-[300px] group">
      <CardHeader className="absolute z-10 top-1 flex-col !items-start group-hover:translate-y-4 group-hover:drop-shadow-lg transition">
        <p className="text-tiny text-white/60 uppercase font-bold">{header}</p>
        <h4 className="text-white font-medium text-large">{subHeader}</h4>
      </CardHeader>
      <Image
        removeWrapper
        alt="Card background"
        className="z-0 w-full h-full object-cover hover:scale-110 hover:brightness-50 saturate-50 transition"
        src={imgUrl}
      />
    </Card>}
    {/* type1 */}
    {type=='type1' && <Card isFooterBlurred className="w-full h-[300px] group col-span-12 sm:col-span-5">
      <CardHeader className="absolute z-10 top-1 flex-col items-start group-hover:translate-y-4 group-hover:drop-shadow-lg transition">
        <p className="text-tiny text-white/60 uppercase font-bold">{header}</p>
        <h4 className="text-black font-medium text-2xl">{subHeader}</h4>
      </CardHeader>
      <Image
        removeWrapper
        alt="Card example background"
        className="z-0 w-full h-full scale-125 -translate-y-6 object-cover hover:scale-110 hover:brightness-50 saturate-50 transition"
        src={imgUrl}
      />
      <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
        <div>
          <p className="text-black text-tiny">{desc}</p>
          <p className="text-black text-tiny">{subDesc}</p>
        </div>
        <Button className="text-tiny" color="primary" radius="full" size="sm">
          {action}
        </Button>
      </CardFooter>
    </Card>}
    {/* type2 */}
    {type=='type2' && <Card isFooterBlurred className="w-full h-[300px] group col-span-12 sm:col-span-7">
      <CardHeader className="absolute z-10 top-1 flex-col items-start group-hover:translate-y-4 group-hover:drop-shadow-lg transition">
        <p className="text-tiny text-white/60 uppercase font-bold">{header}</p>
        <h4 className="text-white/90 font-medium text-xl">{subHeader}</h4>
      </CardHeader>
      <Image
        removeWrapper
        alt="Relaxing app background"
        className="z-0 w-full h-full object-cover hover:scale-110 hover:brightness-50 saturate-50 transition"
        src={imgUrl}
      />
      <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
        <div className="flex flex-grow gap-2 items-center">
          <Image
            alt="Breathing app icon"
            className="rounded-full w-10 h-11 bg-black"
            src={iconUrl}
          />
          <div className="flex flex-col">
            <p className="text-tiny text-white/60">{desc}</p>
            <p className="text-tiny text-white/60">{subDesc}</p>
          </div>
        </div>
        <Button radius="full" size="sm">{action}</Button>
      </CardFooter>
    </Card>}
    </>
  )
}

export default SingleCard