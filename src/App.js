
import { useState } from 'react';
import './App.css';
import  Buttons from  './Buttons';
import Content from './Content';
function App() {
  const[userdata,setuserdata]=useState()
  const userFunction=async()=>{
    const URL="https://jsonplaceholder.typicode.com/users"
  const response=await fetch (URL)
  const data=await response.json()
  console.log(data)
  setuserdata(data)
  }
  const postFunction=async()=>{
    const URL="https://jsonplaceholder.typicode.com/posts"
    const response =await fetch(URL)
    const data = await response.json()
    console.log(data)
    setuserdata(data)
  }
  const contentFunction=async()=>{
    const URL="https://jsonplaceholder.typicode.com/comments"
    const response=await fetch(URL)
    const data=await response.json()
    console.log(data)
    setuserdata(data)
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <Buttons
        userFunction={userFunction}
        postFunction={postFunction}
        contentFunction={contentFunction}
        />
        <Content
        userdata={userdata}
        />
      </header>
    </div>
  );
}

export default App;
