import React from 'react'

const Content = ({userdata}) => {
    console.log(userdata)
  return (
    
    <section>
        
        <p>{JSON.stringify(userdata)}</p>
    </section>
  )
}

export default Content