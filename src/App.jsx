import { useState } from 'react'
import "./assets/index.css"
import SideBar from './components/sidebar'
import Navbar from './components/navbar'
import { Routes,Route, useLocation} from 'react-router-dom'
import Login from './components/AuthComponent/Login'
import Homepage from './pages/Homepage'
import Register from './components/AuthComponent/Register'
function App() {
  const location = useLocation();
  const hidelauoyt = location.pathname === "/login" || location.pathname === "/register";
  return (
    <>
    {/* <h1 className='bg-amber-300'>hello world</h1> */}

     {!hidelauoyt && <SideBar/> } 
     {!hidelauoyt && <Navbar/> } 
      <Routes>
        <Route path='/login' element={<Login/>} ></Route>
        <Route path='/register' element={<Register/>} ></Route>
        <Route path='/' element={<Homepage/>} />
      </Routes>
    </>
  )
}

export default App
