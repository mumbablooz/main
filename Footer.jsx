import React from 'react'
import Link from 'next/link'

export default function Footer() {
  const test = 'test'
  const linkCss = {
    fontSize: '0.6rem',
    padding: '0.1em 0.4em',
    marginBottom: '1em',
    color: 'white'
  }
  return (
    <div
      style={{
        bottom: '0',
        left: '0',
        right: '0',
        backgroundColor: 'var(--secoundColor)',
        display: 'flex',
        justifyContent: 'center',
        position: 'fixed'
      }}>
      <ul
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          backgroundColor: 'transparent',

        }}>
        <Link href={'./Impressum'} className='button' style={linkCss}><li>Impressum</li></Link>
        <Link href={'./Datenschutz'} className='button' style={linkCss}><li>Datenschutz</li></Link>
      </ul>
      <br />
      <ul
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          backgroundColor: 'transparent',

        }}>
        <Link href={'https://blooz.de'} className='button' style={linkCss}><li> App by Blooz Development</li></Link>
        <Link href={'https://icons8.de'} className='button' style={linkCss}><li>Icons by icons8</li></Link>
      </ul>
    </div>
  )
}
