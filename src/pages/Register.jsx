import React, {useState, useEffect}from 'react'
import { useMenu } from '../Contexts/MenuContext'
import {useNavigate} from 'react-router-dom'


const Register = () => {

  useEffect(()=>{
    if(localStorage.getItem("user-info")){
      navigate("/galerija")
    }
  },[])

  const setMenu = useMenu();
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

 async function SignUp(e){
    e.preventDefault();
    let item = {username, email, password};
    console.warn(item);

   let result = await fetch("http://localhost:8000/api/register", {
      method: "POST",
      body: JSON.stringify(item),
      headers: {
        "Content-Type":'application/json',
        "Accept": 'application/json'
      }
    });

    result = await result.json();
    localStorage.setItem("user-info", JSON.stringify(result));
    navigate("/galerija");
  }

  return (
    <div className={setMenu === false? "profil":"profil active"}>
    <h3>Register</h3>
    <div className='wrapper'>
      <form onSubmit={SignUp}>
        <div className='inputBox'>
          <input type="text" value={username} onChange={(e)=>setUserName(e.target.value)} placeholder='Username' className='form-control' required/>
        </div>
        <div className='inputBox'>
          <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='E-mail' className='form-control' required/>
        </div>
        <div className='inputBox'>
          <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Password' className='form-control' required/>
        </div>

        <button type="submit">Register</button>
      </form>

    </div>
    
  </div>
  )
}

export default Register