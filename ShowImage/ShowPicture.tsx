import React from 'react'
import Image from 'next/image'
import { PictureType } from '../ShowPictures/types'

type Probs = {
  array: PictureType[],
  index: number,
  width: number,
  height: number,
  pictureLink: string
}
export default function ShowPicture({ array, index,width, height, pictureLink }:Probs) {
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
    width={parseInt(array[index].width)}
    height={parseInt(array[index].height)}
    alt={array[index].describtion}
    style={{
      width: 'auto',
      height: height ? height : '3em',
    }} />)
}
