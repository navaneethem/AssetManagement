import {useState} from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import './App.css'

function CreateAsset(){

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
        .post("http://localhost:5000/assets",inputs)
        .then(response => {
          console.log('Promise Fullfilled')
          console.log(response)
        
        })
       
  
  
      }




    return(<div id="form-container">
        <form id="asset" onSubmit={handleSubmit}>
            <div><label>Asset Model: <input style={{width:'100%'}} type='text' name='am_model' value={inputs.am_model || ""} onChange={handleChange} required></input></label></div>
          <div> <label>Serial Number: <input style={{width:'100%'}} type='text' name='am_snumber' value={inputs.am_snumber || ""} onChange={handleChange} required></input></label></div>
          <div><label>Year:<input style={{width:'100%'}} type='text' name='am_myyear' value={inputs.am_myyear || ""} onChange={handleChange} required></input></label> </div>
          <div><label>Purchase Date: <input style={{width:'100%'}} type='date' name='am_pdate' value={inputs.am_pdate || ""} onChange={handleChange} required></input></label></div>
          <div><label>Warranty:<input style={{width:'100%'}} type='text' name='am_warranty' value={inputs.am_warranty || ""} onChange={handleChange} required></input></label></div>
          <div><label>Warranty From: <input style={{width:'100%'}} type='date' name="am_from" value={inputs.am_from || ""} onChange={handleChange} required></input></label></div>
          <div><label>Warranty To: <input style={{width:'100%'}} type='date' name='am_to' value={inputs.am_to || ""} onChange={handleChange} required></input></label></div>
      <div>
          <button type='submit' id="submit" className='submit'>Submit</button><>&nbsp;</><>&nbsp;</><>&nbsp;</>
            <button type='reset' id="submit" className='reset'>Clear</button>      

</div>
        </form>
    </div>)
}

export default CreateAsset;