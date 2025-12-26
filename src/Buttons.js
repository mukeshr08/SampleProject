import React from 'react'
import './App.css'
const buttons = ({userfunction}) => {
  return (
    <div className='buttongrid'>
        <button onClick={userfunction}>Users</button>
        <button>Posts</button>
        <button>Content</button>

    </div>
  )
}

export default buttons