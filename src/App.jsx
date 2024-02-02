import React, {useState} from "react"
import './App.css';

function App() {

  const [formData,setFormData]=useState(
    {
      firstname:"", 
      lastname:"", 
      age:"",
      phone:""
    }
    )
  function onHandleChange(event){
    setFormData(
      prev=>{
      return{...prev, [event.target.name]:[event.target.value]}
    })
  }
  console.log(formData)
  return (
    <div className='card-box'>

    <form>
      <input placeholder='Firstname' onChange={onHandleChange} name="firstname"></input>
      <input placeholder='Lastname' onChange={onHandleChange} name="lastname"></input>
      <input placeholder='Age' onChange={onHandleChange} name="age"></input>
      <input placeholder='Phnoe.no' onChange={onHandleChange} name="phone"></input>
    </form>
    </div>
  );
}

export default App;
