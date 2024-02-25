import './App.css';
import React, { useState, useRef } from 'react';
function App() {
  const [x, setx]=useState([])
  const inputRef=useRef()
  const add =()=>{
const value =inputRef.current.value
const newData={completed: false, value}
  setx([...x,newData])
  inputRef.current.value=""
  }
  const itemDone=(index)=>{
    const newx=[...x]
    x[index].completed = !x[index].completed
    setx(newx)
  }

 const toDelete=(index)=>{
  const newx=[...x]
  newx.splice(index,1)
  setx(newx)
 }

  return (
    <div className="App">
    <h2> 📋 To Do List</h2>
 
 <ul>
  {
   x.map((item, index)=>{
    return <div className='div1'>
       <li  className ={item.completed ? "diffstyle" :" "}onClick={()=>itemDone(index)}>{item.value}</li>
       <span onClick={()=>toDelete(index)}>🗑️</span>
    </div>
   })
  }
 </ul>
 <input  ref={inputRef} placeholder="Please enter your task"/>
 <button onClick={add}>ADD</button>

    </div>
  );
}

export default App;
