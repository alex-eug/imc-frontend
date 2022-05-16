import React, { useEffect, useState } from 'react'
import { Link,useNavigate } from "react-router-dom";
import './navBar.css'
import logo from '../../logo.png'
import axios from 'axios';
import {FaHamburger} from 'react-icons/fa'

export default function NavBar() {
  let token = localStorage.getItem('token')
  const navigate = useNavigate()
const disconnectUser = () =>{
  localStorage.clear();
  toggleNav()
}

  const [toggleMenu, setToggleMenu] = useState(false);
  const [width, setWidth] = useState(window.innerWidth)
  const toggleNav = () => {
    setToggleMenu(!toggleMenu)
  }
const backToHome = ()=>{
  navigate('/')
  setToggleMenu(false)
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

  const deleteAccount = () => {
    
    let answer = prompt("voulez-vous supprimer votre compte?Y/N")
    if(answer.toLowerCase()==="y"){
      const config = {
        headers: { Authorization: `Bearer ${token}` }
    };
      axios.delete('https://stormy-hollows-71516.herokuapp.com/delete',config)
      localStorage.clear();
      navigate('/')
      toggleNav()
    }else{
      return
    }
  }



  return (
    <nav className='nav-container'>
    {(toggleMenu || width > 500) && (
      <ul className="list-items-nav">
      {(!localStorage.token?
        <p className='div-item-nav'>
        <Link className='item-nav' to="/signin" onClick={toggleNav}> <li  >Inscription </li></Link>
        <Link className='item-nav' to="/login" onClick={toggleNav}> <li  > Connection </li></Link>
        
        </p>
        :
        <p className='div-item-nav'>
        <Link className='item-nav' onClick={disconnectUser} to="/"> <li>Déconnection </li></Link>
        <li
        onClick={deleteAccount}
        className='delete-item'>Supprimer mon compte</li>
        </p>
        )}
        
        </ul>
        )}
        <img className="nav-logo"  src={logo} onClick={backToHome} alt="" /> 
         <FaHamburger className='btn-nav' onClick={toggleNav} />
    </nav>
  )
}
