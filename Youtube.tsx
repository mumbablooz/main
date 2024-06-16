import React from 'react'

interface Youtubetype {
  videoId: string
}
export default function Youtube({ videoId }:Youtubetype) {
  return (
    <iframe
      width="560"
      height="315"
      style={{
        maxWidth: '560',
        minHeight: '315'
      }}
      src={"https://www.youtube.com/embed/" + videoId}
      title="YouTube video player"
      frameBorder="0"
      /* allow="accelerometer; autoPlay; clipboardWrite; encryptedMedia; gyroScope; pictureInPicture; webShare" */
      allowFullScreen></iframe>
  )
}
