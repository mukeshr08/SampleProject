import React from 'react'
import './App.css'
const buttons = ({locationFunction}) => {
  return (
    <div className='buttongrid'>
        <button onClick={locationFunction}>Users</button>
        <button onClick={locationFunction}>Posts</button>
        <button onClick={locationFunction}>Comments</button>

    </div>
  )
}

export default buttons