import React, { Component } from 'react';
import "./Main.css"
import Bg from "../assets/bg.svg"
const Head = () => {
    return ( 
        <>
        <section>
        <img class="bg" src={Bg}></img>
        <div>
            <div class="ux">UX/UX Designer</div>
           <div class="portfolio">
              <div class="port">PORT</div>
              <div class="folio">FOLIO</div>
           </div>
        </div>
       <div class="date">2025</div> 
    </section>
        </>
     );
}
 
export default Head ;