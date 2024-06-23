import React from 'react'
import Image from 'next/image'

export default function ShowPicture({ array, index,width, height, pictureLink }) {
if(!array) return (<Image
  src={'/' + pictureLink}
  width={width}
  height={height}
  alt={pictureLink}
  style={{
    width: 'auto',
    height: '20rem',
  }} />)

  return (<Image
    src={'/' + array[index].name}
    width={array[index].width}
    height={array[index].height}
    alt={array[index].describtion}
    style={{
      width: 'auto',
      height: height ? height : '3em',
    }} />)
}
