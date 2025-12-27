import React from 'react'
import './App.css'
const buttons = ({userFunction,postFunction,contentFunction}) => {
  return (
    <div className='buttongrid'>
        <button onClick={userFunction}>Users</button>
        <button onClick={postFunction}>Posts</button>
        <button onClick={contentFunction}>Comments</button>

    </div>
  )
}

export default buttons