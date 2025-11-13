import React, { Component } from 'react';
import "./Nav.css"
import logo from "../assets/logo.svg"
import "../font/blowbrush.otf"
const Nav = () => {
    return ( 
        <>
         <header class="head">
        <img class="logo" src={logo}></img>
        <ul class="menu">
            <li>Home</li>
            <a href="http://" target="_blank" rel="noopener noreferrer"><li>Portfolio</li></a>
            <li>About me</li>
            <li> Contact me</li>
        </ul>
        <div class="lets">LET'S TALK</div>
       </header>
               </>
     );
}
 
export default Nav;