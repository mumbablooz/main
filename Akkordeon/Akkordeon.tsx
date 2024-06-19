'use client'
import React, { useEffect, useState, JSX } from 'react'
import styles from './styles.module.css'
import ShowIcon from '../ShowIcon/ShowIcon'

// nur mal so zum testen
//remote

export interface AkkordeonType {
    contentHtml: React.JSX.Element,
    isOpenBooleen: boolean,
    color: string
}
export default function Akkordeon({ contentHtml, isOpenBooleen, color }: AkkordeonType) {
    const [isOpen, setIsOpen] = useState(isOpenBooleen)
    const [content, setContent] = useState<React.JSX.Element | undefined>()


    const closedIcon = process.env.NEXT_PUBLIC_HOMEPAGE_CLOSEDICON ? process.env.NEXT_PUBLIC_HOMEPAGE_CLOSEDICON : 'closed'
    const openIcon = process.env.NEXT_PUBLIC_HOMEPAGE_OPENICON ? process.env.NEXT_PUBLIC_HOMEPAGE_OPENICON : 'open'
    useEffect(() => {
        if (isOpen) {
            setContent(contentHtml)
        } else {
            setContent(undefined)
        }
    }, [isOpen, setIsOpen, setContent, contentHtml])

    function handleOnClick() {
        setIsOpen(!isOpen)
    }

    return (
        <div style={{ marginBottom: '1.6rem' }}>
            <div className={styles.buttonContainer}>
                <button className='button'
                    style={{
                        color: 'black',
                        marginRight: '0.3rem',
                        width: '9rem',
                        height: '3rem'
                    }}
                    onClick={handleOnClick}>
                    <p style={{ width: '5rem' }}>{isOpen ? 'schließen' : 'öffnen'}</p>
                    {isOpen ? <div onClick={handleOnClick}
                        style={{ cursor: 'pointer', marginLeft: '0.4rem' }}>
                        <ShowIcon iconName={openIcon} size={'50'} color={''} />
                    </div>
                        : <div onClick={handleOnClick} style={{ cursor: 'pointer', marginLeft: '0.4rem' }}>
                            <ShowIcon iconName={closedIcon} size={'50'} color={''} />
                        </div>}
                </button>
            </div>

            <div>{content}</div>
        </div>
    )
}
