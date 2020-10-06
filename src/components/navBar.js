import React, {useState}from "react";


import Logo from "../images/logo.svg";

import "./styles/navBar.css";

function NavBar() {
  
  const [status, setStatus] = useState('close')
  /* const menu=document.getElementById('manu') */
  const expandMenu = (event)=>{
    event.preventDefault()
    const menu = document.getElementById('menu')
    setStatus(status==='open' ? 'close' : 'open')
    menu.classList.toggle('expand')
}
  return (
    <div>
      <div className="navBar">
        <img className="navBar__logo" src={Logo} alt="logo" />

        <div className="navBar__items " status={status} id="menu">
          <ul className="navBar__itemsMenu">
            <li className="navBar__items--link">PRODUCT</li>
            <li className="navBar__items--link">FEATURES</li>
            <li className="navBar__items--link">PRICING</li>
            <li className="navBar__items--link">LOGIN</li>
          </ul>
        </div>

        <div onClick={expandMenu} className="burgerMenu"> 
        
            <i className={status}></i>
            <i className={status}></i>
            <i className={status}></i>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
