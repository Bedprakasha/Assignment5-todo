import React, { useState } from 'react'
import "./App.css"

const App = () => {
  const [inputValue,setInputValue]=useState('')
  const [task,setTask]=useState([])
  const [isEditing, setIsEditing]=useState(false)
  const [editTask, setEditTask]=useState(null)

  const handleChange=(e)=>{
    setInputValue(e.target.value)
  }

  const handleSubmit=()=>{
    if(inputValue.trim() ===''){
      alert('please enter a value')
      return
  

    }
    if(isEditing){
      const updatedTask=[...task]
      updatedTask[editTask]=inputValue
      setTask(updatedTask)
      setIsEditing(false)
      setEditTask(null)
      setInputValue('')
    }
    else{
      setTask([...task,inputValue])
      setInputValue('')
    }
    
   

  }

  const handleEdit=(index)=>{
    setInputValue(task[index])
    setIsEditing(true)
    
    setEditTask(index)
    

  }
  const handleDelete=(index)=>{
    setTask(task.filter((_, i) => i !== index));
  }
 


  return (
    <>
    <div>
        <h1>TODO APP</h1>
    </div>
    <div className='container'>
    <input placeholder='Enter your task' value={inputValue} onChange={handleChange} />
    <button onClick={handleSubmit}>{isEditing?'Edit':'Submit'}</button>
    </div>
    <div className='tasks'>
    <ul>
      {task.map((item,index)=>(
         <li key={index}>
          <span>{item}</span>
         <button onClick={()=>handleEdit(index)}>Edit</button>
         <button onClick={()=>handleDelete(index)}>Delete</button>
         </li>
      ))}
    </ul>
    </div>
    
    </>
  )
}

export default App