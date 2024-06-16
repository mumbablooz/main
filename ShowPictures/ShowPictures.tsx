'use client'
import React, { useState, useRef } from 'react'
import styles from './styles.module.css'
import Image from 'next/image'
import { joePictures_ARRAY } from '../../../DATEN/joePictures_ARRAY'
import { joePictures_tomb_ARRAY, JoePictures_tomb_ARRAY_Type } from '@/app/DATEN/joePictures_tomb_ARRAY'

type Props = {
  array: object[],
  showOnePicture: boolean,
  setShowOnePicture: React.Dispatch<React.SetStateAction<boolean>>
}

type Picture = {
  picture: JoePictures_tomb_ARRAY_Type,
  index: number
}

export default function ShowPictures({ array, showOnePicture, setShowOnePicture }: Props) {

  const [bigPictureContent, setBigPictureContent] = useState<React.ReactElement | undefined>(undefined)
  const [showPictures, setShowPictures] = useState<boolean>(true)
  const [smallPictureSize, setSmallPictureSize] = useState<string>('15em')

  function BigPicture({ picture, index }: Picture) {
    return (<div style={{
      width: '100vw',
      height: '100vh',
      margin: '0 0',
      padding: '0 0',
      cursor: 'pointer',
    }}>
      <p style={{
        color: 'black',
        width: '100vw'
      }}>
        {picture.name}</p>
      <Image
        key={'big' + picture.name + index}
        src={'/' + picture.name}
        width={parseInt(picture.width)}
        height={parseInt(picture.height)}
        alt={picture.describtion}
        style={{
          width: '100vw',
          height: 'auto',
        }}
        placeholder="blur"
        blurDataURL='/blur.jpg'
        onClick={() => {
          setBigPictureContent(undefined)
          setShowOnePicture(false)
        }} />
    </div>)
  }

  function SmallPicture({ picture, index }: Picture) {
    return (<div key={picture.name + index}>

      <Image
        src={'/' + picture.name}
        width={parseInt(picture.width)}
        height={parseInt(picture.height)}
        alt={picture.describtion}
        style={{
          width: 'auto',
          height: smallPictureSize,
          cursor: 'pointer',
        }}
        placeholder="blur"
        blurDataURL='/blur.jpg'
        onClick={() => {
          setBigPictureContent(<div>
            <BigPicture
              picture={picture}
              index={index}
            />
          </div>)
          setShowOnePicture(true)
        }
        } />
    </div>)
  }

  return (
    <div className={styles.picturesContainer}>
      <div>{bigPictureContent}</div>
      {!showOnePicture && joePictures_tomb_ARRAY.map((picture, index) => {
        return (<div key={picture.name + index}><SmallPicture picture={picture} index={index} /></div>)
      })}

    </div>
  )
}
