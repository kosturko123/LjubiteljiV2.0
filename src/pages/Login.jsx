import React, {useState, useEffect} from 'react'
import { useMenu } from '../Contexts/MenuContext'
import {useNavigate} from 'react-router-dom'

const Login = () => {

  const setMenu = useMenu();
  const navigate = useNavigate();

  useEffect(()=>{
    if(localStorage.getItem("user-info")){
      navigate("/galerija")
    }
  },[])

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function logIn(e){

    e.preventDefault();
    let item = {email,password}
    let result = await fetch("http://localhost:8000/api/login",{
      method: 'POST',
      headers:{
        "Content-Type":"application/json",
        "Accept":"application/json"
      },
      body: JSON.stringify(item)
    });

    result = await result.json();
    localStorage.setItem("user-info",JSON.stringify(result));
    if(localStorage.getItem("user-info") == "Email ili lozinka su pogresni"){
      
      
      localStorage.clear();
      navigate("/galerija");
      
    }
    console.log(localStorage.getItem("user-info"));
    navigate("/galerija");

  }


  return (
    <div className={setMenu === false? "dashboard":"dashboard active"}>
      <h3>Login</h3>
      <div className='wrapper'>
        <form onSubmit={logIn}>
          <div className='inputBox'>
            <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Email' required/>
          </div>
          <div className='inputBox'>
            <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Password' required/>
          </div>
          <div className='remember-forgot'>
          <label><input type="checkbox" />Remember me</label>
          <a href="#">Forgot password?</a>
        </div>
          <button type='submit'>Login</button>
        </form>

      </div>
      
    </div>
  )
}

export default Login
