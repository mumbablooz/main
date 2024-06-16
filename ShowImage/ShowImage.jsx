import React from 'react'
import Image from 'next/image'

export default function ShowImage({image,width,height}) {
  return (
    <Image src={'/'+image.name} 
    width={828}
    height={821}
    alt={image.discription} 
    style={{
      width: width,
      height: height
    }} 
    priority={true}/>
  )
}
