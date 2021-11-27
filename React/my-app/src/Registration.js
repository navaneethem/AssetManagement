
import { useState, useEffect } from "react";
import axios from "axios";
import './App.css'

function Registration(){

const [inputs,setInputs]= useState({});
    function handleChange(event){
      const name=event.target.name;
      const value=event.target.value;
  
      setInputs(values => ({...values,[name]: value}))
    }



 function handleSubmit(event){
    event.preventDefault();
    console.log(inputs);


    axios
    .post("http://localhost:3002/register",inputs)
    .then(response => {
      console.log('Promise Fullfilled')
      console.log(response)
      window.location='/login'
    })


  }


    return(<>
    <div id="regcontainer">
        <form id="regform" onSubmit={handleSubmit}>
        <div><label className="regform">First Name: <input style={{width:'100%'}} type='text' name='first_name' value={inputs.first_name || "" } onChange={handleChange} ></input></label></div>
        <div><label className="regform">Last Name:<input style={{width:'100%'}} type='text' name='last_name' value={inputs.last_name || ""} onChange={handleChange}></input></label></div>
        <div><label className="regform">Age:<input  style={{width:'100%'}} type='number' name='age' value={inputs.age || ""} onChange={handleChange}></input ></label></div>
        <div><label className="regform">Gender<input style={{width:'100%'}} type='text' name='gender' value={inputs.gender || ""} onChange={handleChange}></input></label></div>
        <div><label className="regform">Address:<input style={{width:'100%'}} type='textbox' name='address' value={inputs.address || ""} onChange={handleChange}></input></label></div>
        <div><label className="regform">Phone Number<input style={{width:'100%'}} type='tel' name='phone' value={inputs.phone || ""} onChange={handleChange}></input></label></div>
        <div><label className="regform">User Name:<input style={{width:'100%'}} type='email' name='email' value={inputs.email || ""} required onChange={handleChange}></input></label></div>
        <div><label className="regform">Password: <input style={{width:'100%'}} type='password' name='password' value={inputs.password || ""} required onChange={handleChange}></input></label></div>

        <div><button id="submit">Submit</button></div>
        </form>
    </div>
    </>)
}

export default Registration;