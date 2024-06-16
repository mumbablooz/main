import React from 'react'

export default function ShowPlaylistYoutube({link}) {
  return (
    <iframe 
    width="560" 
    height="315" 
    src={link} 
    title="YouTube video player" 
    frameBorder="0" 

   
    allowFullScreen
    style={{
      borderRadius: '1rem'
    }}>

    </iframe>
  )
}
