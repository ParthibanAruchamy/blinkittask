import React from 'react'

export default function HorizontalWrapper({children}) {
  return (
    <div className='flex flex-row'>
      {children}
    </div>
  )
}
