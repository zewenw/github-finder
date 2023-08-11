import React from 'react'
import spinner from '../layout/assets/spinner.gif'

function Spinner() {
  return (
    <div className='mt-20'>
      <img
        width={180}
        className='text-center mx-auto'
        src={spinner}
        alt='Loading...'
      />
    </div>
  )
}

export default Spinner
