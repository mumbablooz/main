import React from 'react'
import styles from './styles.module.css'
import Image from 'next/image'
import { joePictures_ARRAY } from '../../../DATEN/joePictures_ARRAY'

export default function PicturesPage() {
  
  return (
    <div className={styles.picturesContainer}>

{joePictures_ARRAY.map((picture,index)=>{
  return (<div key={'picture.name'+index}>
    <Image 
    src={'/'+picture.name} 
    width={picture.width} 
    height={picture.height} 
    alt={picture.describtion}
    style={{
      width: '30rem',
      height: 'auto',
    }}/>
    </div>)
})}
    </div>
  )
}
