import React from 'react'

import './Notice.css'

const Notice = ({ notice }) => {
  return (
    <div className='notice'>
      <p>{notice.text}</p>
    </div>
  )
}

export default Notice
