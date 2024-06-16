import React from 'react'
import ShowIcon from '../ShowIcon/ShowIcon'
import { GetWindowSize } from '../GetWindowSize'

export default function EnglishButton({english,setEnglish}) {
    const windowSize = GetWindowSize()

  return (
    <>
    <div 
    style={{
        marginRight: '0.4rem',
        height: '100%'
        }}>
          <button onClick={()=>{
            setEnglish(!english)
          }}>{!english ? 'english' : 'german'}</button>
    </div>
    </>
    
  )
}
