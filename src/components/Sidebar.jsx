import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import Icon from "../images/LogoWhite.svg"
import Dashboard from '../images/dashboard.svg'
import Profile from '../images/profile.png'
import { useLocation } from 'react-router-dom'
import { useMenu, useMenuUpdate } from '../Contexts/MenuContext'


const Sidebar = () => {

  const location = useLocation();
  const navigate = useNavigate();
  let user = JSON.parse(localStorage.getItem("user-info"));

  function logOut(){
    localStorage.clear();
    navigate("/login");
  }
  

 /* const [closeMenu, setCloseMenu] = useState(false);

  const handleCloseMenu = ()=>{

    setCloseMenu(!closeMenu);
  }
  */

  const setMenu = useMenu();
  const updateMenu = useMenuUpdate();

  return (
    <div className={setMenu === false ? "sidebar": "sidebar active"}>
      <div className={setMenu === false ? "logoContainer": "logoContainer active"}>
        <img src={Icon} alt="icon" className='icon'/>
        <h2 className='title'>Uzivaci</h2>
      </div>
      <div className={setMenu === false ? "burgerContainer": "burgerContainer active"}>
        <div className="burgerTrigger" onClick={updateMenu}></div>
        <div className="burgerMenu"></div> 
      </div>
      <div className="profileContainer">
        {
          localStorage.getItem("user-info")?
          <>
          <img src={Profile} alt="profile" className='profile' />
          <div className="profileContents">
            <p className='name'>{user.username}</p>
            <p className='email'>{user.email}</p>
        </div>
          </>
          :
          <>
          <img src={Profile} alt="profile" className='profile' />
          <div className="profileContents">
            <p className='name'>Guest</p>
            <p className='email'>Guest</p>
        </div>
          </>
        }
      </div>
      <div className={setMenu === false ? "contentsContainer": "contentsContainer active"}>
        <ul>
          {
            localStorage.getItem("user-info") ?
            <>
            <li className={location.pathname === "/galerija" ? "active" : ""}>
            <img src={Dashboard} alt="dashboard" />
            <a href="/galerija">Galerija</a>
            </li>
            <li className="logout">
                <img src={Dashboard} alt="dashboard" />
                <a onClick={logOut}>Logout</a>
            </li>
            </>
            :
            <>
            <li className={location.pathname === "/login"?"active":""}>
                <img src={Dashboard} alt="dashboard" />
                <a href="/login">Login</a>
            </li>
            <li className={location.pathname === "/register" ? "active": ""}>
                <img src={Dashboard} alt="dashboard" />
                <a href="/register">Register</a>
            </li>
            </>
          }
            
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
