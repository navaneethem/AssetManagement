
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import { Link } from "react-router-dom";
import CreateAsset from "./CreateAsset";
import Login from "./Login"
import Registration from "./Registration";


function App() {
  return (
    <div>
     <MyRouter></MyRouter>
    </div>
  );
}


function MyRouter(){
return(
  <Router>
    {!localStorage.getItem('mytoken') && <Link to='/'>LOGIN</Link>}<br></br>
    {localStorage.getItem('mytoken') && <Link onClick={()=> window.location='/'} to='/login'>LogOUT</Link>}<br></br>
   {localStorage.getItem('mytoken') && <Link to='/asset'>Create Asset</Link>}<br></br>
    <Link to='/register' >Register</Link>

  <Routes>
    <Route path='/' element={<Login/>}></Route>
    <Route path='register' element={<Registration/>}></Route>
    <Route path='/asset' element={<CreateAsset/>}></Route>
    

  </Routes>





  </Router>
)
}














export default App;
