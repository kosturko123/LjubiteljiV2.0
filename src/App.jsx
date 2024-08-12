import "../src/styles/main.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Galerija from "./pages/Galerija";
import FriendList from "./components/FriendList";
import SearchBar from "./components/SearchBar";
import {MenuProvider} from "./Contexts/MenuContext"
import Protected from "./Protected Routes/Protected";

function App() {
 return(
  <MenuProvider>
  <Router>
  {
    localStorage.getItem("user-info")?
    <div className="App">
      <div className="pageContainer">
      <Sidebar />
      <FriendList/>
      <Routes>
        <Route path = "/login" element = {<Login/>}/>
        <Route path = "/galerija" element ={<Protected Cmp={Galerija}/>}/> 
        <Route path = "/register" element = {<Register/>}/>
      </Routes>
      </div>
      <SearchBar/>
    </div>
    :
    <div className="App">
      <div className="pageContainer">
      <Sidebar />
      <Routes>
        <Route path = "/login" element = {<Login/>}/>
        <Route path = "/galerija" element ={<Protected Cmp={Galerija}/>}/> 
        <Route path = "/register" element = {<Register/>}/>
      </Routes>
      </div>
    </div>
  }
  </Router>
  </MenuProvider>
 );
}

export default App;

/**
 * 
 * {
 * localStorage.getItem(user-info)?
 * <div className="App">
      <div className="pageContainer">
      <Sidebar />
      <FriendList/>
      <Routes>
        <Route path = "/login" element = {<Login/>}/>
        <Route path = "/galerija" element ={<Protected Cmp={Galerija}/>}/> 
        <Route path = "/register" element = {<Register/>}/>
      </Routes>
      </div>
      <SearchBar/>
    </div>
    :
    <div className="App">
      <div className="pageContainer">
      <Sidebar />
      <Routes>
        <Route path = "/login" element = {<Login/>}/>
        <Route path = "/galerija" element ={<Protected Cmp={Galerija}/>}/> 
        <Route path = "/register" element = {<Register/>}/>
      </Routes>
      </div>
    </div>
  }
 * 
 */