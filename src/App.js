
import { useEffect, useState } from 'react';
import './App.css';
import  Buttons from  './Buttons';
import Content from './Content';
function App() {
  const[userdata,setuserdata]=useState([])
  const locationFunction=(event)=>{
    const reqType=event.target.innerText.toLowerCase()
    setreqType(reqType)
  }
  const [reqType,setreqType]=useState("users")
  const URL="https://jsonplaceholder.typicode.com"
  useEffect(()=>{
    const fetchData=async()=>{
    try{
    const response=await fetch(`${URL}/${reqType}`)
    if(!response.ok) throw Error("data not received")
    const data=await response.json()
    setuserdata(data)
    }catch(err){
      console.log(err.message)
    }}
    fetchData()

  },[reqType])
  
  return (
    <div className="App">
      <header className="App-header">
        <Buttons
        locationFunction={locationFunction}
        />
        <Content
        userdata={userdata}
        />
      </header>
    </div>
  );
}

export default App;
