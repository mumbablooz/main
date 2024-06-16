import React from 'react'

type Props={
  video: string
}
export default function ShowVideo({video}:Props) {
  return (
    <div style={{
        margin: '0.5rem'
    }}>
        <video width="320" height="240" controls>
        <source src={video} type="video/mp4"></source>
        </video>
    </div>
  )
}
