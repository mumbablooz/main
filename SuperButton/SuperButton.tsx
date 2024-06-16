import React, { useState, useEffect } from 'react'

import Image from 'next/image'
import Link from 'next/link'

import styles from './styles.module.css'
import { icon_ARRAY } from '../ShowIcon/icon_ARRAY'
import { IconType } from '../ShowIcon/ShowIcon';

type Props = {
    iconName: string,
    link: string,
    color: string
}
export default function SuperButton({ iconName, link, color }: Props) {

    const [icon, setIcon] = useState<IconType | undefined>()

    useEffect(() => {
        setIcon(icon_ARRAY.find((theIcon) => theIcon.name == iconName))
    }, [iconName, setIcon])

    return (icon &&
        <div className={styles.SuperButtonContainer}>
            <Link href={`./${link}`}>
                <div>
                    <Image
                        width="100"
                        height="100"
                        src={`https://img.icons8.com${icon.group}${icon.size}${color ? color : icon.color}${icon.dataName}`}
                        alt={icon.alt} />
                    {icon.titel && <p>{icon.titel}</p>}
                </div>

            </Link>
        </div>
    )
}
