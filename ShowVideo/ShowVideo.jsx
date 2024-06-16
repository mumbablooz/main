import React from 'react'

export default function ShowVideo({video}) {
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
