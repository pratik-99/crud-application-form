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
    setTableData(prev=>[...prev, formData])
    setFormData(prev=>{return{
      firstname:"", 
      lastname:"", 
      age:"",
      phone:""}
    })
  }
  console.log(tableData)
  return (
    <div className='card-box'>
     <div>
      <form onSubmit={handleSubmit}>
        <input placeholder='Firstname' 
        onChange={onHandleChange} name="firstname" value={formData.firstname}>
        </input>
        <input placeholder='Lastname' 
        onChange={onHandleChange} name="lastname" value={formData.lastname}></input>
        <input placeholder='Age' 
        onChange={onHandleChange} name="age" value={formData.age}></input>
        <input placeholder='Phone.no' 
        onChange={onHandleChange} name="phone" value={formData.phone}></input>
        <button style={{backgroundColor:"skyblue", borderRadius:"5px", border:"1px solid"}}>submit</button>
      </form>
    
      </div> 
      <div>

    {tableData.length>0 &&
    <table>
      <thead>
        <tr>

        <th>FirstName</th>
        <th>LastName</th>
        <th>age</th>
        <th>phone</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((data,index)=>(
          <tr>
            <td key={index}>{data.firstname}</td>
            <td >{data.lastname}</td>
            <td >{data.age}</td>
            <td >{data.phone}</td>
          </tr>
        ))}
      </tbody>

    </table>
      }

      </div>
    
    </div>
  );
}

export default App;
