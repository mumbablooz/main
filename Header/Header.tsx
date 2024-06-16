'use client'
import React, { useState, useEffect } from 'react'
import styles from './styles.module.css'
import Menu from './Menu'
import Logo from '../../sub/Header/Logo'
import GetWindowSize from '../GetWindowSize'
import NavLeft from '../../sub/Header/NavLeft'
import NavRight from '../../sub/Header/NavRight'

export default function Header() {

  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [content, setContent] = useState<React.JSX.Element | undefined>()
  const [opacityTitelLogoNav, setOpacityTitelLogoNav] = useState(0)
  const [opacityContent, setOpacityContent] = useState(0)
  const [contentHtml, setContetnHtml] = useState<React.JSX.Element>(<Menu setIsOpen={setIsOpen} />)

  const windowSize = GetWindowSize()

  const firstColor = '/' + process.env.NEXT_PUBLIC_HOMEPAGE_FIRST_COLOR

  useEffect(() => {
    setTimeout(() => {
      setOpacityTitelLogoNav(1)
    }, 0)
  }, [])

  useEffect(() => {
    if (isOpen) {
      setContent(contentHtml)
      setOpacityContent(1)
    } else {
      setContent(undefined)
      setOpacityContent(0)
    }
  }, [isOpen, setContent, contentHtml, setOpacityContent])

  return (
    <header className={styles.headerContainer}>

      <div className={styles.titelLogoNavContainer}
        style={{ opacity: opacityTitelLogoNav }}>

        <div className={styles.titelContainer}>

          {windowSize && (windowSize.width < 1280 && <div style={{ display: 'flex', alignItems: 'center' }}>

            <h1 style={{ margin: '0 1rem' }}>{process.env.NEXT_PUBLIC_HOMEPAGE_HEADLINE}</h1></div>)}
        </div>

        <nav>
          <div className={styles.navLeft}>

            {windowSize && (windowSize.width > 1280 && <div style={{ display: 'flex', alignItems: 'center' }}>

              {process.env.NEXT_PUBLIC_OWNER_LOGO && <Logo />}

              <h1 style={{ margin: '0 1rem' }}>{process.env.NEXT_PUBLIC_HOMEPAGE_HEADLINE}</h1></div>)}

            <NavLeft />

          </div>

          <div className={styles.navRight}>
            <NavRight isOpen={isOpen} setIsOpen={setIsOpen}/>

          </div>

        </nav>
      </div>

      {content && <div style={{ opacity: opacityContent }}
        className={styles.menuContainer}>
        {content}
      </div>}

    </header>
  )
}
