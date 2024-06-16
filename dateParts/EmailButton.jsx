import React from 'react'
import styles from './styles.module.css'
///kdhjnidhjSDHKAjldjnhkalhj
export default function EmailButton() {
  const test = 'test'
  return (
    <a href={'mailto:'+process.env.NEXT_PUBLIC_CONTACT_EMAIL} className={"button "+styles.EmailButton}><p 
        
>E-Mail: {process.env.NEXT_PUBLIC_CONTACT_EMAIL}</p></a>
  )
}
