import React, { Component } from 'react';
import "./projs.css"
import imgs from "../assets/Group 28.svg"
const Proj = () => {
    return ( 
        <>
        <div class="adds">
         <div class="all">ALL</div>
         <div class="appss">APPS</div>
         <div class="websitess">WEBSITES</div>
         <div class="logoss">LOGOS</div>
        </div>
        <div class="alls"><img src={imgs} width="100%"></img></div>
        </>
     );
}
 
export default Proj;