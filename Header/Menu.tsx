import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import styles from './styles.module.css'

import ShowIcon from '../ShowIcon/ShowIcon'

type Props = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Menu({ setIsOpen }: Props) {
  function handleClick() {
    setIsOpen(false)
  }

  return (
    <div className={styles.menuContainer}>

      <Image
        width="12"
        height="12"
        src="https://img.icons8.com/material/24/var(--firstColor)/cancel--v1.png"
        alt="cancel--v1"
        onClick={() => setIsOpen(false)}
        style={{
          cursor: 'pointer',
          alignSelf: 'flex-end'
        }} />

      <ul>
        <li className='menuButton' onClick={handleClick}>
          <Link href={'./'}><div style={{ display: 'flex', alignItems: 'center' }}>
            <ShowIcon iconName={'home'} size={'20'} color={'000000'} />
            <p style={{ marginLeft: '0.3em', fontSize: '1rem' }}>Home</p>
          </div></Link></li>
        <li className='menuButton' onClick={handleClick}>

          <Link href={'./Leistungen'}><div style={{ display: 'flex', alignItems: 'center' }}>
            <ShowIcon iconName={'leistungen'} size={'20'} color={''} />
            <p style={{ marginLeft: '0.3em', fontSize: '1rem' }}>Leistungen</p>
          </div></Link></li>

        <li className='menuButton' onClick={handleClick}>
          <Link href={'./Team'}><div style={{ display: 'flex', alignItems: 'center' }}>
            <ShowIcon iconName={'team'} size={'20'} color={''} />
            <p style={{ marginLeft: '0.3em', fontSize: '1rem' }}>Team</p>
          </div></Link></li>

        <li className='menuButton' onClick={handleClick}>
          <Link href={'./Kontakt'}><div style={{ display: 'flex', alignItems: 'center' }}>
            <ShowIcon iconName={'contact'} size={'20'} color={'var(--firstColor)'} />
            <p style={{ marginLeft: '0.3em', fontSize: '1rem' }}>Kontakt</p>
          </div></Link></li>



      </ul>

    </div>
  )
}