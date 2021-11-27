
import { useState, useEffect } from "react";
import axios from "axios";
import './App.css'

function Login(){
     localStorage.clear();
     return (<>
     <h1 style={{textAlign:'center'}}> Login</h1>
     <MyForm/>
     </>);
     }



     function MyForm(props) {
         
         const [inputs, setInputs] = useState({});
        
         function handleChange(event){
            const name = event.target.name;
 const value = event.target.value;
 
 setInputs(values => ({...values, [name]: value}))
 }
 function handleSubmit(event) {
     
     event.preventDefault();
     //alert the current state
     console.log(inputs);
    
     axios
     .post('http://localhost:3002/login',inputs)
     .then(response => {
     
     localStorage.setItem('mytoken',response.data.accessToken)
     window.location='/asset'
    
     })

     .catch(error => {
         localStorage.clear();
         if(error.response){
             alert(error.response.data)
         }
     })
    }


    return(<>
    <div id="login">
        <form id="loginform" onSubmit={handleSubmit}>
            <div ><label className="loginform">Username:<input style={{width:'100%'}} type='email' name='email' value={inputs.email || ""} onChange={handleChange} required></input></label></div>
            <div ><label className="loginform">Password:<input type='password'  style={{width:'100%'}} name='password' value={inputs.password || ""} onChange={handleChange} required></input></label></div>
            <div><button id="submit" type='submit'>Submit</button></div>
        </form>
    </div>

    
    </>)

    }

export default Login;






















