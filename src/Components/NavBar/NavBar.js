import React, { useEffect, useState } from 'react'
import { Link,useNavigate } from "react-router-dom";
import './navBar.css'
import logo from '../../logo.png'


export default function NavBar() {
  
  const navigate = useNavigate()
const disconnectUser = () =>{
  localStorage.clear();
}

  const [toggleMenu, setToggleMenu] = useState(false);
  const [width, setWidth] = useState(window.innerWidth)
  const toggleNav = () => {
    setToggleMenu(!toggleMenu)
  }
const backToHome = ()=>{
  navigate('/')
}

  useEffect(() => {
    const changeWidth = () => {
      setWidth(window.innerWidth)
    }
    window.addEventListener('resize', changeWidth);
    return () => {
      window.removeEventListener('resize', changeWidth)
    }
  }, [])

  return (
    <nav className='nav-container'>
    {(toggleMenu || width > 500) && (
      <ul className="list-items-nav">
      <img className="nav-logo"  src={logo} onClick={backToHome} alt="" /> 
      {(!localStorage.token?
        <p className='div-item-nav'>
        <Link className='item-nav' to="/signin"> <li  >Inscription </li></Link>
        <Link className='item-nav' to="/login"> <li  > Connection </li></Link>
        </p>
        :
         <Link className='item-nav' onClick={disconnectUser} to="/"> <li>Déconnection </li></Link>
         )}
        
        </ul>
      )}
      <button className="btn-nav" onClick={toggleNav}>+</button>
    </nav>
  )
}
