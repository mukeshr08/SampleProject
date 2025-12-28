import React from 'react'

const Content = ({userdata}) => {
    console.log(userdata)
  return (
    
    <ul>
        {userdata.map((item)=>(
        <li key={item.id}>
           <p>{JSON.stringify(item)}</p>
        </li>
      ))}
    </ul>

    
    
  )
}

export default Content