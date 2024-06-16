import React from 'react'
import ShowIcon from './ShowIcon/ShowIcon'

export default function PageHeader({pageName,iconName}) {
  return (
    <div style={{
        display: 'flex', 
        alignItems: 'center',
        margin: '1rem'}}>
      <h2 style={{marginRight: '0.3em'}}>{pageName}</h2>
      <ShowIcon iconName={iconName} size={'30'} color={'ffffff'}/>
      </div>
  )
}
