import React from 'react'
import styles from './styles.module.css'

export default function HomePageButton() {
  return (
    <a href={'https://'+process.env.NEXT_PUBLIC_OWNER_HOMEPAGE} 
        className={"button "+styles.HomePageButton}
><p>Homepage: {process.env.NEXT_PUBLIC_OWNER_HOMEPAGE} </p></a>
  )
}
