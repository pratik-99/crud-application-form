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

  const [tableData, setTableData]=useState([])  
  function onHandleChange(event){
    setFormData(
      prev=>{
      return{...prev, [event.target.name]:[event.target.value]}
    })
  }
  function handleSubmit(e){
    e.preventDefault()

  }
  console.log(formData)
  return (
    <div className='card-box'>

    <form onSubmit={handleSubmit}>
      <input placeholder='Firstname' onChange={onHandleChange} name="firstname"></input>
      <input placeholder='Lastname' onChange={onHandleChange} name="lastname"></input>
      <input placeholder='Age' onChange={onHandleChange} name="age"></input>
      <input placeholder='Phnoe.no' onChange={onHandleChange} name="phone"></input>
      <button>submit</button>
    </form>


    </div>
  );
}

export default App;
