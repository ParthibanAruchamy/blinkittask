import React from 'react'

export default function VerticalWrapper({children}) {
  return (
    <div className='flex flex-col'>
      {children}
    </div>
  )
}
