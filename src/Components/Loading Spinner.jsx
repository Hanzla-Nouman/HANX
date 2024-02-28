import React from 'react'
import '../App.css'

const LoadingSpinner = () => {
  return (
    <>
    <center><div className="spinner-border spinnner" style={{height:"5rem" , width:"5rem"}} role="status">
  <span className="visually-hidden">Loading...</span>
</div></center>
    </>
  )
}

export default LoadingSpinner