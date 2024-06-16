'use client'
import React, { useState } from 'react'
import { useEffect } from 'react'
import Image from 'next/image'
import { icon_ARRAY } from './icon_ARRAY'
import { mainIcon_ARRAY } from './mainIcon_ARRAY'
import GetWindowSize from '../GetWindowSize'

interface ShowIconType {
  iconName: string,
  size: string,
  color: string
}
export interface IconType {
  name: string,
  src: string,
  group: string,
  size: string,
  color: string
  dataName: string,
  alt: string,
  titel: string
}

export default function ShowIcon({ iconName, size, color }: ShowIconType) {

  const [icon, setIcon] = useState<IconType | undefined>()
  const [concatArray, setconcatArray] = useState<IconType[]>(mainIcon_ARRAY.concat(icon_ARRAY))
  const windowSize = GetWindowSize()

  useEffect(() => {
    if (concatArray) setIcon(concatArray.find((theIcon) => theIcon.name == iconName))
  }, [concatArray, setIcon, iconName])

  return (
    icon && <Image
      src={icon.group ? `https://img.icons8.com${icon.group}${icon.size}${color ? '/' + color : icon.color}${icon.dataName}` : icon.src}
      width='40'
      height='40'
      alt={icon.alt}
      style={{
        width: (windowSize ? (windowSize.width < 1280 ? size : parseInt(size) * 1.5) + 'px' : '12px'),
        height: 'auto',
      }}
    />
  )
}
