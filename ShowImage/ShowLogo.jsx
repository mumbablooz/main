import React from 'react'
import Image from 'next/image'

export default function ShowLogo({width}) {
  return (
        <Image src={'/Wallys and Dees Logo_2018 red-blue.png'} 
        width={828}
        height={821}
        alt='Wallys and Dees Logo_2018 red-blue'
        style={{
          maxWidth: width,
          height: 'auto'
        }} 
        priority={true}/>
  )
}
