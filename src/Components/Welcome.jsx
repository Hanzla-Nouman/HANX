import React from 'react'
import '../App.css'
const Welcome = ({event}) => {
  return (
    <>
    <div className='head'>
    <h1 > No posts are here to shown </h1>
    <button type='button' className='btn btn-primary' onClick={event}>Fetch Posts</button>
    </div>
    </>
  )
}

export default Welcome